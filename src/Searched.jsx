import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Searched = () => {

    const params = useParams();

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const getSearched = async (name) => {

        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=73dbd9d46f1b40dabcc4be16c6ef8bd5&query=${name}&number=12`);
        const recipe = await data.json();
        setSearchedRecipes(recipe.results);
      }

      useEffect(() => {
        getSearched(params.search);
      }, [params.search]);
  return (
    <div className='popular'>
            <div className='row'>
        {searchedRecipes.map((recipe) => {
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
        )
      })}
      </div>
      </div>
  )
}


export default Searched;
