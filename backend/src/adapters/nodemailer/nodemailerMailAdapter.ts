import mailer from "../../services/mailer";
import { MailAdapter, SendMailData } from "../mailAdapter";

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await mailer.sendMail({
      from: "Equipe Feedget <naoresponda@feedget.com>",
      to: "Mauricio Cardoso <mauricio.cds00@gmail.com>",
      subject,
      html: body,
    });
  }
}
