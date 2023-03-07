import React from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./index.css";

const Search = () => {

    const navigate = useNavigate();
    const [input, setInput] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input)
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                
                <input className="form-control" onChange={(e) =>setInput(e.target.value)} type="text" value={input} placeholder="&#128270;" />
            </form>
        </div>

    )
}


export default Search
