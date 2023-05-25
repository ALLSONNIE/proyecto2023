app.component('verificar-codigo', {
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
        `<!--  Verificación del código -->
        <div class="mt-5 justify-content-center ps-5 pe-5">
        <p class="page-title text-center">Verificación del código</p>
        <div class="card card-style mt-5">
            <div class="card-body m-auto">
                <div class="row align-menu text-center d-flex">

                    <form action="response.php" method="post" enctype="multipart/form-data">

                        <div class="mb-4 mt-4 margin-content title-medium text-center">

                            <div class="form-group display-forms">
                                <label for="codigo" class="col-md-4 d-flex space-register">Código de verificación:</label>
                                <div class="col-md-5">
                                    <input type="text" name="codigo"
                                        class="form-control input-size box-register spacer" id="codigo"
                                        placeholder="123456...">
                                </div>
                            </div>

                            <input type="submit" class="btn-add mt-5" value="Enviar código">

                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
    <!--  Verificación del código end -->`
})