import { useState, useEffect } from "react";
import axios from "axios";
import {
  GridContainer,
  RecipeCard,
  RecipeImage,
  RecipeInfo,
  RecipeName,
  NutritionInfo,
  MoreButton,
  ButtonWrap,
  ListWrap,
  NoticeBox,
  Modal,
  Overlay,
  CloseButton,
  RecipeText,
  Ingredients,
} from "./StyledList";
import { ApiResponse, Recipe } from "./type";

interface RecipesContainerProps {
  searchQuery: string;
}

interface ExtendedRecipe extends Recipe {
  url: string;
}

const RecipesContainer = ({ searchQuery }: RecipesContainerProps) => {
  const API_ID = import.meta.env.VITE_APP_ID;
  const API_KEY = import.meta.env.VITE_APP_KEY;
  const [recipes, setRecipes] = useState<ExtendedRecipe[]>([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(20);
  const [selectedRecipe, setSelectedRecipe] = useState<ExtendedRecipe | null>(
    null
  );

  const loadMoreRecipes = () => {
    setFrom(to);
    setTo(to + 20);
  };

  useEffect(() => {
    async function fetchRecipes() {
      if (!searchQuery) return;
      try {
        const result = await axios.get<ApiResponse>(
          "https://api.edamam.com/api/recipes/v2",
          {
            params: {
              type: "public",
              q: searchQuery,
              app_id: API_ID,
              app_key: API_KEY,
              imageSize: "REGULAR",
              from,
              to,
            },
          }
        );
        if (result.data && result.data.hits) {
          const newRecipes = result.data.hits.map(
            (hit) => hit.recipe as ExtendedRecipe
          );
          if (from === 0) {
            setRecipes(newRecipes);
          } else {
            setRecipes((prevRecipes) => [...prevRecipes, ...newRecipes]);
          }
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipes([]);
      }
    }

    fetchRecipes();
  }, [searchQuery, from, to, API_ID, API_KEY]);

  const handleRecipeClick = (recipe: ExtendedRecipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <ListWrap>
      <GridContainer>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} onClick={() => handleRecipeClick(recipe)}>
            <RecipeImage src={recipe.image} alt={recipe.label} />
            <RecipeInfo>
              <RecipeName>{recipe.label}</RecipeName>
              <NutritionInfo>
                Calories: {recipe.calories.toFixed(0)} kcal
              </NutritionInfo>
              <NutritionInfo>
                Ingredients: {recipe.ingredients.length}
              </NutritionInfo>
              <NutritionInfo>Source: {recipe.source}</NutritionInfo>
            </RecipeInfo>
          </RecipeCard>
        ))}
      </GridContainer>

      {recipes.length <= 0 && (
        <NoticeBox>
          Search for a food. <br />
          ex) coke, salad, pasta ...
        </NoticeBox>
      )}

      {recipes.length > 0 && (
        <ButtonWrap>
          <MoreButton type="button" onClick={loadMoreRecipes}>
            Load More Recipes
          </MoreButton>
        </ButtonWrap>
      )}

      {selectedRecipe && (
        <>
          <Overlay onClick={closeModal} />
          <Modal>
            <CloseButton type="button" onClick={closeModal} />
            <RecipeImage
              src={selectedRecipe.image}
              alt={selectedRecipe.label}
            />
            <RecipeName>{selectedRecipe.label}</RecipeName>
            <NutritionInfo>
              Calories: {selectedRecipe.calories.toFixed(0)} kcal
            </NutritionInfo>
            <NutritionInfo>Source: {selectedRecipe.source}</NutritionInfo>
            <NutritionInfo>Ingredients:</NutritionInfo>
            <Ingredients>
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </Ingredients>
            <NutritionInfo>Preparation:</NutritionInfo>
            <RecipeText>
              {selectedRecipe.url ? (
                <a
                  href={selectedRecipe.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full recipe and preparation instructions
                </a>
              ) : (
                "No preparation instructions available."
              )}
            </RecipeText>
          </Modal>
        </>
      )}
    </ListWrap>
  );
};

export default RecipesContainer;
