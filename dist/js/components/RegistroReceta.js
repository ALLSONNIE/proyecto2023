app.component('registrar-receta', {
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
        `<!--  Registrar receta -->
        <div class="mt-5 justify-content-center ps-5 pe-5">
        <p class="page-title text-center">Registrar receta</p>
        <div class="card card-style mt-5">
            <div class="card-body m-auto">
                <div class="row align-menu text-center d-flex">

                    <form action="response.php" method="post" enctype="multipart/form-data">

                        <div class="mb-4 mt-4 margin-content title-medium text-center">

                            <div class="form-group display-forms">
                                <label for="nombre-receta" class="col-md-4 d-flex space-register">Nombre de la
                                    receta:</label>
                                <div class="col-md-5">
                                    <input type="text" name="nombre-receta"
                                        class="form-control input-size box-register spacer" id="nombre-receta"
                                        placeholder="Nombre de la receta...">
                                </div>
                            </div>

                            <div class="form-group mt-4 display-forms">
                                <label for="tiempo-prep" class="col-md-4 d-flex space-register">Tiempo de
                                    preparación:</label>
                                <div class="col-md-5">
                                    <input type="text" name="tiempo-prep"
                                        class="form-control input-size box-register spacer" id="tiempo-prep"
                                        placeholder="10 min, 30 min, 1 hora...    ">
                                </div>
                            </div>

                            <div class="form-group mt-4 display-forms">
                                <label for="tiempo-coccion" class="col-md-4 d-flex space-register">Tiempo de la
                                    cocción:</label>
                                <div class="col-md-5">
                                    <input type="text" name="tiempo-coccion"
                                        class="form-control input-size box-register spacer" id="tiempo-coccion"
                                        placeholder="10 min, 30 min, 1 hora...    ">
                                </div>
                            </div>

                            <div class="form-group mt-4 display-forms">
                                <label for="tiempo-total" class="col-md-4 d-flex space-register">Tiempo total de
                                    receta:</label>
                                <div class="col-md-5">
                                    <input type="text" name="tiempo-total"
                                        class="form-control input-size box-register spacer" id="tiempo-total"
                                        placeholder="10 min, 30 min, 1 hora...    ">
                                </div>
                            </div>

                            <div class="form-group mt-4 display-forms">
                                <label for="porciones" class="col-md-4 d-flex space-register">Porciones de la
                                    receta:</label>
                                <div class="col-md-5">
                                    <input type="text" name="porciones"
                                        class="form-control input-size box-register spacer" id="porciones"
                                        placeholder="1, 2, 3, 4...   ">
                                </div>
                            </div>

                            <div class="form-group mt-4 display-forms">
                                <label for="nivel" class="col-md-4 d-flex space-register">Nivel de
                                    complejidad:</label>
                                <select name="nivel" class="form-control-lg input-size box-register spacer col-md-5"
                                    id="nivel" placeholder="Fácil...   ">
                                </select>
                            </div>

                            <div class="form-group mt-4 display-forms">
                                <label for="categoria" class="col-md-4 d-flex space-register">Categoría de la
                                    receta:</label>
                                <select name="categoria"
                                    class="form-control-lg input-size box-register spacer col-md-5" id="categoria"
                                    placeholder="Almuerzo...   ">
                                </select>
                            </div>

                            <div class="form-group mt-4 display-forms">
                                <label for="ocasion" class="col-md-4 d-flex space-register">Ocasión de la
                                    receta:</label>
                                <select name="ocasion"
                                    class="form-control-lg input-size box-register spacer col-md-5" id="ocasion"
                                    placeholder="Todas...   ">
                                </select>
                            </div>

                            <div class="form-group mt-4 display-forms">
                                <label for="descripcion" class="col-md-4 d-flex space-register">Descripción de
                                    receta:</label>
                                <textarea name="descripcion"
                                    class="form-control textarea-size box-register spacer col-md-5" rows="5"
                                    id="descripcion" placeholder="Descripción...   "></textarea>
                            </div>

                            <div class="form-grou mt-4 display-forms">
                                <label for="ingredientes" class="col-md-4 d-flex space-register">Ingredientes de
                                    receta:</label>
                                <textarea name="ingredientes"
                                    class="form-control textarea-size box-register spacer col-md-5" rows="5"
                                    id="ingredientes" placeholder="Ingredientes...   "></textarea>
                            </div>

                            <div class="form-group mt-4 display-forms">
                                <label for="pasos" class="col-md-4 d-flex space-register">Instrucciones
                                    receta:</label>
                                <textarea name="pasos"
                                    class="form-control textarea-size box-register spacer col-md-5" rows="5"
                                    id="pasos" placeholder="Instrucciones...   "></textarea>
                            </div>

                            <div class="custom-file title-medium display-forms margin-content mt-4">
                                <label class="custom-file-label col-md-4 d-flex space-register"
                                    for="recipe_img">Seleccionar foto</label>
                                <input type="image" src="./images/up-loading.png" name="recipe_img"
                                    class="upload-img form-control textarea-size box-register spacer col-md-5"
                                    rows="5" id="recipe_img">
                            </div>

                            <input type="submit" class="btn-add mt-5" value="Agregar receta">

                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
    <!--  Registrar receta end -->`
})