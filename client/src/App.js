import './App.css';
import Main from "./pages/main/Main";
import Favorites from "./pages/favorites/Favorites";

import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";

function App() {
  return (
    <>
    <Link to='/'>Homepage</Link> 
<Link to='/favorites'>favorites</Link> <br />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </>
  );
}

export default App;
