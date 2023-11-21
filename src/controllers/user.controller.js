import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { joinUser } from "../services/user.service.js";
import {startUserMission} from "../services/user.service.js";

export const userSignin = async (req, res, next) => {
    console.log("회원가입을 요청하였습니다!");
    console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinUser(req.body)));
}

export const addUserMission = async (req, res, next) => {
    console.log("미션을 추가하였습니다.");
    console.log("body:", req.body);

    res.send(response(status.SUCCESS, await startUserMission(req.body)));
}