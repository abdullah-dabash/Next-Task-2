import ProductCard from '../components/ProductCard';
import Navbar from '../components/NavBar';

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

const Products = ({ products }) => {
  return (
    <>
    <Navbar/>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

export default Products;
