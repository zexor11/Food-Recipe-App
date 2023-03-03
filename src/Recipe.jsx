import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";


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
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
                <div>
                    {activeTab === 'instructions' && (
                        <div>
                            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                        </div>
                    )};

                    {activeTab === 'ingredients' && (

                        <ul>
                            {details.extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                        </ul>

                    )};
                </div>
            </Info>
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;
.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;

}
 h2 {
    margin-bottom: 2rem;
 }
 li {
    font-size: 1.2rem;
    line-height: 2.5rem;
 }

 ul {
    margin-top: 2rem;
 }`;

const Button = styled.button`
 padding: 1rem 2rem;
 background: white;
 color: #313131;
 border: 2px solid black;
 margin-right: 2rem;
 font-weight: 600;`

const Info = styled.div`
 margin-left: 10rem;
 `;
export default Recipe
