import { Route, Routes } from "react-router-dom";
import PageShell from "./components/layout/PageShell.jsx";
import HomePage from "./pages/HomePage.jsx";
import BiFoldDoorsPage from "./pages/BiFoldDoorsPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ProcessPage from "./pages/ProcessPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";

function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bi-fold-doors" element={<BiFoldDoorsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PageShell>
  );
}

export default App;