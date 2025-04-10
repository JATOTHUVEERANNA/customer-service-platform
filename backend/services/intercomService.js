const axios = require('axios');

const createIntercomTicket = async (user, category, message) => {
  const payload = {
    message_type: 'inapp',
    body: `Category: ${category}\nMessage: ${message}`,
    from: {
      type: 'user',
      email: user.email,
    },
  };

  await axios.post('https://api.intercom.io/messages', payload, {
    headers: {
      Authorization: `Bearer ${process.env.INTERCOM_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};

module.exports = { createIntercomTicket };
