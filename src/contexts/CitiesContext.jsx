import { createContext, useContext, useEffect, useState } from "react";

const citiescontext = createContext();

function CitiesProvider({ children }) {
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCountries() {
            try {
                setLoading(true);
                setError(null);
                
                const response = await fetch('https://restcountries.com/v3.1/all');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Loaded countries:', data);
                setCountry(data);
            } catch (error) {
                console.error('Error fetching countries:', error);
                setError(error.message || 'Failed to fetch countries data');
            } finally {
                setLoading(false);
            }
        }

        fetchCountries();
    }, []);

    function reset() {
        
    }

    return (
        <>
            <citiescontext.Provider value={{
                country,
                loading,
                error
            }}>
                {children}
            </citiescontext.Provider>
        </>
    );
}

function usecountries() {
    const context = useContext(citiescontext);
    if (!context) {
        throw new Error("usecities must be used within a CitiesProvider");
    }
    return context;
}

export { CitiesProvider, usecountries};
export default citiescontext;
