
import './App.css';
import {Routes,Route, HashRouter } from 'react-router-dom'; 
import Main from './Pages/Main';
import Anime from './Pages/Anime';
import SingleMovies from './Pages/SingleMovies';
import Punjabi from './Pages/Punjabi';
import Bolly from './Pages/Bolly';
import Master from './components/Master';
import Server from './Pages/Server';
function App() {
  return (
    <HashRouter>
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
       </HashRouter>
  );
}

export default App;
