import './App.css';
import Pages from './pages/Pages.jsx'
import { NavLink } from 'react-router-dom';
import Category from './components/category/Category'
import { BrowserRouter } from 'react-router-dom'
import Search from './components/search/Search';
import { GiBookshelf } from 'react-icons/gi';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to={'/'}>
          <span className='logo'>
            <GiBookshelf />
            <span>bookshelf</span>
          </span>
        </NavLink>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
