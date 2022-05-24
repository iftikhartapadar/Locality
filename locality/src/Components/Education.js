import React from 'react';
import dia from "../Assets/Dia.png";
import holi from "../Assets/Holi.png";
import lunar from "../Assets/Lunar.png";
import random from "../Assets/Random.png";
import "../App.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Education extends React.Component {

    render() {
        return (
            <div className='edu-box'>
                <div className="row">
                    <div className="col-12">
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src={dia} alt="First slide"/>
                                <Carousel.Caption>
                                    <h3 class="edu-header">Día De Los Muertos</h3>
                                    <p class="edu-content">On the first and second days of November, native Mexican communities celebrate the Día de los Muertos (Day of the Dead).</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={holi} alt="Second slide" />
                                <Carousel.Caption>
                                    <h3 class="edu-header">Holi</h3>
                                    <p class="edu-content">Holi ( /ˈhoʊliː/) is a popular ancient Indian festival. It is also known as the "Festival of Love", the "Festival of Colours", and the "Festival of Spring". </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={lunar} alt="Third slide"/>
                                <Carousel.Caption>
                                    <h3 class="edu-header">Lunar New Year</h3>
                                    <p class="edu-content">Lunar New Year is a 15-day celebration between the lunar calendar's first new moon and the first full moon.
                                    It goes by various names, such as Chinese Chunjie, Vietnamese Tet, Korean Solnal, Tibetan Losar, and Spring Festival.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={random} alt="Fourth Slide"/>
                                <Carousel.Caption>
                                    <h3 class="edu-header">Random Event Generator</h3>
                                    <p class="edu-content">Think you know your city like the back of your hand? Try out the new random event generator!
                                        It will expose you to a random event in your community. Who knows, maybe you will rediscover home!
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    };
}

export default Education;
// old attempt
// <div class="edu-box">
// <h1 class="edu-header">Dia De Los Muertos</h1>
// <p1 class="edu-content">The Day of the Dead (Spanish: Día de Muertos or Día de los Muertos)
//  is a Mexican holiday celebrated in Mexico and elsewhere associated with the Catholic celebrations of All Saints' Day and All Souls' Day, and is held on November 1 and 2.</p1>
//  <img src={dia} alt="Holiday Picture" class="edu-img"></img>
// </div>
// )
// new comment AHHH