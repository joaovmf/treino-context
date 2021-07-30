import Counter from "./components/Counter/Counter";
import Mirror from "./components/Mirror/Mirror";
import CountProvider from "./context/Count";
import ThemeProvider from "./context/Theme";
import Container from "./components/container/index";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <CountProvider>
        <Container>
          <Counter />
          <hr />
          <Mirror />
        </Container>
      </CountProvider>
    </ThemeProvider>
  );
};

export default App;
