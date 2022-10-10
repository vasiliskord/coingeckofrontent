import LandingPage from "./pages/LandingPage";
import CoinById from "./pages/CoinById";
import { Container } from "@mantine/core";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Router>
      <Container>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/coin/:id" element={<CoinById />} />
        </Routes>
      </Container>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
