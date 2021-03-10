import { App } from "./app";
import EmailController from "./controllers/EmailController";

new App().getApp();

EmailController.sendEmail();