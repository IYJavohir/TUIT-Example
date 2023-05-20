import { Button } from '@mui/material';
import React from 'react';

const UnderMain = () => {
    return (
        <div className='container'>
            <div> 
                <div className='d-flex align-tems center'   >
                    <div className='mt-5 align-tems center'><h2>Songi yangiliklar</h2> <hr className='w-100' /></div>
                    <div className='d-flex bg-dark border border-1'style={{width:'80%',height:'1%'}} ></div>
                </div>
                <div><h4 className='text-primary'>View All Events</h4></div>
                <div className='d-flex justify-content-between m-auto'>
                    <div className='m-3'><img width={370} src="https://static.life.ru/posts/2017/02/970993/de73fad1d874a753469a24335199cca4.jpg" alt="" /><br /><br /><h3>Lorem ipsum dolor sit amet consectetur.</h3> <br /> <b>15 Jan 10:50 </b><br /><br /> <Button variant='contained'>Batafsil</Button></div>
                    <div className='m-3'><img width={370} src="https://static.life.ru/posts/2017/02/970993/de73fad1d874a753469a24335199cca4.jpg" alt="" /><br /><br /><h3>Lorem ipsum dolor sit amet consectetur.</h3> <br /> <b>15 Jan 10:50 </b><br /><br /><Button variant='contained'>Batafsil</Button></div>
                    <div className='m-3'><img width={370} src="https://static.life.ru/posts/2017/02/970993/de73fad1d874a753469a24335199cca4.jpg" alt="" /><br /><br /><h3>Lorem ipsum dolor sit amet consectetur.</h3> <br /> <b>15 Jan 10:50 </b><br /><br /> <Button variant='contained'>Batafsil</Button></div>
                </div>
                <hr />
                <div><h2 className='mt-5'>Calculus Fani bo'yicha top o'quvchilar</h2></div>
                <div className='d-flex justify-content-between mt-3 p-3'>
                    <div className='m-3'><img width={370} src="https://static.life.ru/posts/2017/02/970993/de73fad1d874a753469a24335199cca4.jpg" alt="" /><br /><br /><h3>Lorem ipsum dolor sit amet consectetur.</h3> <br /><h5>Reyting:4.8</h5> <Button variant='contained'>Batafsil</Button></div>
                    <div className='m-3'><img width={370} src="https://static.life.ru/posts/2017/02/970993/de73fad1d874a753469a24335199cca4.jpg" alt="" /><br /><br /><h3>Lorem ipsum dolor sit amet consectetur.</h3> <br /><h5>Reyting:4.8</h5> <Button variant='contained'>Batafsil</Button></div>
                    <div className='m-3'><img width={370} src="https://static.life.ru/posts/2017/02/970993/de73fad1d874a753469a24335199cca4.jpg" alt="" /><br /><br /><h3>Lorem ipsum dolor sit amet consectetur.</h3> <br /><h5>Reyting:4.8</h5> <Button variant='contained'>Batafsil</Button></div>
                </div>
                
            </div>
        </div>
    );
}

export default UnderMain;
