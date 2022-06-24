
import React,{useState,useEffect} from "react";
import './App.css';
import axios from 'axios';
import Recipe from "./Recipe";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';



function App() {

  //api 
 const APP_ID = "8c75a038";
 const APP_KEY = "9f7fbb668d1d17b0cf010ef031216ada";

//function declaration
const [recipes,setRecipes] = useState([])
const [search ,setSearch]=useState('')
const [query ,setQuery]=useState('mango')


//function defination
   useEffect(()=>{
       getRecipe();
   },[query]);
   
   const getRecipe = async()=>{
   const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    setRecipes(response.data.hits);
    console.log(response);
   };


   const updateSearch = (e) =>{
    setSearch(e.target.value)
    console.log(e.target.value);
   };


  const updateQuery = (e)=>{
     e.preventDefault();
     setQuery(search);
     setSearch("");
      };



//return 
  return (


<div>
    <div>
   <h1 className="display" style={{background:"pink",textAlign:"center",padding:"0",margin:"0"}}>Recipefy.com 

       <Paper
           
           justify='center'
          onSubmit={updateQuery}
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
  

          <InputBase
            type="text" value={search} onChange={updateSearch} 
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Recipes"
            inputProps={{ 'aria-label': 'Search Recipes' }}
          />


           <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" style={{alignItem:"right"}}>
             <SearchIcon />
           </IconButton>
 
       </Paper>
 
    </h1>

  </div>

      <Grid container >
          {recipes.map((recipe)=>(
          <Grid  item xs={3}>
           <Recipe
           key={recipe.recipe.label}
           title={recipe.recipe.label} 
           calories={recipe.recipe.calories} 
           image={recipe.recipe.image}
           ingredients={recipe.recipe.ingredients}
           />

           </Grid>
                        ))}

      </Grid> 

  </div>
  
    
  );
}


export default App;