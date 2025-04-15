import React from 'react'

const Modal = ({ country }) => {
  if (!country) return null;

  return (
    <div className="modal fade" id="countryModal" tabIndex="-1" aria-labelledby="countryModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="countryModalLabel">{country.name.common}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-5">
                <img 
                  src={`https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`}
                  alt={country.name.common}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-7">
                <h6>Country Details</h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</li>
                  <li className="list-group-item"><strong>Region:</strong> {country.region}</li>
                  <li className="list-group-item"><strong>Population:</strong> {country.population.toLocaleString()}</li>
                  <li className="list-group-item">
                    <strong>Currency:</strong> {
                      country.currencies 
                        ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol || 'N/A'})`).join(', ')
                        : 'N/A'
                    }
                  </li>
                  <li className="list-group-item">
                    <strong>Languages:</strong> {
                      country.languages
                        ? Object.values(country.languages).join(', ')
                        : 'N/A'
                    }
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal