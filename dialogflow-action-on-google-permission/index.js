const {dialogflow, Permission} = require('actions-on-google');
const colorMap = require('./colorMap')
const app = dialogflow({debug: true});




app.intent('Default Welcome Intent', (conv) => {
  // Asks the user's permission to know their name, for personalization.
  conv.ask(new Permission({
    context: 'Hi there, to get to know you better',
    permissions: ['NAME', 'DEVICE_PRECISE_LOCATION']
  }));
});

// Handle the Dialogflow intent named 'actions_intent_PERMISSION'. If user
// agreed to PERMISSION prompt, then boolean value 'permissionGranted' is true.
app.intent('actions_intent_PERMISSION', (conv, params, permissionGranted) => {
  if (!permissionGranted) {
    conv.ask(`OK, no worries. What's your favorite color?`);
  } else {
    console.log('conv.user', conv.user)
    conv.data.userName = conv.user.name.display;
    conv.ask(`Thanks, ${conv.data.userName}. What's your favorite color?`);
  }
});


// Handle the Dialogflow intent named 'favorite color'.
// The intent collects a parameter named 'color'.
app.intent('favorite color', (conv, {color}) => {
  const luckyNumber = color.length;
  const audioSound = 'https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg';
  if (conv.data.userName) {
    // If we collected user name previously, address them by name and use SSML
    // to embed an audio snippet in the response.
    conv.ask(`<speak>${conv.data.userName}, your lucky number is ` +
      `${luckyNumber}.<audio src="${audioSound}"></audio>` +
      `Would you like to hear some fake colors?</speak>`);
  } else {
    conv.ask(`<speak>Your lucky number is ${luckyNumber}.` +
      `<audio src="${audioSound}"></audio>` +
      `Would you like to hear some fake colors?</speak>`);
  }
});

// Handle the Dialogflow intent named 'favorite fake color'.
// The intent collects a parameter named 'fakeColor'.
app.intent('favorite fake color', (conv, {fakeColor}) => {
  // Present user with the corresponding basic card and end the conversation.
  conv.close(`Here's the color`, colorMap[fakeColor]);
});

exports.handler = (event, context, callback) => {

  app.handler(event, {}).then((res) => {
    if (res.status != 200) {
      callback(null, { "fulfillmentText": `I got status code: ${res.status}` });
    } else {
      callback(null, res.body);
    }
  }).catch((e) => {
    callback(null, { "fulfillmentText": `There was an error\n${e}` });
  });






}

