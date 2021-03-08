import Hello from './Hello'
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello />
    </Wrapper>
  );
}

export default App;
