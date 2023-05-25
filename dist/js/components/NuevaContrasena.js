app.component('nueva-contrasena', {
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
        `<!--  Nueva Contraseña -->
        <div class="mt-5 justify-content-center ps-5 pe-5">
        <p class="page-title text-center">Nueva contraseña</p>
        <div class="card card-style mt-5">
            <div class="card-body m-auto">
                <div class="row align-menu text-center d-flex">

                    <form action="response.php" method="post" enctype="multipart/form-data">

                        <div class="mb-4 mt-4 margin-content title-medium text-center">

                            <div class="form-group display-forms">
                                <label for="contraseña" class="col-md-4 d-flex space-register">Nueva contraseña:</label>
                                <div class="col-md-5">
                                    <input type="text" name="contraseña"
                                        class="form-control input-size box-register spacer" id="contraseña"
                                        placeholder="**********">
                                </div>
                            </div>

                            <div class="form-group mt-4 display-forms">
                                <label for="contraseña" class="col-md-4 d-flex space-register">Confirmar contraseña:</label>
                                <div class="col-md-5">
                                    <input type="text" name="contraseña"
                                        class="form-control input-size box-register spacer" id="contraseña"
                                        placeholder="**********">
                                </div>
                            </div>

                            <input type="submit" class="btn-add mt-5" value="Confirmar">

                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
    <!--  Nueva Contraseña end -->`
})