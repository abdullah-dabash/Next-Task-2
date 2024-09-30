import ProductCard from '../components/ProductCard'; // Ensure the path is correct
export default async function Products() {
  const res = await fetch('https://fakestoreapi.com/products');

  if (!res.ok) {
    console.error("Failed to fetch products");
    return <div>Error loading products.</div>;
  }

  const products = await res.json();

  if (!Array.isArray(products)) {
    console.error("Products data is not an array", products);
    return <div>No products found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
