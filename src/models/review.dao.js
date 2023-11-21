// DB와 소통할 DAO 정의
import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { insertReviewSql } from "./review.sql.js";

// review 데이터 삽입
export const addDBReview = async (content, score, owner_id, user_id) => {
    try{
        // 커넥션 풀 정의
        const conn = await pool.getConnection();

        // 가게 추가 쿼리문 실행
        const result = await pool.query(insertReviewSql, [content, score, owner_id, user_id]);
        conn.release();
        return result;
        
    } catch (err) {
        console.error(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}