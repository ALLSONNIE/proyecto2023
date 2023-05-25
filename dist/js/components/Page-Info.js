app.component('page-info', {
    props: {
        name: {
            type: String
        }
    },
    data() {
        return {
            counter: 0
        }
    },
    mounted() {

    },
    methods: {

    },
    template:
        /*html*/
        `<div class="ps-5 pe-5 margin-card-mb">
            <div class="card top-card-style mb-5">
                <div class="row g-0">
                    <div class="col-md-6">
                        <img src="./images/pic1.png" class="img-fluid img-style" alt="...">
                    </div>
                    <div class="col-md-6 minus-margin">
                        <div class="card-body">
                            <h2 class="info-title mb-3 minus-margin">¡Despierta tu paladar!</h2>
                            <p class="info-desc">Descubre todo tipo de recetas, desde desayunos, almuerzos y entradas hasta postres, bebidas y sopas. En Receticas encontrarás todos los platillos que necesites, independientemente de la categoría, ocasión o nivel.No esperes más, y empieza a cocinar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
})