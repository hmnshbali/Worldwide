import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Sidebarmap = () => {
  return (
    <>
      <section className='text-center'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6" style={{ backgroundColor: '#242a2e', minHeight: '91.5vh' }}>
              <nav className="sidebar-nav">
                <ul className="list-unstyled d-flex align-items-center justify-content-center flex-wrap gap-3 gap-md-4 py-3 py-md-4">
                  <li>
                    <NavLink 
                      to="cities" 
                      className={({ isActive }) => `nav-link btn ${isActive ? 'active btn-outline-success' : ''} text-white px-3 px-md-4 py-2`}
                    >
                      Cities
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="countries" 
                      className={({ isActive }) => `nav-link btn ${isActive ? 'active btn-outline-success' : ''} text-white px-3 px-md-4 py-2`}
                    >
                      Countries
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="px-3 px-md-4">
                <Outlet />
              </div>
            </div>
            <div className="col-12 col-md-6" style={{ backgroundColor: '#2d3439', minHeight: '91.5vh' }}>
              {/* Map will go here */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebarmap;
