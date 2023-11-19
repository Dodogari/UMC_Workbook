import express from 'express';
import { tempRouter } from './src/routes/temp.routes.js';
import { response } from './config/response.js';
import { userRouter } from './src/routes/user.route.js';
import { specs } from './config/swagger.config.js';
import SwaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
const port = 3000;

// .env 파일 사용 (환경 변수 관리)
dotenv.config();

// 단순 객체 문자열 형태로 본문 데이터 해석
app.use(express.urlencoded({extended: false})); 

// 스웨거
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

// 라우터 세팅
app.use('/umc_workbook', tempRouter);
app.use('/user', userRouter);
app.use('/temp', tempRouter);


// 서버 세팅
app.set('port', process.env.PORT || 3000)   // 서버 포트 지정
app.use(cors());                            // cors 방식 허용
app.use(express.static('public'));          // 정적 파일 접근
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)

// 에러 핸들링
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    console.log("error", err);
    res.status(err.data.status).send(response(err.data));
});


app.listen(port, () => {
    console.log(`Example app listening on port ${app.get('port')}`);
});