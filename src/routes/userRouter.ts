import {Router} from "express";
import userController from "../controllers/userController";

import {validateSchema} from "../middlewares/validateSchema";
import {userSchema} from "../schemas/useSchema";

 const userRouter = Router();

userRouter.post("/signup",validateSchema(userSchema),userController.signUp);
userRouter.post("/signin",validateSchema(userSchema),userController.signIn);

export default userRouter;