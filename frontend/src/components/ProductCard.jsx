const ProductCard = ({ key, title, description, images, price }) => {
  return (
    <div key={key} className="shadow p-2 border rounded-lg border-gray-200">
      <div>
        {images.map((i) => (
          <img src={i.substring(2, i.length - 2)} />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
