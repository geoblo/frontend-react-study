import React, { useState } from 'react';

// 교재 코드
function Reservation(props) {
  // 여러 개의 입력 제어하기 => 여러 개의 state 선언
  const [breakfast, setBreakfast] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(2);

  const handleBreakfastChange = (e) => {
    setBreakfast(e.target.checked);
  };

  const handleGuestsChange = (e) => {
    setNumberOfGuests(e.target.value);
  };

  const handleRoomChange = (e) => {
  
  };

  const handleSubmit = (e) => {
    alert(`조식 여부: ${breakfast}, 투숙객 수: ${numberOfGuests}`);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식 여부:
        <input 
          type="checkbox"
          // checked 속성은 checkbox랑 radio 타입에 존재하고 boolean 값
          checked={breakfast}
          onChange={handleBreakfastChange}
        />
      </label>
      <br />
      <label>
        투숙객 수:
        <input 
          type="number" 
          value={numberOfGuests}
          onChange={handleGuestsChange}
        />
      </label>

      {/* 추가 예제 */}
      <br />
      룸 타입:
      <label>
        <input 
          type="radio"
          name="roomType"
          value="SINGLE"
          onChange={handleRoomChange}
        />
        싱글
      </label>
      <label>
        <input 
          type="radio" 
          name="roomType"
          value="TWIN"
          onChange={handleRoomChange}
        />
        트윈
      </label>
      <label>
        <input 
          type="radio" 
          name="roomType"
          value="DOUBLE"
          onChange={handleRoomChange}
        />
        더블
      </label>

      <button type='submit'>제출</button>
    </form>
  );
}

export default Reservation;