// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-[#1F2833] text-gray-300 py-6 mt-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} CSE Freshers 2025 | Made with passion by Team BismarckSVBP
        </p>
      </div>
    </footer>
  );
};

export default Footer;
