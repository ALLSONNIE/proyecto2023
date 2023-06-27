const app = Vue.createApp({
    data(){
        return{
            selectedIndex: 0,
            all_recipes:[
            ],
            bestRecipes:[ //si hay llaves hay objetos
            {id:102, image:"", name:"", totaltime:"", category: "", level:"", likes: 4},
            ],
            allRecipes:[ //si hay llaves hay objetos
            {id:102, image:"", name:"", totaltime:"", category: "", level:"", likes: 4},
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

        //this.colectedRecipes = JSON.parse(localStorage.getItem('colectedRecipes'));

        axios({
            method: 'get',
            url: 'http://localhost/prueba/public/api/recipes/top10'

        })
        .then(
            (response) => {

                let items = response.data;
                console.log(items);

                this.bestRecipes = [];

                items.forEach(element => {
                    this.bestRecipes.push({ 
                         id: element.id,
                         image: "http://localhost/prueba/public/storage/imgs/" + element.image,
                         name: element.name,
                         category: element.category,
                         totaltime: "20 mins",
                         level: element.level,
                         likes: element.likes})
                });
              
            }
        )
        .catch(
            error => console.log(error)
        );
        axios({
            method: 'get',
            url: 'http://localhost/prueba/public/api/recipes/all'

        })
        .then(
            (response) => {

                let items = response.data;
                console.log(items);

                this.allRecipes = [];

                items.forEach(element => {
                    this.allRecipes.push({ 
                        id: element.id,
                        image: "http://localhost/prueba/public/storage/imgs/" + element.image,
                        name: element.name,
                        category: element.category,
                        totaltime: "20 mins",
                        level: element.level,
                        likes: element.likes})
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
                url: 'http://localhost/prueba/public/api/recipes/recipe/' + index 
            })
            .then(
                (response) => {
                    console.log(response);
                    let item = response.data[0][0];

                    this.recipe.id = index;
                    this.recipe.image = "http://localhost/prueba/public/storage/imgs/" + item.image;
                    this.recipe.name = item.name;
                    this.recipe.category = item.category;
                    this.recipe.preptime = item.preparation_time + " mins";
                    this.recipe.cooktime = item.cooking_time + " mins";
                    this.recipe.totaltime = item.total_time + " mins";
                    this.recipe.portions = item.portions + " servings";
                    this.recipe.occasion = item.occasion;
                    this.recipe.level = item.level;
                    this.recipe.likes = item.likes;
                    this.recipe.description = item.description;
                    this.recipe.steps = item.preparation_instructions;

                    /*let ingredientsList = "";
                    for(let i = 0; i <item.extendedIngredients.length; i++){
                        ingredientsList += item.extendedIngredients[i].original + "\n";
                    }
                    this.recipe.ingredients = ingredientsList;*/

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
                url: 'http://localhost/prueba/public/api/recipes/searchbyname/' + searchTerm
            })
            .then(
                (response) => {
    
                    let items = response.data;
                    console.log(items);
    
                    items.forEach(element => {
                        this.recipes.push({ 
                            id: element.id, 
                            image: "http://localhost/prueba/public/storage/imgs/" + element.image,
                            name: element.name,
                            totaltime: " mins",
                            level: element.level,
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
                    url: 'http://localhost/prueba/public/api/users/savedrecipes/1'
                })
                .then(
                    (response) => {
        
                        let items = response.data;
                        console.log(items);

                            this.colectedRecipes.push({ 
                                id: items.id, 
                                image: "http://localhost/prueba/public/storage/imgs/" + items.image,
                                name: items.name,
                                totaltime: " mins",
                                level: items.level,
                                steps: items.preparation_instructions,
                                category: items.category })
                            
                            //localStorage.setItem('colectedRecipes', JSON.stringify(this.colectedRecipes));
                      
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