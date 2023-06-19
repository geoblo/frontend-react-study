import NewsList from "./components/NewsList";

function App() {
  return (
    <>
      <NewsList />
    </>
  );
}

export default App;

// 0. 패키지 설치
// npm install styled-components axios react-router-dom

// 1. newsapi 키 발급받기
// 아래 사이트 회원가입
// https://newsapi.org/

// API key
// ceb8d915e94f45079475365770e158c2

// 2. 사용할 API = 한국 뉴스를 가져오는 API
// https://newsapi.org/s/south-korea-news-api
// 1) 헤드라인 뉴스 불러오기
// 2) 헤드라인 중 특정 카테고리 뉴스 불러오기