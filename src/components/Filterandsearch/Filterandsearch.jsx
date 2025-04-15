import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Filterandsearch = ({filter,setFilteredCountries,search,setSearch}) => {
  const handleRegionClick = (region) => {
    setFilteredCountries(region);
  };

  const handleSearch=(e)=>{
    setSearch(e.target.value);
    e.target.focus();
  }

  
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="dropdown">
      {!filter ? (
          <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter by Region
          </button>
        ) : (
          <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {filter}
          </button>
        )}

        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#" onClick={() => handleRegionClick('All')}>All</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleRegionClick('Africa')}>Africa</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleRegionClick('Americas')}>Americas</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleRegionClick('Asia')}>Asia</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleRegionClick('Europe')}>Europe</a></li>
          <li><a className="dropdown-item" href="#" onClick={() => handleRegionClick('Oceania')}>Oceania</a></li>
        </ul>
      </div>
      <div className="search-container">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search for a country..." 
          value={search}
          onChange={handleSearch}

        
        />
      </div>
    </div>
  )
}

export default Filterandsearch