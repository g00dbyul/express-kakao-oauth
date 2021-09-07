"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
// get
app.get('/', function (req, res) {
    res.send('hello express');
});
app.get('/posts', function (req, res) {
    res.json([
        { id: 1, content: 'hello' },
        { id: 2, content: 'hello2' },
        { id: 3, content: 'hello3' },
    ]);
});
// 3010 포트로 서버 실행
app.listen(3000, function () {
    console.log('실행중');
});
