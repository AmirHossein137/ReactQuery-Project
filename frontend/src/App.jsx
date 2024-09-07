import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Single from "./components/Single";
import AddProduct from "./components/AddProduct";
import Edit from "./components/Edit";
import { Toaster } from "react-hot-toast";
import Paginate from "./components/Paginate";
import InfinityQuery from "./components/InfinityQuery";

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
        <Toaster />
        <ReactQueryDevtools />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/single/:id" element={<Single />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/pagination" element={<Paginate />} />
            <Route path="/infinityQuery" element={<InfinityQuery />} />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </>
  );
}
export default App;
