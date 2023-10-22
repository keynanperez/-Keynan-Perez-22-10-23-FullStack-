import './App.css';
import Main from "./pages/main/Main";
import Favorites from "./pages/favorites/Favorites";

import {Routes, Route ,Link} from "react-router-dom";

function App() {
  return (
    <div className="main-center" >
    <Link to='/'>Homepage</Link>  
<Link to='/favorites'>Favorites</Link> <br/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </div>
  );
}

export default App;
