import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Details from './routes/Details';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="details/:name" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
