import './GogglesSearch.css';
import GogglesSearchLogo from '../GogglesSearchLogo';
import GogglesSearchBar from './GogglesSearchBar';
import GogglesSearchWebList from './GogglesSearchWebList';

function GogglesSearch() {
    return (
      <div className="goggles-search">
          <div className="goggles-container">
            <GogglesSearchLogo />
            <GogglesSearchBar />
            <GogglesSearchWebList />
          </div>
      </div>
    );
  }
  

  export default GogglesSearch;