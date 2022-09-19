import { Router } from "express";
import userRouter from "./userRouter";
import teacherRouter from "./teacherRouter";
import disciplineRouter from "./disciplineRouter";
// import testRouter from "./teacherRouter";

const router = Router();

router.use(userRouter);
router.use(teacherRouter);
router.use(disciplineRouter);
// router.use(testRouter);

export default router;