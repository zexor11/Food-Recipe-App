import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';
function Popular() {


    const [popular, setPopular] = useState([]);


    useEffect(() => {
        getPopular();
    }, []);


    const getPopular = async () => {
        const check = localStorage.getItem("popular");

        if (check) {
            setPopular(JSON.parse(check));
        }
        else {

            const api = await fetch("https://api.spoonacular.com/recipes/random?apiKey=7cd7b42c8f234bfcbd5586294b86d5df&number=9");
            const data = await api.json();

            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }
    };


    return (
        <div>
            <h1>Popular Picks</h1>
            
<div className='popular'>
            <div className='row'>
                {popular.map((recipe) => {
                    return (
                        <div className="pricing-column col-lg-4 col-md-6">

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
                        </div>
                    );
                })}
            </div>
        </div>
        </div>

    );
};
export default Popular;
