import React from "react";
import {Link} from "react-router-dom";

const PRODUCTS = [
  {id: "p1", tittle: "Product 1"},
  {id: "p2", tittle: "Product 2"},
  {id: "p3", tittle: "Product 3"},
];

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id + "_" + PRODUCTS[product]}>
            <Link to={`/products/${product.id}`}>{product.tittle}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
