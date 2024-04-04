
import './App.css';
import{Routes,Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Product from './Product';
import Missing from './Missing';
import Header from './component/Header';
import Footer from './Footer';
import Cart from './Cart';

function App() {
  return (
    <div>
      <Header/>
<Routes>
  <Route path='/'element={<Home/>}/>
  <Route path='/About'element={<About/>}/>
  <Route path='/Contact'element={<Contact/>}/>
  <Route path='/Product'element={<Product/>}/>
  <Route path='/*'element={<Missing/>}/>
  <Route path='/Cart'element={<Cart/>}/>
  



  
</Routes>
<Footer/>
    </div>
  );
}

export default App;
