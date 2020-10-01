const seneca = require("seneca");

module.sendEmailNotification = function sendEmailNotification(email, type) {
  seneca()
    .client()
    .act(
      `role:notificationService,cmd:${type},email:${email},options:{
            service: 'gmail',
            auth: {
                user: ${process.env.USEREMAIL},
                password: ${process.env.PASSWORD},
            },
        },`,
      () => {}
    );
}
