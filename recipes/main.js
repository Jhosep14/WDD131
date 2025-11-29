import recipes from './recipes.mjs';

const recipeList = document.getElementById('recipe-list');
const searchForm = document.getElementById('recipe-search');
const searchInput = document.getElementById('search-input');

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const getPrimaryTag = (recipe) => {
  if (Array.isArray(recipe.tags) && recipe.tags.length > 0) {
    return recipe.tags[0];
  }
  return 'recipe';
};

const formatStars = (rating = 0) => {
  const safeRating = clamp(Math.round(Number(rating) || 0), 0, 5);
  return '★'.repeat(safeRating) + '☆'.repeat(5 - safeRating);
};

const createRecipeCard = (recipe) => {
  const tag = getPrimaryTag(recipe);
  const rounded = Math.round(Number(recipe.rating) || 0);
  return `
    <article class="recipe-card">
      <div class="recipe-card__inner">
        <figure class="recipe-card__media">
          <img src="${recipe.image}" alt="${recipe.name}">
        </figure>
        <div class="recipe-card__body">
          <span class="recipe-card__tag">${tag}</span>
          <h2 class="recipe-card__title">${recipe.name}</h2>
          <div class="recipe-card__rating" aria-label="Rated ${rounded} out of 5">${formatStars(recipe.rating)}</div>
          <p class="recipe-card__description">${recipe.description}</p>
        </div>
      </div>
    </article>
  `;
};

const renderRecipes = (list) => {
  if (!recipeList) return;

  if (!list.length) {
    recipeList.innerHTML = '<p class="recipes__empty">No recipes match that search. Try another ingredient or category.</p>';
    return;
  }

  recipeList.innerHTML = list.map(createRecipeCard).join('');
};

const filterRecipes = (term) => {
  const query = term.trim().toLowerCase();
  if (!query) return recipes;

  return recipes.filter((recipe) => {
    const searchable = [
      recipe.name,
      recipe.description,
      getPrimaryTag(recipe),
      (recipe.tags || []).join(' '),
      (recipe.recipeIngredient || []).join(' ')
    ]
      .join(' ')
      .toLowerCase();

    return searchable.includes(query);
  });
};

if (searchForm && searchInput) {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    renderRecipes(filterRecipes(searchInput.value));
  });

  searchInput.addEventListener('input', (event) => {
    if (!event.target.value.trim()) {
      renderRecipes(recipes);
    }
  });
}

renderRecipes(recipes);