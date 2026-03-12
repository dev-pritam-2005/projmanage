import express from "express"
import cors from "cors"
const app =express();

//basic configs
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended: true,limit: '16kb'}))
app.use(express.static("public"))

//cors config
app.use(cors({
    origin : process.env.CORS_ORIGIN?.split(",")||"https://localhost:5173",
    credentials:true,
    methods:["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders:["Authorization","Content_type"]
    
}))


//import health check router

import healthCheckRouter from "./routes/healthcheck.routes.js";

app.use("/api/v1/healthcheck",healthCheckRouter)

app.get("/",(req,res)=>{
    res.send(" welcome to pd,s server");
})
export default app;



