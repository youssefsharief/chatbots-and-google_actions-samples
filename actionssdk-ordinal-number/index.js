const { actionssdk } = require('actions-on-google');

const app = actionssdk({ debug: true });

app.intent('actions.intent.MAIN', (conv) => {
  conv.ask('<speak>Hi! <break time="1"/> ' +
    'I can read out an ordinal like ' +
    '<say-as interpret-as="ordinal">123</say-as>. Say a number.</speak>');
});

app.intent('actions.intent.TEXT', (conv, input) => {
  if (input === 'bye') {
    return conv.close('Goodbye!');
  }
  conv.ask('<speak>You said, ' +
    `<say-as interpret-as="ordinal">${input}</say-as></speak>`);
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

