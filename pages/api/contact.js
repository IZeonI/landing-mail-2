// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, name, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // o el proveedor que uses
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <osvaldomartinezespinosa@gmail.com>`, 
      to: 'osvaldomartinezespinosa@gmail.com',
      replyTo: email, 
      subject: `Nuevo mensaje: ${subject}`,
      text: message,
    });


    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
}
