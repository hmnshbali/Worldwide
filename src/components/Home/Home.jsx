import React, { useEffect, useState } from 'react';
import { usecountries } from '../../contexts/CitiesContext';
import Modal from '../Modal/Modal';
import Mapmodal from '../Modal/Mapmodal';
import Filterandsearch from '../Filterandsearch/Filterandsearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';


const Home = () => {
     const [selectedCountry, setSelectedCountry] = useState(null);
    const [filter,setFilteredCountries]=useState('');
    const [displayedCountries,setDisplayedCountries]=useState([]);
    const [search,setsearch]=useState('');
    const [isLoading,setisLoading]=useState(false);
    const { country } = usecountries();
    
    useEffect(() => {
        if (!country) return;
        
          setisLoading(true);        
        const timer = setTimeout(() => {
            let filtered = filter === 'All' || !filter ? 
                country : 
                country.filter(c => c.region === filter);

                if (search) {
                    filtered = filtered.filter(c => 
                        c.name.common.toLowerCase().includes(search.toLowerCase())
                    );
                }
            setDisplayedCountries(filtered);
            setisLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [filter, country,search]);
   
    

    if ( !country || country.length === 0 ||displayedCountries.length===0 ||isLoading) {
        return (
            <div className="container mt-5">
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }
   

    return (
       <>
        <div className="container mt-3 mt-md-5"> 
        <div className="row mb-5">
                <div className="col-12">
                    <Filterandsearch filter={filter} setFilteredCountries={setFilteredCountries} search={search} setSearch={setsearch}/>
                </div>
            </div>            <div className="row gy-3 gy-md-4 gx-3 gx-md-4">
                {displayedCountries.map((countryData, index) => (
                    <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 mb-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="image-container">
                                <img
                                    src={`https://flagcdn.com/w320/${countryData.cca2.toLowerCase()}.png`}
                                    alt={countryData.name.common}
                                    className="card-img-top w-100"
                                    style={{ objectFit: 'cover', height: '160px' }}
                                />
                            </div>
                            <div className="content p-2 p-md-3 d-flex justify-content-between align-items-center">                                <h4 className="title fs-6 fs-md-5">{countryData.name.common}</h4>
                                <button className="btn btn-sm btn-outline-primary"  data-bs-toggle="modal"
                                    data-bs-target="#MapModal" onClick={() => setSelectedCountry(countryData)}
>Map</button>
                            </div>
                            <div className="button-container p-2 p-md-3 pt-0">
                                <button 
                                    className="read-more-button btn btn-sm btn-md-lg"
                                    data-bs-toggle="modal"
                                    data-bs-target="#countryModal"
                                    onClick={() => setSelectedCountry(countryData)}
                                >
                                    <span className="button-text">
                                        View Details
                                        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="arrow-icon ms-1" width="16" height="16">
                                            <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <Modal 
                country={selectedCountry} 
            />
            <Mapmodal country={selectedCountry} 
            />
        </div>
    </>
    );
};

export default Home;