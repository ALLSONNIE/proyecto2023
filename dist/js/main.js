const app = Vue.createApp({

    data() {
        return {
            selectedIndex: 0,
            recipes: [ //array
            //objetos
                {id:102, image:"./images/pic2.jpg", name:"Hamburguesas", preptime:"10 minutos", cooktime:"10 minutos", totaltime:"20 minutos", portions:"8 porciones", category:"Almuerzo", occasion:"Todas", level:"Fácil", likes: 4, description:"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", ingredients:"Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.", steps:"Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."},
                
                {id:103, image:"./images/pic3.jpg", name:"Champiñones", preptime:"10 minutos", cooktime:"10 minutos", totaltime:"20 minutos", portions:"8 porciones", category:"Almuerzo", occasion:"Todas", level:"Intermedio", likes: 2, description:"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", ingredients:"Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.", steps:"Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."},
                
                {id:104, image:"./images/pic4.jpeg", name:"Tiramisú", preptime:"10 minutos", cooktime:"10 minutos", totaltime:"20 minutos", portions:"8 porciones", category:"Postre", occasion:"Todas", level:"Avanzado", likes: 3, description:"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", ingredients:"Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.", steps:"Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."},

                {id:105, image:"./images/pic5.jpg", name:"Soufflé de chocolate", preptime:"10 minutos", cooktime:"10 minutos", totaltime:"20 minutos", portions:"8 porciones", category:"Postre", occasion:"Todas", level:"Fácil", likes: 3, description:"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", ingredients:"Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.", steps:"Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."},

                {id:106, image:"./images/pic6.jpg", name:"Spaghetti", preptime:"10 minutos", cooktime:"10 minutos", totaltime:"20 minutos", portions:"8 porciones", category:"Almuerzo", occasion:"Todas", level:"Fácil", likes: 3, description:"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", ingredients:"Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.", steps:"Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."},

                {id:107, image:"./images/pic7.jpg", name:"Ensalada de huevo", preptime:"10 minutos", cooktime:"10 minutos", totaltime:"20 minutos", portions:"8 porciones", category:"Almuerzo", occasion:"Todas", level:"Fácil", likes: 3, description:"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", ingredients:"Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.", steps:"Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."},

                //{id:108, image:"./images/pic8.jpg", category:"Bebida", name:"Rompope", description:"Some quick...", time:"20 mins", level:"Intermedio", likes: 3},
                
                //{id:109, image:"./images/pic9.jpg", category:"Sopa", name:"Sopa de espinaca", description:"Some quick...", time:"20 mins", level:"Intermedio", likes: 4}
            ],
            relatedRecipes: [ //array
            //objetos
                {id:102, image:"./images/pic2.jpg", name:"Hamburguesas", preptime:"10 minutos", cooktime:"10 minutos", totaltime:"20 minutos", portions:"8 porciones", category:"Almuerzo", occasion:"Todas", level:"Fácil", likes: 4, description:"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", ingredients:"Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.", steps:"Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."},
                
                {id:103, image:"./images/pic3.jpg", name:"Champiñones", preptime:"10 minutos", cooktime:"10 minutos", totaltime:"20 minutos", portions:"8 porciones", category:"Almuerzo", occasion:"Todas", level:"Intermedio", likes: 2, description:"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", ingredients:"Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.", steps:"Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."},
                
                {id:104, image:"./images/pic4.jpeg", name:"Tiramisú", preptime:"10 minutos", cooktime:"10 minutos", totaltime:"20 minutos", portions:"8 porciones", category:"Postre", occasion:"Todas", level:"Avanzado", likes: 3, description:"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", ingredients:"Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.", steps:"Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."}
            ]
        }
    },
    methods: {
        onClickViewRecipe(index){
            this.selectedIndex = index;
        }
    }
    
});