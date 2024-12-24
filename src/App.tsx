import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomerLayout from './shared/layouts/CustomerLayout';
import ManagerLayout from './shared/layouts/ManagerLayout';
import AdminDashboard from './pages/manager/AdminDashboard';
import Login from './pages/auth/Login';
import AnonymousLayout from './shared/layouts/AnonymousLayout';
import Register from './pages/auth/Register';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="main-content min-h-screen flex flex-col">
          <Routes>
            {/* Customer Router */}
            <Route path="/" element={<CustomerLayout><Home /></CustomerLayout>} />
            <Route path="/about" element={<CustomerLayout><About /></CustomerLayout>} />
            <Route path="/contact" element={<CustomerLayout><Contact /></CustomerLayout>} />

            {/* Admin Router */}
            <Route path="/manager/dashboard" element={<ManagerLayout><AdminDashboard /></ManagerLayout>} />

            {/* Auth Router */}
            <Route path="/auth/login" element={<AnonymousLayout><Login /></AnonymousLayout>} />
            <Route path="/auth/register" element={<AnonymousLayout><Register /></AnonymousLayout>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
