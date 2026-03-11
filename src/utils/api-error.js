class ApiError extends Error{
    constructor(
        statuscode,
        message ="somthing went wrong",
        Error =[],
        stack=""
    ){
        super(message)
        this.message=message;
        this.data=null;
        this.success= false;
        this.errors= errors;
        this.statuscode=statuscode;
        
        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}


export{ApiError}
