import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../styles/App.css';
import Home from '../pages/Home';
import Reports from '../pages/Reports';
import Registers from '../pages/Registers';
import Search from '../pages/Search';
import Layout from '../containers/Layout';
import NotFount from '../pages/NotFount';
import Inventory from '../pages/Inventory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/registers' element={<Registers />} />
            <Route path='/search' element={<Search />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='*' element={<NotFount />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
