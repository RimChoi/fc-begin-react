import React from 'react';

function Hello({ color, name, isSpecial }) {
    
    return (
        <h1 style={{ 
            color, 
        }}>
            { isSpecial ? <b>*</b> : 'X' } {/** 3항 연산자를 이용한 조건부 렌더링 */}
            안녕하세요. {name}
            { isSpecial && <b>*</b> } {/** && 연산자를 이용한 렌더링 */}
        </h1>
    );
}

Hello.defaultProps = {
    name: 'unKnown',
    color: 'lightblue',
}

export default Hello;