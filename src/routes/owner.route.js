import express from "express";
import { ownerAdd } from "../controllers/owner.controller.js";
import asyncHandler from 'express-async-handler';

export const ownerRouter = express.Router();

ownerRouter.post('/add', asyncHandler(ownerAdd));