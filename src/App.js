import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Recipes from './Components/Recipes'
import './App.css'
import Axios from 'axios'

const App = () => {
  const [seacrh, setSeacrh] = useState('chiken');
  const [recipes, setRecipes] = useState([])

  const APP_ID = '35b81707'
  const APP_KEY = '8d04dd5aa29923b85f483d708966be35'

  useEffect(() => {
    getRecipes();
  },[])

  const getRecipes = async () => {
    try {
      const res = await Axios.get(`https://api.edamam.com/search?q=${seacrh}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      console.log(res);
      setRecipes(res.data.hits)
    } catch (error) {
       console.log(error);
    }
  }

  const onInputChange = (event) => {
    setSeacrh(event.target.value)
  }

  const onSearchClick = () => {
    getRecipes();
  }

  return (
    <>
    <Header seacrh = {seacrh} onInputChange={onInputChange} onSearchClick={onSearchClick} />
    <div className="container">
    <Recipes recipes={recipes} />
    </div>
    </>
  )
}

export default App

