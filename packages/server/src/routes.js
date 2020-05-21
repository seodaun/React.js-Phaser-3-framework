import express from 'express';

const router = express.Router();
router.route('/status').get((req, res) => {
  res.send('Server is up and running!');
});
//app.route: 중복 경로 이름 및 입력 오류를 피하기 위해 사용 합니다. 
//선택적 미들웨어로 HTTP 동사를 처리하는 데 사용할 수있는 단일 경로의 인스턴스를 리턴
export default router;
