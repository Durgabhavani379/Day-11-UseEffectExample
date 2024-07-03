import React,{useState,useEffect} from 'react';
import './UseEffectExample.css';
const URL="www.thecocktaildb.com/api/json/v1/1/search.php?f=l";
const UseEffectExample2 = () => {
    const[drinkData,setdrinkData]=useState([])
    const fetchDataUrl=async (apiUrl)=>{
     const response= await fetch(apiUrl);
     const {data}=await response.json();
     setdrinkData(data);
    }
    useEffect(()=>{
        fetchDataUrl(URL);
    },[]);
    return (
        <div>
        <h1>Drinks count:{drinkData.length}</h1>
        <form>
            <input type="text" name="search" id="search" placeholder="search new something"/>
        
             <ul className="cocktail">
            {
                drinkData.map((eachDrink) =>{
                   const{idDrink,strDrink,strDrinkThumb}=eachDrink; 
                   return (
                   <li key={idDrink}>
                      <div>
                       <img src={strDrinkThumb} alt={strDrink}/>
                      </div>
                      <div>
                        <h1>{strDrink}</h1>
                      </div>
                   </li>);
                })
            }
        </ul>
        </form>
        </div>
    );
};

export default UseEffectExample2;