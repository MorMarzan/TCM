// const mailgun = require('mailgun-js');

// exports.handler = async function (event, context) {
//   try {
//     const { email, fullname, msg, phone } = JSON.parse(event.body);

//     const DOMAIN = process.env.MAILGUN_DOMAIN;
//     const apiKey = process.env.MAILGUN_API_KEY;
//     const mg = mailgun({ apiKey: apiKey, domain: DOMAIN });

//     const data = {
//       from: email,
//       to: 'Your Name <mormarzan@gmail.com>',
//       subject: 'New Lead from TCM website',
//       text: `${fullname} wrote: ${msg} contact details: ${email}, ${phone}`
//     };

//     const body = await mg.messages().send(data);

//     return {
//       statusCode: 200,
//       body: JSON.stringify(body)
//     };
//   } catch (error) {
//     console.error('Error in sendEmail function:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Failed to send email', details: error.message })
//     };
//   }
// };
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello, this is the updated sendEmail function!" }),
  };
};

// const handler = async (event) => {
//   try {
//     const subject = event.queryStringParameters.name || 'World'
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: `Hello ${subject}` }),
//       // // more keys you can return:
//       // headers: { "headerName": "headerValue", ... },
//       // isBase64Encoded: true,
//     }
//   } catch (error) {
//     return { statusCode: 500, body: error.toString() }
//   }
// }

// module.exports = { handler }
