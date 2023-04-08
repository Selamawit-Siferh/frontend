import data from "./data";
import{BrowserRouter, Route,Routes} from"react-router-dom";
import "./screens/HomeScreen"

function App() {
  return (
    <BrowserRouter>
    <div >
      <header >
        <a  href="/"
        >
          Soliana Tibeb
        </a>
      </header>
      <main><h1> Featured Products</h1><Routes><Route path="/" element={<HomeScreen />}/> </Routes>
    <div className="products">  { data.products.map(product=>(<div className="product " key={product.slug}>
      <a href={`/product/${product.slug}`}><img src={product.Image}atl={product.name}></img>
      </a>
      
      
      <div className="product-info">
      <a href={`/product/${product.slug}`}>
        <p>{product.name}</p>
        </a>
      <p><strong>${product.price}</strong></p>
      <button>add to cart</button>
      </div>
      
      
      </div>)) }
      </div>
       </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
