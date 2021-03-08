import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);    // 비 구조 할당

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1); // 함수형 업데이트? 성능 최적화와 관련이 있대 나중에 알아보도록 하자 ^^!
    }

    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button> {/** 함수를 호출하는게 아니다 onIncrease() X */}
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;