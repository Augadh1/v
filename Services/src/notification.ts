import { NodeMailer } from "./email/nodeMailer";
import * as nodeMailer from "nodemailer";

export class Notification {
  private options: nodeMailer.SentMessageInfo;

  constructor(options: nodeMailer.SentMessageInfo) {
    this.options = options;
  }

  async sendEmail(emailDetails: nodeMailer.SentMessageInfo) {
    let mailer = new NodeMailer(this.options);
    await mailer.send(emailDetails);
  }
}
