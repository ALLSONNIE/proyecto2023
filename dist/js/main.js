const app = Vue.createApp({

    data() {
        return {
            recipes: [ //array
            //objetos
                {id:102, image:"./images/pic2.jpg", category:"Almuerzo", name:"Hamburguesas", description:"Some quick...", time:"20 mins", level:"Fácil", likes: 1},
                
                {id:103, image:"./images/pic3.jpg", category:"Almuerzo", name:"Champiñones", description:"Some quick...", time:"20 mins", level:"Intermedio", likes: 2},
                
                {id:104, image:"./images/pic4.jpeg", category:"Postre", name:"Tiramisú", description:"Some quick...", time:"20 mins", level:"Difícil", likes: 3},

                {id:105, image:"./images/pic5.jpg", category:"Postre", name:"Soufflé de chocolate", description:"Some quick...", time:"20 mins", level:"Fácil", likes: 3},

                {id:106, image:"./images/pic6.jpg", category:"Almuerzo", name:"Spaghetti", description:"Some quick...", time:"20 mins", level:"Fácil", likes: 3},

                {id:107, image:"./images/pic7.jpg", category:"Almuerzo", name:"Ensalada de huevo", description:"Some quick...", time:"20 mins", level:"Fácil", likes: 3},

                //{id:108, image:"./images/pic8.jpg", category:"Bebida", name:"Rompope", description:"Some quick...", time:"20 mins", level:"Intermedio", likes: 3},
                
                //{id:109, image:"./images/pic9.jpg", category:"Sopa", name:"Sopa de espinaca", description:"Some quick...", time:"20 mins", level:"Intermedio", likes: 4}
            ]
        }
    },

    methods: { //area donde se establecem todas las funciones
        onClickLike(index){
           // console.log("btn-click");
           //this.likes += 1;
           //console.log("index=" + index);

           this.recipes[index].likes += 1;

        },

        onClickUnLike(index){
           // if(this.likes > 0) this.likes -= 1;
           if(this.recipes[index].likes > 0) this.recipes[index].likes -= 1;
        }  
    },
});