import LandingPage from "./pages/LandingPage";
import { Pagination } from "@mantine/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingPage />{" "}
      </header>
      <Pagination total={10} />
    </div>
  );
}

export default App;
