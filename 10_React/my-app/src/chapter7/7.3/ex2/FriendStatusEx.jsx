import { useEffect, useState } from "react";

// 개념 설명만을 위한 예제
// isOnline이라는 state에 따라서 친구의 상태가 온라인인지 아닌지를 텍스트로 보여주는 컴포넌트
function FriendStatusEx(props) {
  const [isOnline, setIsOnline] = useState(null);
  
  // 친구의 온라인 상태를 구독할 수 있는 ChatAPI 모듈이 있다고 가정한 예
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    // 친구의 상태를 구독하는 API를 호출
    // ChatAPI는 실제 동작하는 코드가 아닌 Hook을 설명하기 위한 예시 코드
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    return () => {
      // 구독을 해지하는 API를 호출
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
};