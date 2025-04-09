// components/Layout.jsx
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
