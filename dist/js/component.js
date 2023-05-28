const app = Vue.createApp({
    data(){
        return{
            selectedIndex: 0,
            all_recipes:[
            ],
            bestRecipes:[ //si hay llaves hay objetos
            {id:102, image:"", name:"", totaltime:"", category:"", level:"", likes: 4},
            ],
            allRecipes:[ //si hay llaves hay objetos
            {id:102, image:"", name:"", totaltime:"", category:"", level:"", likes: 4},
            ],
            recipe:{},
            recipes:[],
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
                         category: element.dishTypes,
                         totaltime: "20 mins",
                         level: "Easy",
                         likes: element.aggregateLikes})
                });
              
            }
        )
        .catch(
            error => console.log(error)
        );
        axios({
            method: 'get',
            url: 'https://api.spoonacular.com/recipes/complexSearch?type=dessert&apiKey=8b98c06758fb474990b5b291d7137de2'

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
                         category: element.dishTypes,
                         totaltime: "20 mins",
                         level: "Easy",
                         likes: element.aggregateLikes})
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
                    this.recipe.category = item.dishTypes;
                    this.recipe.preptime = item.preparationMinutes + " mins";
                    this.recipe.cooktime = item.cookingMinutes + " mins";
                    this.recipe.totaltime = item.readyInMinutes + " mins";
                    this.recipe.portions = item.servings + " servings";
                    this.recipe.occasion = "All";
                    this.recipe.level = "Easy";
                    this.recipe.likes = item.aggregateLikes;
                    this.recipe.description = item.summary;
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
            const searchTerm = this.$refs.searchInput.value;
            axios({
                method: 'get',
                url: `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=93d548ce31d7411eaecf08e61cd0be2d`
            })
            .then(
                (response) => {
    
                    let items = response.data.results;
                    console.log(items);
    
                    items.forEach(element => {
                        this.recipes.push({ 
                            id: element.id, 
                            image: element.image,
                            name: element.title,
                            totaltime: element.readyInMinutes + " mins",
                            level: "Easy",
                            steps: element.instructions, })
                    });
                  
                }
            )
            .catch(
                error => console.log(error)
            );
            },
            onClickRecipeLike(index){
                console.log("btn - click");
                this.likes += 1;
                console.log("INDEX -> "+ index)

                //this.bestRecipes[index].this.likes += 1;
            }
    },
});

//init custom events for components
const emitter = mitt();
//global property for custom events
app.config.globalProperties.$test = emitter; 