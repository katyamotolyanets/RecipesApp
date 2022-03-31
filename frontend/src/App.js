import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from "react-router";

import './App.scss';
import {Recipes} from "./components/recipes/Recipes"
import {Recipe} from "./components/recipe/Recipe";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/recipes' element={<Recipes/>}/>
                <Route path='/recipes/:id' element={<Recipe/>}/>
                <Route path='/' element={<Recipes/>}/>
            </Routes>
        </Router>
    );
}

export default App;