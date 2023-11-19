import express from 'express';
import { tempRouter } from './src/routes/temp.routes.js';
import { response } from './config/response.js';

const app = express();
const port = 3000;

// 라우터 세팅
app.use('/umc_workbook', tempRouter);

// 에러 핸들링
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    res.status(err.data.status).send(response(err.data));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});