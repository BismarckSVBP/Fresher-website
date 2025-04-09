// components/Layout.tsx
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="pt-16 px-4 min-h-[calc(100vh-8rem)]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
