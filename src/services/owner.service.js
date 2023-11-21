import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { registOwnerResponseDTO } from "../dtos/owner.dto.js"
import { addDBOwner } from "../models/owner.dao.js";

// 가게가 추가되면 지역을 같이 매핑해줌
// 지역 매핑 후 응답 리턴
export const registOwner = async (body) => {
    // 데이터 받아오기 - 사장님 테이블
	const { name, category, local_id } = body;
    console.log(name);

    //가게 데이터로 들어올 것 : 상호명, 카테고리 (매핑이 너무 길어지므로 카테고리는 문자열로만)
    const addOwnerData = await addDBOwner(name, category, local_id);

    // 이후 결과를 낼 때
    // 이미 상호명이 존재할 경우 에러를 냄 (response.status.js)
    if (addOwnerData == -1) {
        throw new BaseError(status.OWNER_ALREADY_EXIST);
    } else {
        return registOwnerResponseDTO(addOwnerData);
    }
}