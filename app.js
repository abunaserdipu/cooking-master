// Work on search food start
const searchFoods = () => {
  const searchInput = document.getElementById("food-input").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayFoods(data.meals))
    .catch((error) =>
      displayError("Something went wrong! Please try again later!")
    );
};

const displayFoods = (foods) => {
  const foodsDiv = document.getElementById("foods");
  foodsDiv.innerHTML = " ";
  foods.forEach((food) => {
    const foodDiv = document.createElement("div");
    foodDiv.className = "food";
    foodDiv.innerHTML = `
        <img onclick="displayFoodDetails('${food.idMeal}')" src="${food.strMealThumb}"></img>
        <h5>${food.strMeal}</h5>
        `;
    foodsDiv.appendChild(foodDiv);
  });
};
// Work on search food end

// Work on food ingredients start
const displayFoodDetails = (id) => {
  console.log(id);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => renderFoodDetails(data.meals[0]));
};

const renderFoodDetails = (food) => {
  const ingredientsDiv = document.getElementById("food-ingredients");
  console.log(ingredientsDiv);
  ingredientsDiv.innerHTML = `
  <img src="${food.strMealThumb}"></img>
  <h3>${food.strMeal}</h3>
  <h6>Ingredients</h5>
  <p>${food.strIngredient1}</p>
  <p>${food.strIngredient2}</p>
  <p>${food.strIngredient3}</p>
  <p>${food.strIngredient4}</p>
  <p>${food.strIngredient5}</p>
  <p>${food.strIngredient6}</p>
  <p>${food.strIngredient7}</p>
  <p>${food.strIngredient8}</p>
  <p>${food.strIngredient9}</p>
  <p>${food.strIngredient10}</p>
  <p>${food.strIngredient11}</p>
  <p>${food.strIngredient12}</p>
  <p>${food.strIngredient13}</p>
  <p>${food.strIngredient14}</p>
  <p>${food.strIngredient15}</p>
  `;
};

const displayError = (error) => {
  const errorTag = document.getElementById("error-message");
  errorTag.innerText = error;
};
// Work on food ingredients end
