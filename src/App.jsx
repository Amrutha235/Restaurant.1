import {Routes,Route} from 'react-router-dom'
import './App.css';
import Allrest from './Components/Allrest/Allrest';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

import Viewrest from './Components/Viewrest/Viewrest';
function App() {
  return (
    <div className="App">
 
      <Header/>
   <Routes>
    {/*localhost 3000-Allrest component*/}
    <Route path='/'element={<Allrest/>}/>
    <Route path='/view/:id'element={<Viewrest/>}/>
   </Routes>
      <Footer/>
    </div>
  );
}

export default App;
