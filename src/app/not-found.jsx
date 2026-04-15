import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
        
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>
        
        <p className="text-gray-500 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link href="/">
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
            Go Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default NotFoundPage;