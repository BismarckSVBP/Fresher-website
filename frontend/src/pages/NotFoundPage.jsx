// pages/NotFoundPage.tsx
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-5xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-6">Page Not Found</p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
