import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";


function Card(props){



    let data = {
        "product":{
          "title":"Темы для работы",
          "link":"/product",
          "more":"Подробнее",
          "card":[
            {
              "id":1,
              "title":"Title1",
              "bodyText":"Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо. Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда? Как бы то ни было, он быстро разгадает ее.",
              "link":"111",
            },
            {
              "id":2,
              "title":"Title2",
              "bodyText":"Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо. Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда?",
              "link":"222",
            },
            {
              "id":3,
              "title":"Title3",
              "bodyText":"Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо.  Как бы то ни было, он быстро разгадает ее.",
              "link":"333",
            },
            {
              "id":4,
              "title":"Title4",
              "bodyText":"Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда? Как бы то ни было, он быстро разгадает ее.",
              "link":"444",
            },
            {
              "id":5,
              "title":"Title5",
              "bodyText":"Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо.",
              "link":"555",
            },
            {
              "id":6,
              "title":"Title6",
              "bodyText":"Он знал всех своих сотрудников – если не по имени, то хотя бы в лицо. Интересно, эта девушка была новой сотрудницей или просто случайно заглянула сюда?",
              "link":"666",
            },
            {
              "id":7,
              "title":"Title7",
              "bodyText":"77777 7777 777 7 7 7 77777 7 7 7777",
              "link":"777",
            },
            {
              "id":8,
              "title":"Title8",
              "bodyText":"888 888 8888 88888 888888 8888 8",
              "link":"888",
            },
            {
              "id":9,
              "title":"Title9",
              "bodyText":"999 9999 999 99999 99999999 999",
              "link":"999",
            }
      
          ]
        }


    
      };

let Product_card = (key, h3, p, link) => {
    return(


        <div key={key} className="card">

            <div className="header-block">
        
                <h3 dangerouslySetInnerHTML={{__html:h3}}></h3>
                <p dangerouslySetInnerHTML={{__html:p}}></p>
        
            </div>
        
            <div className="footer-block"><Link className="appointment" to={link}>Записаться</Link></div>

        </div>


    )
};


let Cards = data.product.card.map((obj, i)=>{

    if(i <= 5){

        return(

          Product_card(i, obj.title, obj.bodyText, obj.link)

        )

    }

});





    return(
      

        <div className="block">


            <div className="cards-content-block">

            <div className="title_cards"><h2 dangerouslySetInnerHTML={{__html:data.product.title}}></h2></div>

                <div className="slider-content-block">

                    {Cards}

                </div>

            <div className="more_cards"><Link className="Link" to={data.product.link} dangerouslySetInnerHTML={{__html:data.product.more}}></Link></div>

            </div>


        </div>
            

    )
}

export default Card;
