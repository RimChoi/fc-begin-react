import Hello from './Hello'
import './App.css'
/**
 * 
 * @description
 * 패스트 캠퍼스 리액트 강의 1.4 JSX
 * 1. <Tag> 는 닫혀있어야 한다.
 * 2. 2개 이상의 태그는 하나의 태그에 감싸야한다. <></> fragment
 * 3. 변수는 {} 안에 사용한다.
 * 4. class는 className 속성을 이용해서. style 는 객체 형태로.
 * 
 */
function App() {
  const name = 'React';
  const style = {
    background: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    <>
      {/* 주석은 중괄호 안에 */}
      
      <Hello 
        // 아니면 중간에..슬래시
      />
      <div style={style}>Hi. <span>{name}</span></div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
