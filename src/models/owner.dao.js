// DB와 소통할 DAO 정의
import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertOwnerSql, confirmName, getLocalToOwnerID } from "./owner.sql.js";

// owner 데이터 삽입
export const addDBOwner = async (name, category, local_id) => {
    try{
        // 커넥션 풀 정의
        const conn = await pool.getConnection();
        
        // 중복 데이터 확인 (가게 이름으로)
        const [confirm] = await pool.query(confirmName, name);

        if(confirm.isExistName){
            conn.release();
            return -1;
        }

        // 가게 추가 쿼리문 실행
        const result = await pool.query(insertOwnerSql, [name, category, local_id]);
        //const getOwner = await pool.query(getLocalToOwnerID, result.local_id);
        conn.release();
        return result;
        
    } catch (err) {
        console.error(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}