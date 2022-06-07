import { Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/Allmeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetup';

function App() {
  return (
  <div> 
    <Routes>
      <Route path="/" element={<AllMeetupsPage />} />
      <Route path="/new-meetup" element={<NewMeetupsPage/>} />
      <Route path="/favorites" element={<FavoritesPage/>} />
    </Routes>

  </div>
  );
    
  
}

export default App;
