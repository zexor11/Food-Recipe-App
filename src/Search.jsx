import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const navigate = useNavigate();
    const [input, setInput] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input)
    };
    return (
        <div>
            <FormStyle onSubmit={submitHandler}>
                <FaSearch />
                 <h1>&#128270;</h1>
                <input  onChange={(e) =>setInput(e.target.value)} type="text" value={input} />
            </FormStyle>
        </div>

    )
}

const FormStyle = styled.form`
margin: 0rem 20rem;
div {
position: relative;
width: 100%;
}
input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 2rem 1rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%
}
svg {
 position: absolute;
 top: 50%;
 left: 0%;
 color: white;
 transform: translate(100%, -50%);
 }
`;

export default Search
