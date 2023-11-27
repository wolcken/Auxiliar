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
import Assets from '../pages/Assets';
import { AuthProvider } from '../context/AuthProvider';
import { AuthRoute } from '../auth/Autentication';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/reports' element={<AuthRoute><Reports /></AuthRoute>} />
              <Route path='/assets' element={<AuthRoute><Assets /></AuthRoute>} />
              <Route path='/registers' element={<AuthRoute><Registers /></AuthRoute>} />
              <Route path='/search' element={<AuthRoute><Search /></AuthRoute>} />
              <Route path='/inventory' element={<AuthRoute><Inventory /></AuthRoute>} />
              <Route path='*' element={<NotFount />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
