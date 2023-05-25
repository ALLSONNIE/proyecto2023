app.component('perfil-usuario', {
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
        `<div class="mt-5 justify-content-center ps-5 pe-5">
        <p class="page-title text-center">Perfil de Usuario</p>
        <div class="card card-style mt-5 mb-5">
            <div class="card-body">
                <div class="">
                    <div class="text-center">
                        <img src="./images/user-black.png" class="img-fluid img-sizer mt-4" alt="...">
                    </div>
                    <div class="mt-4 mb-4">
                        <div class="card-body p-0 m-auto">
                                <div class="mb-2 col-md">
                                    <p class="users-titles m-auto mb-0">Nombre de usuario</p>
                                    <p class="users-info m-auto mt-4">Aquí podrá encontrar la lista de todas sus recetas coleccionadas
                                        ¿Está preparado para cocinar?</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>`
})