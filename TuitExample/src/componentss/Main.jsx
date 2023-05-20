import { Button } from '@mui/material';
import React from 'react';

const Main = () => {
    return (
        <div>
            <div className='bg-dark  text-light'>
            <div className='d-flex justify-content-between mb-5'>
                <div style={{width:'40%'}}><img style={{width:'120%'}} src="https://www.ucb.ac.uk/media/ozzc1d44/student-engagement.jpg?anchor=center&mode=crop&heightratio=1&width=1200&rnd=132475825546930000" alt="" /></div>
                <div style={{width:'45%'}} className='p-3 pt-5 d-flex align-items-center '> 
                <div>
                <h1 className=''>TATU Universiteti</h1><br /><h3 className='text-primary '>Lorem ipsum dolor sit amet.</h3><br /><br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima omnis illum sit aliquid obcaecati quidem accusantium soluta totam ex pariatur nemo rerum, aliquam, ab, cumque sapiente consectetur sed non id.</p>
                <br /><br /><Button variant='contained'>Batafsil</Button>
                </div>
                </div>
            </div>
            <div className='d-flex mt-5 mx-5'>
                <div  className='p-2 m-2'><h3 className='text-primary '>Educatiomnal Services</h3><br /><br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos ipsum soluta, nisi, vel cum molestiae placeat aliquid optio nulla harum debitis excepturi velit ex pariatur sint eius consequuntur animi.</p>
               <br /> <Button variant='outlined'> Read More</Button>
                </div>
                <div  className='p-2 m-2'><h3 className='text-primary '>Educatiomnal Services</h3><br /><br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos ipsum soluta, nisi, vel cum molestiae placeat aliquid optio nulla harum debitis excepturi velit ex pariatur sint eius consequuntur animi.</p>
               <br /> <Button variant='outlined'> Read More</Button>
                </div>
                <div  className='p-2 m-2'><h3 className='text-primary '>Educatiomnal Services</h3><br /><br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos ipsum soluta, nisi, vel cum molestiae placeat aliquid optio nulla harum debitis excepturi velit ex pariatur sint eius consequuntur animi.</p>
               <br /><Button variant='outlined'> Read More</Button>
                </div>
                <div  className='p-2 m-2'><h3 className='text-primary '>Educatiomnal Services</h3><br /><br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos ipsum soluta, nisi, vel cum molestiae placeat aliquid optio nulla harum debitis excepturi velit ex pariatur sint eius consequuntur animi.</p>
               <br /> <Button variant='outlined'> Read More</Button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Main;
