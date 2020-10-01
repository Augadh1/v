import * as seneca from "seneca";
import { Notification } from "./notification";

module.exports = function notificationService(options: seneca.Options) {
  this.add(
    "role:notificationService, cmd:registerEmailNotification",
    async function (msg: seneca.Options, respond: Function) {
      let mailer: Notification = new Notification(msg.options);
      let emailResponse = await mailer.sendEmail({
        to: [msg.email],
        text: "Thanks for Registering",
        subject: "mail sender",
        html:
          "Hi Dear User,<br> <br>Greeting!<br>Thanks for register, <br><b> here you will find best books and their reviews.<br></b>We help you to access things easily.<br><br> Thanks! <br> Vending Machine Project Team",
      });
      respond(null, { message: "email send successfully" });
    }
  );

  this.add(
    "role:notificationService, cmd:reviewEmailNotification",
    async function (msg: seneca.Options, respond: Function) {
      let mailer: Notification = new Notification(msg.options);
      let emailResponse = await mailer.sendEmail({
        to: [msg.email],
        text: "Thank you for your review",
        subject: "Review has been Saved",
        html:
          "Hi Dear User,<br> <br>Greeting!<br>Thanks for submiting your review,<br><br> Thanks! <br>Team InTime-Tec",
      });
      respond(null, { message: "email send successfully" });
    }
  );
};
