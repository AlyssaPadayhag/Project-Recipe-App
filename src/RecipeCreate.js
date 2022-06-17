import React, { useState } from "react";
import RecipeData from "./RecipeData";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  
  const [recipeData, setRecipeData] = useState({ ...initialFormState});
  const handleChange = ({ target }) => {
    setRecipeData({
      ...recipeData,
      [target.name]: target.value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(recipeData);
    setRecipeData({ ...initialFormState });
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={recipeData.name} /></td>
            <td><input 
                  name="cuisine"
                  id="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={recipeData.cuisine} /></td>
            <td><input
                  name="photo"
                  id="photo"
                  type="url"
                  placeholder="URL"
                  required={true}
                  onChange={handleChange}
                  value={recipeData.photo} /></td>
            <td><textarea 
                  name="ingredients"
                  id="ingredients"
                  placeholder="Ingredients"
                  onChange={handleChange}
                  value={recipeData.ingredients} /></td>
            <td><textarea
                  name="preparation"
                  id="preparation"
                  placeholder="Preparation"
                  onChange={handleChange}
                  value={recipeData.preparation} /></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
