const searchFood = () => {
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value;
  searchInput.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.meals));
};

const displaySearchResult = (meals) => {
  const searchResult = document.getElementById("search-result");
  meals.forEach((meal) => {
    console.log(meal);
    const div = document.createElement("div");
    div.classList.add = "col";
    div.innerHTML = `
    <div class="card" onclick = 'loadMealDetail(${meal.idMeal})'>
    <img class='h-25' rounded' src="${
      meal.strMealThumb
    }" class="card-img-top" alt="This a Picture of Food">
    <div class="card-body">
      <h5 class="card-title text-info text-center bg-white">${meal.strMeal}</h5>
      <p class='text-danger'>How To Make: </p>
      <p class="card-text">${meal.strInstructions.slice(0, 500)}.</p>
    </div>
  </div>
    `;
    searchResult.appendChild(div);
  });
};
const loadMealDetail = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => mealDetail(data.meals[0]));
};

const mealDetail = (meal) => {
  const mealDetail = document.getElementById("meal-detail");
  const newDiv = document.createElement("div");
  newDiv.classList.add = "card";
  newDiv.innerHTML = `
  <div class="card";">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <h5 class="card-title text-info text-center bg-white">${
              meal.strMeal
            }</h5>
            <div class="card-body">
              <p class="card-text">${meal.strInstructions.slice(0, 200)}.</p>
              <a href="${
                meal.strYoutube
              }" class="btn btn-primary">Watch Tutorial</a>
          </div>
  `;
  mealDetail.appendChild(newDiv);
};
