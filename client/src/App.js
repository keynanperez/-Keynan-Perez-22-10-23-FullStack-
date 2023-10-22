import './App.css';
import Main from "./pages/main/Main";
import Favorites from "./pages/favorites/Favorites";
import 'bulma/css/bulma.min.css';


import {Routes, Route ,Link} from "react-router-dom";

function App() {
  return (
<div class="container">
    
    <Link to='/'>Homepage   </Link>  
<Link to='/favorites'>Favorites</Link> 
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </div>
  );
}

export default App;
