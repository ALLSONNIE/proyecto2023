app.component('modal-recipes', {
    props: {
        image: {
            type: String
        },
        name: {
            type: String
        },
        preptime: {
            type: String
        },
        cooktime: {
            type: String
        },
        totaltime: {
            type: String
        },
        portions: {
            type: String
        },
        category: {
            type: Array
        },
        occasion: {
            type: String
        },
        level: {
            type: String
        },
        likes: {
            type: Number
        },
        description: {
            type: String
        },
        ingredients: {
            type: String
        },
        steps: {
            type: String
        },
        index: {
            type: Number
        },
    },
    data() {
        return {
          localLikes: 0,

        };
    },
    mounted() {
        this.$test.on('foo', function(data){
            console.log(data);
        });
    },
    methods: {
        onClickRecipeLike(){
            this.localLikes += 1;
            this.$emit('recipelike', this.index);
        },
        onClickSaveRecipe(){
            console.log("VIEW");
            this.$emit('saverecipes', this.index);
        }
    },
    template:
        /*html*/
        `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
        <div class="modal-content ps-5 pe-5 ">
        <div class="modal-header">
            <div class="m-auto">
                <p class="mt-3 page-title" id="staticBackdropLabel">{{ name }}</p>
            </div>
        </div>
        <div class="modal-body p-0 card card-style m-2">
            <img class="d-flex m-auto img-fluid img-modal" v-bind:src="image" alt="{{ name }}">
            

            <div class="row mt-3 ms-5">

                <div class="mb-2 col-md p-0">
                    <p class="col-md-6 d-flex modal-titles mb-0">Tiempo de preparación:</p>
                    <p class="modal-info mt-0">{{ preptime }}</p>
                </div>

                <div class="mb-2 col-md p-0 spacer-modal">
                    <p class="col-md-6 d-flex modal-titles mb-0">Tiempo de la cocción:</p>
                    <p class="modal-info mt-0">{{ cooktime }}</p>
                </div>

            </div>

            <div class="row margin-content margin-right ms-5">

                <div class="mb-2 col-md p-0">
                    <p class="col-md-6 d-flex modal-titles mb-0">Tiempo total de receta:</p>
                    <p class="modal-info mt-0">{{ totaltime }}</p>
                </div>

                <div class="mb-2 col-md p-0 spacer-modal">
                    <p class="col-md-6 d-flex modal-titles mb-0">Total de las porciones:</p>
                    <p class="modal-info mt-0">{{ portions }}</p>
                </div>

            </div>

            <div class="row margin-content margin-right ms-5">

                <div class="mb-2 col-md p-0">
                    <p class="col-md-6 d-flex modal-titles mb-0">Categoría de la receta:</p>
                    <p class="modal-info mt-0">{{ category }}</p>
                </div>

                <div class="mb-2 col-md p-0 spacer-modal">
                    <p class="col-md-6 d-flex modal-titles mb-0">Ocasión de la receta:</p>
                    <p class="modal-info mt-0">{{ occasion }}</p>
                </div>

            </div>

            <div class="row margin-content margin-right ms-5">

                <div class="mb-2 col-md p-0">
                    <p class="col-md-6 d-flex modal-titles mb-0">Nivel de complejidad:</p>
                    <p class="modal-info mt-0">{{ level }}</p>
                </div>

                <div class="mb-2 col-md p-0 spacer-modal">
                    <p class="col-md-6 d-flex modal-titles mb-0">Cantidad de votos:</p>
                    <p class="modal-info mt-0">{{ localLikes }}</p>
                </div>

            </div>

            <div class="row margin-content margin-right ms-5 me-5">

                <div class="mb-2 col-md p-0">
                    <p class="col-md-12 d-flex modal-titles mb-0">Descripción:</p>
                    <p class="modal-info mt-0">{{ description }}</p>
                </div>

            </div>

            <div class="row margin-content margin-right ms-5 me-5">

                <div class="mb-2 col-md p-0">
                    <p class="col-md-12 d-flex modal-titles mb-0">Ingredientes:</p>
                    <p class="modal-info mt-0">{{ ingredients }}</p>
                </div>

            </div>

            <div class="row mb-4 margin-content margin-right ms-5 me-5">

                <div class="mb-2 col-md p-0">
                    <p class="col-md-12 d-flex modal-titles mb-0">Instrucciones:</p>
                    <p class="modal-info mt-0">{{ steps }}</p>
                </div>

            </div>

            <div class="row mb-5 ms-5 me-5">

                <div class="col-md p-0">
                    <button type="button" class="btn-modal d-inline-block" v-on:click="onClickRecipeLike()">Me gusta</button>
                </div>

                <div class="col-md p-0">
                    <button type="button" class="btn-modal d-inline-block add-margin" v-on:click="onClickSaveRecipe()" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Coleccionar</button>
                </div>

            </div>

        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal">X</button>
        </div>
    </div>
    </div>
    </div>
    
    <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
        <div class="modal-content ps-5 pe-5 ">
        <div class="modal-header">
            <div class="m-auto">
                <p class="mt-3 page-title" id="staticBackdropLabel">¡Coleccionada!</p>
            </div>
        </div>
        <div class="modal-body p-0 card card-style m-2">
        <p class="m-auto">¡La receta ha sido coleccionada con éxito!</p>
        <p class="m-auto">Échale un vistazo en tu perfil</p>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal">X</button>
        </div>
    </div>
    </div>
    </div>`
})