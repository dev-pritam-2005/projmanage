import { body } from "express-validator";

const userRegisterValidator=()=>{
    return[
        body("email")
            .trim()
            .notEmpty()
            .withMessage("email is requaired")
            .isEmail()
            .withMessage("Email is invalid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("username is must requaired")
            .isLowercase()
            .withMessage("username must be in lowercase")
            .isLength({min:3})
            .withMessage("username must be 3 char long"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is requaired"),
        body("fullname")
            .optional()
            .trim()

    ]
}

const userLoginValidator=()=>{
    return[
        body("email")
            .optional()
            .isEmail()
            .withMessage("Email is invalid"),
        body("password")
            .notEmpty()
            .withMessage("password is requaired")
    ]
}

export{
    userRegisterValidator,userLoginValidator
}