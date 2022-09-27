const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});