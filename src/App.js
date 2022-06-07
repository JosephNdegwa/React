import { Route } from 'react-router-dom';
import AllMeetupsPage from './pages/Allmeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetup';

function App() {
  return <div>
    <Route path='/'>
      <AllMeetupsPage />
    </Route>
    <Route path='/new-meetup'>
      <NewMeetupsPage />
    </Route>
    <Route path='/favorite'>
      <FavoritesPage />
    </Route>

  </div>;
    
  
}

export default App;
