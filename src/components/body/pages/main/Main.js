import React from 'react';
import CallBackLarge from '../../../callBalck/callBack_large';

import './Main.css';

function Main(){

    return(
        <>

            <div className="main_banners_container">
                
                <div className="banners_box">

                    <div className="text_container">
                        <h1 className="h1">Вам достаточно знать номер телефона данного человека. </h1>
                        <p className="p">
                            Вам достаточно знать номер телефона данного человека, и вы можете создать 
                            ссылку, которая позволит начать с ним чат. Вам достаточно знать номер 
                            телефона данного человека, и вы можете создать ссылку, которая позволит 
                            начать с ним чат. 
                        </p>
                        <div className="box_btn">
                           <CallBackLarge/>
                        </div>
                    </div>

                </div>
                
            
            </div>

            <div className="two_block">
                <div className="test_content">sdfsdfs</div>
            </div>

        </>    
    );

}

export default Main;