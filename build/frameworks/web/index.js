"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../middlewares");
const PORT = process.env.PORT || 5000;
const app = express_1.default();
middlewares_1.attachMiddlewares(app);
app.listen(PORT, () => {
    console.log('listening on', PORT);
});