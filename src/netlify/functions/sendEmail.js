const mailgun = require('mailgun-js');

exports.handler = async function (event, context) {
  const { email, subject, message } = JSON.parse(event.body);

  const DOMAIN = process.env.MAILGUN_DOMAIN;
  const apiKey = process.env.MAILGUN_API_KEY;
  const mg = mailgun({ apiKey: apiKey, domain: DOMAIN });

  const data = {
    from: 'Your Name <your-email@yourdomain.com>',
    to: email,
    subject: subject,
    text: message
  };

  try {
    const body = await mg.messages().send(data);
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    };
  }
};
