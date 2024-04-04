export function setSearchedMeals(state, meals) {
    state.setSearchedMeals = meals || []
}

export function setMealsByLetter(state, meals) {
    state.setMealsByLetter = meals || []
}

export function setMealsByIngredients(state, meals) {
    state.mealsByIngredients = meals || []
}

export function setIngredient(state, ingredient) {
    state.ingredient = ingredient
}