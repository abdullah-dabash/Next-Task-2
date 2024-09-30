import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <Link href="/" className="text-white mr-4">Home</Link>
      <Link href="/products" className="text-white mr-4">Products</Link>
      <Link href="/about" className="text-white">About Us</Link>
    </nav>
  );
};

export default Navbar;
