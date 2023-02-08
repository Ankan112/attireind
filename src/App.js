import './App.css';
import Footer from './Pages/Footer/Footer';
import Navbar from './Pages/Navbar/Navbar';
import Products from './Pages/Products/Products';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
