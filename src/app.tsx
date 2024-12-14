import { QueryClient, QueryClientProvider } from "react-query";
import AppRoute from "./routes/app-route";

import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoute/>
    </QueryClientProvider>
  );
}

export default App;