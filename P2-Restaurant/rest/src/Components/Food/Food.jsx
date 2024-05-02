import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Food/food.css'; 

const Food = () => {
  const { name } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);
        const jsonData = await api.json();
        
        if (jsonData && jsonData.meals) {
          setData(jsonData.meals);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [name]);

  return (
    <>
      <h1 className="menu-heading">Today's Menu</h1>
      <div className="container">
        {Array.isArray(data) && data.map((d) => (
          <Link to={`/${d.idMeal}`} className='link1' key={d.idMeal}>
            <div className="meal">
              <div className="img">
                <img src={d.strMealThumb} alt="" />
              </div>
              <h3>{d.strMeal}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Food;
