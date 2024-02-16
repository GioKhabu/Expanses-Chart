import { AppWrapper, AppContentWrapper } from "./App.styles";
import Header from "./components/Header";
import Body from "./components/Body/Body";

function App() {
  return (
    <AppWrapper>
      <AppContentWrapper>
        <Header />
        <Body />
      </AppContentWrapper>
    </AppWrapper>
  );
}

export default App;
