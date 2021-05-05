// # Nests

// #### 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.

// ```javascript
let board = [
[1, 2, 3],
["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
[true, false]
];
// ```
for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
    console.log(board[i][j]);
    }
}
// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
const doggo = {
    name: "Butch",
    breed: "Terrier",
    favoriteFood: ["Carrot", "Coconut", "Croquettes"],
}
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.

// * 2.3 Access the second element of the doggo's favorite foods. 
console.log(doggo.favoriteFood[1]);
// * 2.4 Add a method that loops through and print all the doggo's favorite food.
function printDoggoFavoriteFood(){
    for (let i = 0; i < this.favoriteFood.length; i++) {
        console.log(this.favoriteFood[i])
    }
}
doggo.printDoggoFavoriteFood = printDoggoFavoriteFood;
doggo.printDoggoFavoriteFood();
console.log(doggo);

// #### 3. 
// * 3.1 Create an object called recipes.
const recipes = {
    ingredients: {
        butter: "200grams",
        sugar: "400grams",
        flour: "500grams",
    },
    printIngredients(){
        for (const key in recipes.ingredients) {
            if (Object.hasOwnProperty.call(recipes.ingredients, key)) {
                console.log(recipes.ingredients[key]);
            }
        }
    }
};
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 

// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
recipes.ingredients.ginger = "5grams";
console.log(recipes.ingredients);

// * 3.4 Change the ingredient `sugar` to `brown sugar`. 
recipes.ingredients.sugar = "brown sugar";
console.log(recipes.ingredients);

// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 
recipes.printIngredients();

