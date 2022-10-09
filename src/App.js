import LandingPage from "./pages/LandingPage";
import { Container } from "@mantine/core";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Container >
        <LandingPage />{" "}
      </Container>
    </QueryClientProvider>

  );
}

export default App;
