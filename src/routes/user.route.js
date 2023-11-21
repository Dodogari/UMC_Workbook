import express from "express";
import asyncHandler from 'express-async-handler';
import { userSignin } from "../controllers/user.controller.js";
import { addUserMission } from "../controllers/user.controller.js";

export const userRouter = express.Router();

// post 요청
userRouter.post('/signin', asyncHandler(userSignin));
userRouter.post('/mission', asyncHandler(addUserMission));