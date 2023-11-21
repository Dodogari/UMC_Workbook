import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { registOwner } from "../services/owner.service.js";

// 가게 추가 요청 처리 -> owner.service.js / 이후 응답
export const ownerAdd = async (req, res, next) => {
    console.log("특정 지역에 가게를 추가합니다.");
    console.log(req.body);
    res.send(response(status.SUCCESS, await registOwner(req.body)));
}