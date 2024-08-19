"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true })); // Now request object will have a body property
app.use((0, cookie_session_1.default)({ keys: ['asdf'] })); // Now request object will have a session property
app.use(loginRoutes_1.router);
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
