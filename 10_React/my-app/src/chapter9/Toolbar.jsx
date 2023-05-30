import React from 'react';

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid gray"
  },
  greeting: {
    marginRight: 8
  }
};

function Toolbar(props) {
  const { isLoggedIn, handleClickLogin, handleClickLogout } = props;

  return (
    <div style={styles.wrapper}>
      {/* Quiz:
        로그인/로그아웃 버튼을 누를 때마다 인사말이 나오고 안나오고 바뀌고,
        버튼도 로그인/로그아웃 버튼이 바뀌도록 만들기
      */}
      {/* isLoggedIn 값에 따라 조건부 렌더링 처리 */}
      
    </div>
  );
}

export default Toolbar;