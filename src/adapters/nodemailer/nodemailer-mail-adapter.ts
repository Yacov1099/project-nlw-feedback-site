import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e616a9a1ceaa83",
      pass: "9fb5b47848a529"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail( {subject, body}: SendMailData){

        await transport.sendMail({
          from: 'Equipe Feedget <oi@feedget.com>',
          to: 'Yacov Zimberknopf <vaipararnomei@gmail.com>',
          subject,
          html: body
        })

    }
}