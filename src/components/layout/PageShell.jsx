import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function PageShell({ children }) {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default PageShell;