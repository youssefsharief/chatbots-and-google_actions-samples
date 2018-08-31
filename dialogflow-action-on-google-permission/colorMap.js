const { BasicCard} = require('actions-on-google');

module.exports = {
    'indigo taco': new BasicCard({
      title: 'Indigo Taco',
      image: {
        url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDN1JRbF9ZMHZsa1k/style-color-uiapplication-palette1.png',
        accessibilityText: 'Indigo Taco Color',
      },
      display: 'WHITE',
    }),
    'pink unicorn': new BasicCard({
      title: 'Pink Unicorn',
      image: {
        url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDbFVfTXpoaEE5Vzg/style-color-uiapplication-palette2.png',
        accessibilityText: 'Pink Unicorn Color',
      },
      display: 'WHITE',
    }),
    'blue grey coffee': new BasicCard({
      title: 'Blue Grey Coffee',
      image: {
        url: 'https://storage.googleapis.com/material-design/publish/material_v_12/assets/0BxFyKV4eeNjDZUdpeURtaTUwLUk/style-color-colorsystem-gray-secondary-161116.png',
        accessibilityText: 'Blue Grey Coffee Color',
      },
      display: 'WHITE',
    }),
  };