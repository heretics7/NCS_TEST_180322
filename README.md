# 스마트문화앱 구현 
2022.03.18
김신일

기획 ////////////////////////////////////////////////////////////////////////

아마존 RDS DB(MySQL)와 연동하는 node(express 모듈을 활용한 서버구축)를 Backend
React를 Frontend로 하는 SPA 구현

제작 과정 ///////////////////////////////////////////////////////////////////

1. npm init으로 package.json 설치
2. server.js에서 express 모듈 설치 후 서버 연동 / 노드 첫 세팅 완료
3. routes/get.js 제작 / server 라우터 연결 성공
4. config.js 제작 / AWS_SQL에서 react_suppose 스키마 suppose 테이블 연동 성공
5. React 폴더 spa 생성 / 리액트 설치
6. concurrently 설치, proxy 설정 / node와 react 연동 완료

////////////////////////////////////////////////////////////////////////////
