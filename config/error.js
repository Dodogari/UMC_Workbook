//에러 응답 객체 - 메세지 전송을 위함
export class BaseError extends Error {
    constructor(data) {
        super(data.message);
        this.data = data;
    }
}