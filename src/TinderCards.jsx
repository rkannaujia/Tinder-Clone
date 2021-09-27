import React, {useEffect, useState} from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from './axios';


function TinderCards() {

    
    // const [people , setPeople]  = useState([
    //     {
    //         "name" : "Sachin Tendulkar",
    //         "imgUrl" :"http://www.coastaldigest.com/sites/default/files/images/Aug2020/Aug25/tendulkar.JPG"
    //     } ,
    //     {
    //         "name" : " Virendra sehwag",
    //         "imgUrl" : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/03/29/899763-virender-sehwag.jpg"
    //     },
    //     {
    //         "name" : "Yuvraj Singh",
    //         "imgUrl" :"https://wallpaperaccess.com/full/3293223.jpg"
    //     }
    // ]);

    const [people , setPeople]  = useState([]);


    useEffect(() => {
       async function fetchData() {
           const req = await axios.get('/v2/cards');

           setPeople(req.data);
       }
       fetchData();
    }, []);

    const swiped =(direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };
    const outOfFrame = (name) => {
        console.log(name + "left the screeen !");
    };
    
    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
            {people.map((person) => (
              <TinderCard 
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
              >
                <div
                style = {{ backgroundImage: `url(${person.imgUrl})` }}
                className="card"
                >
                    <h3>{person.name}</h3>
                </div>
              </TinderCard>
             ))
             } 
            </div>
           
        </div>
    );
}

export default TinderCards
