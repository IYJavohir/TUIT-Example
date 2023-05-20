import React from 'react';
import './Styles/Navbar.css'
const Navbar = () => {
    return (
        <div className='Navbar text-light'>
            <div style={{width:'100%'}} className='container d-flex justify-content-between p-2'>
                <div>Home</div>
                <div>Pages</div>
                <div>Academics</div>
                <div>Admission</div>
                <div>Courses</div>
                <div>Athletis</div>
                <div>Univercity Life</div>
            </div>
        </div>
    );
}

export default Navbar;
