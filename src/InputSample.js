import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState('');
    const onChange = (event) => {
        console.log(event.target, event.target.value);
        setText(event.target.value);
    }
    const onReset = () => {
        setText('');
    }
    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>Value: </b>
                {text}
            </div>
        </div>
    )
}

export default InputSample;