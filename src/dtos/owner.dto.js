// 데이터 가공 : 이름과 지역명만 전달하고 싶음
export const addOwnerResponseDTO = (owner, local) => {
    return {"name": owner.name, "local": local};
}