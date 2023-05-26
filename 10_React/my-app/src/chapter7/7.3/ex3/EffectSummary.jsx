import { useState } from "react";

function EffectSummary() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div>
      <p>카운트: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>카운트 +1</button>
      <p>이름: {name}</p>
      <input type="text" value={name} onChange={() => setName()} />
    </div>
  );
}

export default EffectSummary;