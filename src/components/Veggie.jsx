import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';
import "../index.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';


const Veggie = () => {

    const [veggie, setVeggie] = useState([]);


    useEffect(() => {
        getVeggie();
    }, []);

    const getVeggie = async () => {
       /* const check = localStorage.getItem("veggie");

        if (check) {
            setVeggie(JSON.parse(check));
        }
        else {
*/
            const api = await fetch("https://api.spoonacular.com/recipes/random?apiKey=73dbd9d46f1b40dabcc4be16c6ef8bd5&number=9&tags=vegetarian");
            const data = await api.json();

            //localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            console.log(data.recipes);
        //}
    };

    return (
        <div>
                <h1>Our Veggie Picks</h1>
                
            <div className='veggie'>
                <Splide
                    options={{

                        perPage: 3,
                        breakpoints: {
                            640: {
                                perPage: 1,
                            }
                        },
                        arrows: true,
                        pagination: false,
                        drag: 'free',
                        gap: '5rem',
                    }}
                >
                    {veggie.map((recipe) => {
                        return (


                            <SplideSlide key={recipe.id}>
                                <div className="card">
                                    <img src={recipe.image} alt={recipe.title} className="card-img-top" />
                                    <div className="card-header">
                                        <h6>{recipe.title}</h6>
                                    </div>
                                    <div className="card-body">

                                        <button className="btn btn-lg btn-block btn-danger " type="button" >
                                            <Link to={"/recipe/" + recipe.id} className="compose-btn" >Get Recipe</Link></button>

                                    </div>
                                </div>

                            </SplideSlide >

                        );
                    })}
                </Splide>
            </div>
        </div>
    );


};






export default Veggie;
