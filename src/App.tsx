import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/contactus"
          element={
            <MainLayout>
              <ContactUs />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;