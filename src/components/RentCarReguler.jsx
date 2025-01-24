import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";

export default function RentCarReguler() {
  // tempat untuk menampung data product
  const [products, setProducts] = useState([]);

  // mendapatkan data product
  function getProducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      });
  }

  // useEffect mounting, hanya dijalankan sekali
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container py-10">
      <h1 className="font-bold text-2xl mb-2">SectionProduct</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="text-lg font-bold">${product.price}</p>
              <div className="card-actions justify-end">
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
