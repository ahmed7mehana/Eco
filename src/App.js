import './App.css';
import Main from './components/Main';
import Navbars from './components/Navbar';
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Compiaint from './components/Compiaint';
import Details from './components/Details';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
    <Helmet>
    <meta charSet="utf-8" />
    <title>ECO</title>
    <meta name="description" content="ECO"></meta>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
    <Navbars/>
    <Routes>
    <Route path='/' element={<Product/>}/>
    <Route path='/Cart' element={<Cart  />} />
    <Route path='/Complaint' element={<Compiaint />} />
    <Route path='Product/:Productid' element={<Details />} />
    </Routes>
    </div>
  );
}

export default App;
