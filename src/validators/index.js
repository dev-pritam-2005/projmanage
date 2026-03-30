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

const userChangeCurrentPasswordValidator = () => {
  return [
    body("oldPassword").notEmpty().withMessage("Old password is required"),
    body("newPassword").notEmpty().withMessage("New password is required"),
  ];
};

const userForgotPasswordValidator = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
  ];
};
const userResetForgotPasswordValidator = () => {
  return [body("newPassword").notEmpty().withMessage("Password is required")];
};


const createProjectValidator = ()=>{
    return [
        body("name")
            .notEmpty()
            .withMessage("name is requaired"),
        body("description").optional() 
    ]
}


const addMembertoProjectValidator =()=>{
     return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("role")
      .notEmpty()
      .withMessage("Role is required")
      .isIn(AvailableUserRole)
      .withMessage("Role is invalid"),
  ];
}


export{
    userRegisterValidator,userLoginValidator,userChangeCurrentPasswordValidator,userForgotPasswordValidator,userResetForgotPasswordValidator,
    createProjectValidator,
    addMembertoProjectValidator
}