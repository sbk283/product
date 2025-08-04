import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  // js 자리
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
      });
  }, []);
  // jsx 자리
  return (
    <div className="app">
      <header>
        <h1 className="main-header">Beauty Product List</h1>
        <p className="main-p">다양한 뷰티 제품을 한눈에 확인하세요</p>
        <p className="main-p">https://dummyjson.com/products API 사용 예제</p>
      </header>
      <main>
        <ul className="product-list">
          {products.map(product => (
            <li className="product-item" key={product.id}>
              <img
                className="product-thumb"
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <h2 className="product-title">{product.title}</h2>
                <span className="product-price">${product.price}</span>
                <p className="product-desc">{product.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
export default App;
