"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var seneca = require("seneca");
seneca()
    .use('notificationService')
    .listen();
