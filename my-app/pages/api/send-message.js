const nodemailer = require("nodemailer");

const handler = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      port: 587,
      auth: {
        user: "rmthomas1998@gmail.com",
        pass: process.env.GOOGLE_PASSWORD,
      },
    });

    const msg = {
      from: "rmthomas1998@gmail.com",
      to: "jeffm2000@gmail.com",
      subject: "Powerwashing Inquiry",
      html: `<div><p>First Name: ${firstName}</p><p>Last Name: ${lastName}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p></div>`,
    };

    try {
      await transporter.sendMail(msg);
      res.status(200).send("success");
    } catch {
      res.status(500).send("error");
    }
  } catch {
    res.status(500).send("error");
  }
};

export default handler;
