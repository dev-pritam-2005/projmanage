import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app =express();

//basic configs
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended: true,limit: '16kb'}))
app.use(express.static("public"))


app.use(cookieParser())


//cors config
app.use(cors({
    origin : process.env.CORS_ORIGIN?.split(",")||"https://localhost:5173",
    credentials:true,
    methods:["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders:["Authorization","Content_type"]
    
}))


//import health check router

import healthCheckRouter from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js"
import projectRouter from "./routes/project.routes.js"

app.use("/api/v1/healthcheck",healthCheckRouter)
app.use("/api/v1/authRouter",authRouter)
app.use("/api/v1/projectRouter",projectRouter)



app.get("/",(req,res)=>{
    res.send("hi hello ");
})
export default app;



