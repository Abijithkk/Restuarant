import {Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SingleView from './Pages/SingleView';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/view/:id' element={<SingleView></SingleView>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
