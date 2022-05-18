import React from 'react';
import Layout from './Layout/Layout';
import Search from './Components/Search/Search';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import Character from './Components/Character/Character';

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
            <Routes>
                <Route path='/' element={<Search />} />
                <Route path='character/:character' element={<Character />} />
            </Routes>
        </Layout>
    </QueryClientProvider>
  );
}

export default App;
