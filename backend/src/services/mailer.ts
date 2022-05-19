import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7df68020b45f76",
    pass: "5d4124050c9e26",
  },
});

export default transport;
