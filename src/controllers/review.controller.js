import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { registReview } from "../services/review.service.js";

// 리뷰 추가 요청 처리 -> review.service.js / 이후 응답
export const reviewAdd = async (req, res, next) => {
    console.log("가게에 리뷰를 추가합니다.");
    console.log(req.body);
    res.send(response(status.SUCCESS, await registReview(req.body)));
}