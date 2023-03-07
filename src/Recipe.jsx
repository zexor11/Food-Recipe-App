import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Recipe = () => {

    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const params = useParams();
    const fetchDetail = async () => {

        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=7cd7b42c8f234bfcbd5586294b86d5df`);
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetail();
    }, [params.name]);

    return (
        <div className="home">
        <div className="container-fluid">
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded float-start mb-4 mb-lg-0 recipe"
                  src={details.image}
                  alt=""
                />
              </div>
              <div className="col-lg-5">
                <h1 className="font-weight-light">{details.title}</h1>
                <div>
                
                <button type="button"  className="{activeTab === 'instructions' ? 'active' : ''} btn btn-warning" onClick={() => setActiveTab("instructions")}>Instructions</button>
                <button type="button" className="{activeTab === 'ingredients' ? 'active' : ''} btn btn-warning" onClick={() => setActiveTab("ingredients")}>Ingredients</button>
                <div>
                    {activeTab === 'instructions' && (
                        <div>
                            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                        </div>
                    )}

                    {activeTab === 'ingredients' && (

                        <ul>
                            {details.extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                        </ul>

                    )}
                </div>
                </div>
                 
              </div>
            </div>
        </div>
      </div>
        
    );
}





export default Recipe
