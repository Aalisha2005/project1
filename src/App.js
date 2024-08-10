import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import TopRated from './Components/TopRated';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Components/Navbar';
import NewArticle from './Components/NewArticle';
import { AuthProvider } from './Components/AuthContext';
import SelectedMovies from './Components/SelectedMovies';
import ScreenplayPage from './Components/ScreenplayPage';


function App() {
  
  return (
    <AuthProvider>
    <Router>
        <Navbar/>
            <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/Login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />
            <Route path='/Movies' element={<TopRated/>}/>
            <Route path="/selected" element={<SelectedMovies/>} />
            <Route path="/screen" element={<ScreenplayPage/>} />
            <Route path='/Journal' element={<NewArticle/>}/>
            </Routes>
      </Router>
      </AuthProvider>
   
      
  );
}
export default App;




