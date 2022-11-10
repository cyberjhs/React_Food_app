import React, { useState, useEffect } from 'react';


function Food() {

    const [query, setQuery] = useState("Paneer");
    const [data, setData] = useState([]);
    const [isClicked,setIsClicked] = useState(false);

    useEffect(() => {
        fetch(`https://api.edamam.com/api/recipes/v2?q=${query}&app_id=ca9a1e0d&app_key=d2c30fc5bd6762dbac5b78b1925d68e1&type=public`).then(
            (Response) => Response.json()
        ).then(
            (data) => {
                const arrayData = data.hits
                setData(arrayData)
            }
        )
        // eslint-disable-next-line
    }, [isClicked])

    return (
        <div className='Main'>
            <input onChange={(e) => { setQuery(e.target.value) }} type="text"></input>
            <button onClick={() => { setIsClicked((prevState) => !prevState) }}>Search</button>

            {data.map((item, idx) => {
                return (
                    <div className='food'>
                        <div className='food_item' key={idx}>
                            <img src={item.recipe.image} alt="foods" />
                            <p>{item.recipe.label}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Food;