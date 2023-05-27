app.component('best-recipes', {
    props: {
        image: {
            type: String
        },
        name: {
            type: String
        },
        category: {
            type: String
        },
        totaltime: {
            type: String
        },
        level: {
            type: String
        },
        index: {
            type: Number
        },
        
    },
    data() {
        return {
            counter: 0
        }
    },
    mounted() {

    },
    methods: {
        onClickViewRecipe(){
            console.log("VIEW");
            this.$emit('recipedetails', this.index);
            //this.$test.emit('foo', this);
        }
    },
    template:
        /*html*/
        `<div class="d-flex card card-style mb-5">
        <img v-bind:src="image" class="img-cards mb-0" alt="featured recipe">
        <div class="card-body m-2 padding-card">
            <h2 class="cards-title overflow-hidden mb-1">{{ name }}</h2>
            <p class="cards-text mb-1">{{ category }}</p>
            <p class="cards-text mb-1">{{ totaltime }}</p>
            <p class="cards-text mb-1">{{ level }}</p>
            <button class="btn btn-view text-center mt-3 marg-bot" v-on:click="onClickViewRecipe()"
                data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ver receta</button>
        </div>
    </div>
    `
})