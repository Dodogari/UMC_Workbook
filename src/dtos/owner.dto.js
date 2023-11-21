// 데이터 가공 : 이름과 지역명만 전달하고 싶음
export const registOwnerResponseDTO = (data) => {
    return {"name": data.name, "category": data.category, "local_id": data.local_id};
}