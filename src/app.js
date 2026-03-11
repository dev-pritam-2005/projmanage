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



app.get("/",(req,res)=>{
    res.send(" hiii");
})
export default app;



