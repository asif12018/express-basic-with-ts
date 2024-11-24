"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
//router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.post('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        "success": true,
        "message": "user is created successfully",
        data: user
    });
});
courseRouter.post('/create-course', (req, res) => {
    const course = req.body;
    res.json({
        success: true,
        message: "Course is created successfully",
        data: course
    });
});
//middleware
const logger = (req, res, next) => {
    next();
};
app.get('/', logger, (req, res) => {
    res.send("Hello world");
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.send('got data');
});
exports.default = app;
