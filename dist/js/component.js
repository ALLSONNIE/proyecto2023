const app = Vue.createApp({
    data(){
        return{
            selectedIndex: 0,
            all_recipes:[
            ],
            bestRecipes:[ //si hay llaves hay objetos
            {id:102, image:"", name:"", totaltime:"", category:"", level:"", likes: 4, ingredients:"", steps:""},
            ],
            allRecipes:[ //si hay llaves hay objetos
            {id:102, image:"", name:"", totaltime:"", category:"", level:"", likes: 4, ingredients:"", steps:""},
            ],
            recipe:{},
        }
    },
    mounted:function(){

        this.all_recipes = this.bestRecipes;

        axios({
            method: 'get',
            url: 'https://api.spoonacular.com/recipes/complexSearch?type=maincourse&apiKey=8b98c06758fb474990b5b291d7137de2'

        })
        .then(
            (response) => {

                let items = response.data.results;
                console.log(items);

                this.bestRecipes = [];

                items.forEach(element => {
                    this.bestRecipes.push({ 
                         id: element.id,
                         image: element.image,
                         name: element.title,
                         category: 'main course',
                         totaltime: "20 mins",
                         level: "Easy",
                         likes: 18,
                         ingredients: "NA",
                         steps: "NA" })
                });
              
            }
        )
        .catch(
            error => console.log(error)
        );
        axios({
            method: 'get',
            url: 'https://api.spoonacular.com/recipes/complexSearch?type=maincourse&apiKey=8b98c06758fb474990b5b291d7137de2'

        })
        .then(
            (response) => {

                let items = response.data.results;
                console.log(items);

                this.allRecipes = [];

                items.forEach(element => {
                    this.allRecipes.push({ 
                         id: element.id,
                         image: element.image,
                         name: element.title,
                         category: 'main course',
                         totaltime: "20 mins",
                         level: "Easy",
                         likes: 18,
                         ingredients: "NA",
                         steps: "NA" })
                });
              
            }
        )
        .catch(
            error => console.log(error)
        );
    },
    methods: {
        onClickRecipeDetails(index){
            console.log("recipe id - " + index);
            //this.selectedIndex = index;

            //get recipe details
            axios({
                method: 'get',
                url: 'https://api.spoonacular.com/recipes/'+index+'/information?includeNutrition=false&apiKey=8b98c06758fb474990b5b291d7137de2'
            })
            .then(
                (response) => {
                    //console.log(response.data.meals);
                    let item = response.data;

                    this.recipe.id = index;
                    this.recipe.image = item.image;
                    this.recipe.name = item.title;
                    this.recipe.category = "main course";
                    this.recipe.totaltime = item.readyInMinutes + " mins";
                    this.recipe.level = "Easy";
                    this.recipe.likes = item.aggregateLikes;
                    this.recipe.steps = item.instructions;

                    let ingredientsList = "";
                    for(let i = 0; i <item.extendedIngredients.length; i++){
                        ingredientsList += item.extendedIngredients[i].original + "\n";
                    }
                    this.recipe.ingredients = ingredientsList;

                }
            )
            .catch(
                error => console.log(error)
            );
        },
        
        onClickViewRecipe(index){
            this.selectedIndex = index;
        },
        onClickRecipeSearch(){
            axios({
                method: 'get',
                url: 'https://api.spoonacular.com/recipes/search?query='+keyword+'&apiKey=8b98c06758fb474990b5b291d7137de2'
            })
            .then(
                (response) => {
    
                    let items = response.data.results;
                    console.log(items);
    
                    this.recipes = [];
    
                    items.forEach(element => {
                        this.recipes.push({ 
                             id: element.id,
                             image: element.image,
                             name: element.title,
                             category: category,
                             totaltime: "20 mins",
                             level: "Easy",
                             likes: 18,
                             ingredients: "NA",
                             steps: "NA" })
                    });
                  
                }
            )
            .catch(
                error => console.log(error)
            );
        }
    },
});

//init custom events for components
const emitter = mitt();
//global property for custom events
app.config.globalProperties.$test = emitter; 