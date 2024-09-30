const ProductCard = ({ product }) => {
    if (!product) return null; // Ensure product is not undefined
  
    return (
      <div className="border p-4">
        <h2 className="text-xl">{product.title}</h2>
        <img src={product.image} alt={product.title} className="w-full" />
        <p className="font-bold">${product.price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  