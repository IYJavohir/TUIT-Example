import React from 'react';
import './Styles/Header.css'
import { Button } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import PhonelinkOutlinedIcon from '@mui/icons-material/PhonelinkOutlined';

const Header = () => {
    return (
        <div className='Header text-light'>
            <div className=' container d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-between'>
                
                    <span className='m-2 d-flex' > <EmailOutlinedIcon sx={{ fontSize: 30 }}/><h5 className='px-2'>WEBMAIL</h5></span><span className='m-2 d-flex '><SpaOutlinedIcon sx={{ fontSize: 30 }}/><h5 className='px-2'>QUERCUS</h5></span ><span className='m-2 d-flex '><PhonelinkOutlinedIcon sx={{ fontSize: 30 }}/><h5 className='px-2'>ACORN</h5></span>
                </div>
                <div className='d-flex align-items-center mx-2  '><img className='m-3' width={100} src="https://static.tuit.uz/uploads/1/W73eM8T-hn5cLRoa_rQWKshn3eUutXvm.png"/> 
                <h2 className='text-center'>Toshkent Axborot Texnologiyalar <br /> Universiteti</h2>
                </div>
                <div className=''><Button className='px-4' variant="outlined">Go to</Button></div>
            </div>
        </div>
    );
}

export default Header;
