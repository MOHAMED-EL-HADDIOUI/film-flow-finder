import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";

// Lazy loading des pages pour de meilleures performances
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Catalog = React.lazy(() => import("./pages/Catalog"));
const News = React.lazy(() => import("./pages/News"));
const Shop = React.lazy(() => import("./pages/Shop"));
const Contact = React.lazy(() => import("./pages/ContactUs"));
const Unsplash = React.lazy(() => import("./pages/Unsplash"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp"));

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <React.Suspense fallback={<div>Loading...</div>}>
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/news" element={<News />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/unsplash" element={<Unsplash />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </main>
          </React.Suspense>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
