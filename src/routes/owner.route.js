import express from "express";
import { ownerAdd } from "../controllers/owner.controller.js";

export const ownerRouter = express.Router();

ownerRouter.post('/add', ownerAdd);