import React from 'react';

function ApiRequest(props) {
  return (
    <div>
      
    </div>
  );
}

export default ApiRequest;

// 서버에 데이터 요청
// 서버: 데이터 달라고 하면 데이터 주는 애
// 데이터: html, css, js 또는 JSON 데이터 등
// 요청: 서버에 정해놓은 규격대로 맞춰서 보내야 됨, 어디 URL로 어떤 방법(GET/POST 등)으로 보낼지 등
// 일반적으로 데이터를 가져올 때(검색, 조회)는 GET요청
// 데이터를 보낼 때(추가, 수정, 삭제)는 POST방식 사용
// 그 외 PUT, PATCH, DELETE 등도 있음

// (참고)
// GET요청 하는 가장 쉬운 방법 = 브라우저 주소창이 GET요청 하는 곳임(근데 새로고침 됨)
// 자바스크립트를 이용하여 서버 쪽 데이터 요청 가능 = Ajax 사용하면 됨(비동기 방식, 새로고침 안됨)
// Ajax(Asynchronous JavaScript And XML, 비동기 자바스크립트와 XML) 기법을 사용하여 서버의 API를 호출함으로써 데이터를 수신

// Ajax 쓰는 다양한 방법
// 1. XMLHttpRequest(XHR) 객체 - (잘안씀)
// 이름에 XML이 들어가긴 하지만, XML 뿐만 아니라 모든 종류의 데이터를 가져올 수 있음
// 2. fetch() 함수 - ES6차의 HTTP 요청 함수
// 3. axios - 외부 라이브러리(제일 많이 씀)
// 라이브러리 쓰는 이유는? 편리하니까.. 코드도 간결하고 편의 기능도 많음

// Axios 라이브러리 설치
// npm install axios
// 기본 사용법
// axios.get('url').then();
// 공식 문서
// https://axios-http.com/kr/docs/intro