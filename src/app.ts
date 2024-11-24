

import express , {NextFunction, Request, Response} from 'express'
const app = express()

//parsers

app.use(express.json())


//router

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter)

userRouter.post('/create-user',(req:Request, res: Response)=>{
    const user = req.body;
    console.log(user);
    res.json({
        "success":true,
        "message":"user is created successfully",
        data:user
    })
})


courseRouter.post('/create-course',(req: Request, res: Response)=>{
    const course = req.body;
    res.json({
        success:true,
        message:"Course is created successfully",
        data:course
    })
})







//middleware

const logger = (req: Request, res: Response, next:NextFunction) =>{
    next();
}


app.get('/', logger,(req: Request , res: Response  ) =>{
    res.send("Hello world")
})

app.post('/', logger,(req: Request, res: Response)=>{
    console.log(req.body);
    res.send('got data')
})

export default app