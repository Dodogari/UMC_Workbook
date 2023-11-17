export const response = ({isSuccess, code, message}, result) => {
    //성공여부, HTTP 상태코드, 메세지, 응답 데이터 (JSON)
    return {
        isSuccess: isSuccess,
        code: code,
        message: message,
        result: result
    }
};