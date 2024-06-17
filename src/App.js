import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import Main from './Pages/Main';
import Anime from './Pages/Anime';
import SingleMovies from './Pages/SingleMovies';
import Punjabi from './Pages/Punjabi';
import Bolly from './Pages/Bolly';
import Master from './components/Master';
import Server from './Pages/Server';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={"/*"} element={<Server/>}/>
        <Route path={"/"} element={<Master/>}> 
         <Route path={"/"} element={<Main/>}/>
         <Route path={"/Bollywood"} element={<Bolly/>}/>
         <Route path={"/Punjabi" }element={<Punjabi/>}/>
         <Route path={"/Download/:title"} element={<SingleMovies/>}/>
         <Route path="/Anime" element={<Anime/>}/>
        
       </Route>
       </Routes>
       </BrowserRouter>
  );
}

export default App;
