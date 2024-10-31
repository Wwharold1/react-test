import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './features/layout/layout';
import Planes from './features/planes/planes';
import { InsuranceQuote } from './features/insurance-quote/insurance-quote';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<InsuranceQuote />}></Route>
          <Route path="/planes" element={<Planes />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
