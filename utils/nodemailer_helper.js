const nodemailer = require('nodemailer');

// Create a Nodemailer transporter using your email service provider's details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'quanhphan5301@gmail.com', // replace with your Gmail email address
    pass: 'xini drlv pklz ypzs',    // replace with your Gmail app password
  },
});

// Function to send a verification email
const sendVerificationEmail = (email, verificationLink) => {
  const mailOptions = {
    from: 'quanhphan5301@gmail.com',
    to: email,
    subject: 'Email Verification',
    html: `
      <p>Click the following link to verify your email:</p>
      <a href="${verificationLink}">Verify Email</a>
    `,
  };

  return transporter.sendMail(mailOptions);
};

exports.sendVerificationEmail = (email, verificationLink) => {
    sendVerificationEmail(email, verificationLink)
    .then(() => {
      console.log('Verification email sent successfully.');
    })
    .catch((error) => {
      console.error('Error sending verification email:', error);
    });
}


