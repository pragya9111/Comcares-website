import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import BlogList from './pages/Blog';
import BlogDetail from './components/blog/BlogDetail';
import Services from './pages/Services';

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
          path="/about-us"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <MainLayout>
              <ContactUs />
            </MainLayout>
          }
        />
        <Route
          path="/blogs"
          element={
            <MainLayout>
              <BlogList />
            </MainLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />
        <Route
          path="/blogs/:id"
          element={
            <MainLayout>
              <BlogDetail />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;