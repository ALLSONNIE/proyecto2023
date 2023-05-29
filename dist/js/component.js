const app = Vue.createApp({
    data(){
        return{
            selectedIndex: 0,
            all_recipes:[
            ],
            bestRecipes:[ //si hay llaves hay objetos
            {id:102, image:"", name:"", totaltime:"", category:[], level:"", likes: 4},
            ],
            allRecipes:[ //si hay llaves hay objetos
            {id:102, image:"", name:"", totaltime:"", category:[], level:"", likes: 4},
            ],
            recipe:{},
            recipes:[
            ],
            colectedRecipes:[
            ],
            showRecipes: 8,
            add: 8,
        }
    },
    mounted:function(){

        this.colectedRecipes = JSON.parse(localStorage.getItem('colectedRecipes'));

        axios({
            method: 'get',
            url: 'https://api.spoonacular.com/recipes/complexSearch?type=maincourse&apiKey=64be024ac1a849ae82643ae3a1cec5d6&number=10'

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
            url: 'https://api.spoonacular.com/recipes/random?&apiKey=64be024ac1a849ae82643ae3a1cec5d6&number=64'

        })
        .then(
            (response) => {

                let items = response.data.recipes;
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
    computed:{

    },
    methods: {
        onClickRecipeDetails(index){
            console.log("recipe id - " + index);
            //this.selectedIndex = index;

            //get recipe details
            axios({
                method: 'get',
                url: 'https://api.spoonacular.com/recipes/'+index+'/information?includeNutrition=false&apiKey=64be024ac1a849ae82643ae3a1cec5d6'
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
                url: `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=64be024ac1a849ae82643ae3a1cec5d6`
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
                         })
                    });
                  
                }
            )
            .catch(
                error => console.log(error)
            );
            },
            onClickSaveRecipe(index){
                // Guardar el arreglo en el localStorage
                //const colectedRecipes = [];
                //localStorage.setItem('colectedRecipes', JSON.stringify(colectedRecipes));

                // Recuperar el arreglo del localStorage
                //const retrievedArray = JSON.parse(localStorage.getItem('colectedRecipes'));

                console.log("recipe id - " + index);
                axios({
                    method: 'get',
                    url: 'https://api.spoonacular.com/recipes/'+index+'/information?includeNutrition=false&apiKey=64be024ac1a849ae82643ae3a1cec5d6'
                })
                .then(
                    (response) => {
        
                        let items = response.data;
                        console.log(items);

                            this.colectedRecipes.push({ 
                                id: items.id, 
                                image: items.image,
                                name: items.title,
                                totaltime: items.readyInMinutes + " mins",
                                level: "Easy",
                                steps: items.instructions,
                                category: items.dishTypes })
                            
                            localStorage.setItem('colectedRecipes', JSON.stringify(this.colectedRecipes));
                      
                    }
                )
                .catch(
                    error => console.log(error)
                );
            },
            onClickShowRecipes(){
                this.showRecipes += this.add;
            }
    },
});

//init custom events for components
const emitter = mitt();
//global property for custom events
app.config.globalProperties.$test = emitter; 