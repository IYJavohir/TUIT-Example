import React from 'react';
import './Styles/UnderNav.css'

const UnderNav = () => {
    return (
        <div>
            <div>

                <img src="https://tuit.uz/logos/tuit_slide_four.jpg" alt="Tatu" style={{width:'100%'}} />

            </div>
            <div className='d-flex  flex-row Fon'>
                <div className='position-relative'><p className=' position-absolute bottom-50 end-50'>Chiziqli Algebra</p><img width={375} height={350} src="https://www.nu.edu.eg/sites/default/files/2022-05/_dsc6045.jpg"alt=""/>
                </div>
                <div className='position-relative'><img width={375} height={350} src="https://i0.wp.com/nabainc.org/wp-content/uploads/2022/05/1x1-post-019.jpg?fit=900%2C900&ssl=1" alt="" /></div>
                <div className='position-relative'><img width={375} height={350} src="https://www.acap.edu.au/wp-content/uploads/2021/10/ACAP-202110261307-TipsforGettingThroughExams-MobileWebBanner-1224x990.jpg" alt="" /></div>
                <div className='position-relative'><img width={375} height={350} src="https://samarkand.uz/uploads/news_foto/2021/01/142309076_436418094469116_1478765879464741644_n.jpg?1611633780645" alt="" /></div>
            </div>
        </div>
    );
}

export default UnderNav;
