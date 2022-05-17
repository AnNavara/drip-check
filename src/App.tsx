import React from 'react';
import Layout from './Layout/Layout';
import Search from './Components/Search/Search';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Layout>
            <Search />
        </Layout>
    </QueryClientProvider>
  );
}

export default App;
