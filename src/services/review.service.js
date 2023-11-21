import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { registReviewResponseDTO } from "../dtos/review.dto.js"
import { addDBReview } from "../models/review.dao.js";

// 가게가 추가되면 지역을 같이 매핑해줌
// 지역 매핑 후 응답 리턴
export const registReview = async (body) => {
    // 데이터 받아오기 - 사장님 테이블
	const { content, score, owner_id, user_id } = body;

    //가게 데이터로 들어올 것 : 상호명, 카테고리 (매핑이 너무 길어지므로 카테고리는 문자열로만)
    const addReviewData = await addDBReview(content, score, owner_id, user_id);

    // 이후 결과를 낼 때
    // 이미 상호명이 존재할 경우 에러를 냄 (response.status.js)
    if (addReviewData == -1) {
        throw new BaseError(status.OWNER_ALREADY_EXIST);
    } else {
        return registReviewResponseDTO(addReviewData);
    }
}