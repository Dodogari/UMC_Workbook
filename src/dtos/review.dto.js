// 데이터 가공 : 이름과 지역명만 전달하고 싶음
export const registReviewResponseDTO = (data) => {
    return {"content": data.content, "score": data.score};
}