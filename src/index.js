function showRecipe(response) {
  new Typewriter("#recipe-container", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let apiKey = "f78a0dbafabf13190c441b8cod34ftff";
  let context =
    "You are a genius AI and you will generate a simple and basic recipe according to keyword and provide with HTML basic format for example: <p>Recipe</p>";
  let prompt = "Provide a basic and simple recipe";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showRecipe);
}

let formElement = document.querySelector("#inout-form");
formElement.addEventListener("submit", generateRecipe);
