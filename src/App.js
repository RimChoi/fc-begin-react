import Hello from './Hello'
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/> {/** boolean 값의 기본 값은 true */}
      <Hello />
    </Wrapper>
  );
}

export default App;
