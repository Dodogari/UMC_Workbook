import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addOwnerResponseDTO } from "../dtos/owner.dto.js"
import { addOwner, getOwner, getOwnerLocalToOwnerID, setLocal } from "../models/owner.dao.js";

// 가게가 추가되면 지역을 같이 매핑해줌
// 지역 매핑 후 응답 리턴
export const joinOwner = async (body) => {
		const local = body.local;

    //가게 데이터로 들어올 것 : 상호명, 카테고리 (매핑이 너무 길어지므로 카테고리는 문자열로만)
    const joinOwnerData = await joinOwner({
        'name': body.name,
        'category': body.category
    });

    // 이미 상호명이 존재할 경우 에러를 냄 (response.status.js)
    if(joinOwnerData == -1){
        throw new BaseError(status.OWNER_ALREADY_EXIST);
    }else{
        // 지역과 가게 매핑 후 DTO로 컨트롤러에 전달
        await setLocal(joinOwnerData, local);
        return addOwnerResponseDTO(await getOwner(joinOwnerData), await getOwnerLocalToOwnerID(joinOwnerData));
    }
}