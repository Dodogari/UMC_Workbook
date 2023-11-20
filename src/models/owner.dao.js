// DB와 소통할 DAO 정의
import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { connectLocal, getOwnerID, insertOwnerSql, getLocalToOwnerID } from "./owner.sql.js";

// owner 데이터 삽입
export const addOwner = async (data) => {
    try{
        // 커넥션 풀 정의
        const conn = await pool.getConnection();
        
        // 중복 데이터 확인 (가게 이름으로)
        const [confirm] = await pool.query(confirmName, data.name);

        if(confirm[0].isExistName){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertOwnerSql, [data.name, data.category]);

        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 가게 정보 얻기
export const getOwner = async (ownerId) => {
    try {
        const conn = await pool.getConnection();
        const [owner] = await pool.query(getOwnerID, ownerId);

        console.log(owner);

        if(owner.length == 0){
            return -1;
        }

        conn.release();
        return owner;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 장소, 가게 매핑
export const setLocal = async (ownerId, localId) => {
    try {
        // 커넥션 풀 사용
        const conn = await pool.getConnection();
        
        await pool.query(connectLocal, [ownerId, userId]);

        conn.release();
        
        return;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);

    }
}

// 지역 반환
export const getOwnerLocalToOwnerID = async (userID) => {
    try {
        const conn = await pool.getConnection();
        const local = await pool.query(getLocalToUserID, userID);

        conn.release();

        return local;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}