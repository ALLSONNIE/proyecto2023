app.component('inicio-sesion', {
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
        `<!--  Inicio Sesión -->
        <div class="justify-content-center ps-5 pe-5">
        <p class="page-title text-center">Iniciar Sesión</p>
        <div class="card card-style mt-5">
            <div class="card-body m-auto">
                <div class="row align-menu text-center d-flex">

                    <form action="response.php" method="post" enctype="multipart/form-data">

                        <div class="mb-4 mt-4 margin-content title-medium text-center">

                            <div class="form-group display-forms">
                                <label for="nombre-usuario" class="col-md-4 d-flex space-register">Nombre de
                                    usuario:</label>
                                <div class="col-md-5">
                                    <input type="text" name="nombre-usuario"
                                        class="form-control input-size box-register spacer" id="nombre-usuario"
                                        placeholder="Allison...">
                                </div>
                            </div>

                            <div class="form-group mt-4 display-forms">
                                <label for="contraseña" class="col-md-4 d-flex space-register">Contraseña:</label>
                                <div class="col-md-5">
                                    <input type="text" name="contraseña"
                                        class="form-control input-size box-register spacer" id="contraseña"
                                        placeholder="**********">
                                </div>
                            </div>

                            <input type="submit" class="btn-add mt-5" value="Iniciar Sesión">
                            <a type="submit" class="link-password mt-2" value="Iniciar Sesión">¿Olvidó su contraseña?</a>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
    <!--  Inicio Sesión end -->`
})