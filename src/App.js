import data from "./data";
import{BrowserRouter, Route,Routes} from"react-router-dom";
import "./screens/HomeScreen"
import HomeScreen from "./screens/HomeScreen";

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
      <main>
        
        
      <Routes> 
        <Route path='/' element = {<HomeScreen />} />
        {/* <Route path='/About Us' element = {<AboutusComponent/>} />
        <Route path='/Contact Us' element = {<ContactusComponent/>} />
        <Route path='/History' element = {<HistoryComponent/>} />
        <Route path='/Home' element = {<HomeComponent />} />
        <Route path='/Home' element = {<AboutusComponent />} />
        <Route path='/SignUP' element = {<SignupComponent />} /> */}
      </Routes>
        <h1> Featured Products</h1>
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
