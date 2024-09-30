import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl">404 - Page Not Found</h1>
      <Link href="/" className="mt-4 text-blue-500">Go Back Home</Link>
    </div>
  );
};

export default Custom404;
