// app.js
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Define routes
const homeRoutes = require('./routes/home');
app.use('/', homeRoutes);

// Add route for the contact page (pointing to index.ejs in the contact folder)
app.get('/contact', (req, res) => {
    res.render('contact/index'); // Render the index.ejs file inside the contact folder
});
// Add route for the contact page (pointing to index.ejs in the contact folder)
app.get('/privacy', (req, res) => {
    res.render('privacy/index'); // Render the index.ejs file inside the contact folder
});
// Add route for the contact page (pointing to index.ejs in the contact folder)
app.get('/tos', (req, res) => {
    res.render('tos/index'); // Render the index.ejs file inside the contact folder
});



require('dotenv').config(); // Load environment variables

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // Set to true for port 465
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


// Handle contact form submission
app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'ronanw@ronanwinfield.com.au',
        subject: `Contact Form Submission from ${name}`,
        html: `
            <h3>Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <a href="mailto:${email}" style="display: inline-block; padding: 10px 15px; background-color: #0984e3; color: white; text-decoration: none; border-radius: 5px;">Reply to this message</a>
        `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            return res.status(500).send('An error occurred while sending your message. Please try again later.');
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Your message has been sent successfully!');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
