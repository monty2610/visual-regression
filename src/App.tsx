import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import ProductListing from './components/ProductListing';
import NavBar from './components/NavBar';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;