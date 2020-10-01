import * as nodeMailer from "nodemailer";

export class NodeMailer {
  options: nodeMailer.SentMessageInfo;
  transporter: nodeMailer.Transporter;

  private createTransport(): nodeMailer.Transporter {
    return nodeMailer.createTransport({
      service: this.options.service,
      auth: {
        user: this.options.auth.user,
        pass: this.options.auth.password,
      },
    });
  }

  constructor(options: nodeMailer.SentMessageInfo) {
    this.options = options;
    this.transporter = this.createTransport();
  }

  send(emailRequest: nodeMailer.SentMessageInfo) {
    let request: nodeMailer.SendMailOptions = {
      from: this.options.auth.user,
      to: emailRequest.to,
      cc: emailRequest.cc,
      bcc: emailRequest.bcc,
      subject: emailRequest.subject,
      attachments: emailRequest.attachments,
    };
    if (emailRequest.html) {
      request.html = emailRequest.html;
    } else {
      request.text = emailRequest.text;
    }
    return new Promise(async (resolve, reject) => {
      try {
        this.transporter.sendMail(request, (err: Error, res: any) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  }
}
