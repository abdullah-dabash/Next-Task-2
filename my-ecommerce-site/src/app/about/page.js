import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to Our E-Commerce Site</h1>
      <nav className="mt-4">
        <Link href="/products" className="mr-4">Products</Link>
        <Link href="/about">About Us</Link>
      </nav>
    </div>
  );
};

export default Home;
