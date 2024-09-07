import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Single from "./components/Single";
import AddProduct from "./components/AddProduct";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: 0,
      retry: 3,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-product" element={<AddProduct />}/>
            <Route path="/single/:id" element={<Single />}/>
          </Routes>
        </Layout>
      </QueryClientProvider>
    </>
  );
}

export default App;
