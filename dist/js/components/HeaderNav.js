app.component('header-navbar',{
    props:{
        name:{
            type: String
        }
    },
    data(){
        return{
            counter: 0
        }
    },
    mounted(){

    },
    methods: {
        
    },
    template:
    /*html*/
    `<header class="container-fluid navbar1 bar-mb">

    <nav class="navbar p-0">
        <div class="container-fluid">
            <div class="col-8">
                <a href="#"><img src="./images/logo.png" class="position-relative logo"
                    alt="Graphic identifier"></a>
            </div>
            <div class="col-4 hide">
                <a href="#"><img src="./images/user.png" class="position-relative mt-2 p-4 user"
                alt="Perfil"></a>
            </div>
        </div>
    </nav>

</header>

<div class="position-absolute top-0 start-0 pt-3 pb-0 pt-0 ps-3 margin-header">
    <img class="icon-mb" src="./images/bars.svg" alt="menu bar">
</div>

<!-- Navegación -->
<div class="row mb-5">

    <nav id="navbar-main" class="navbar navbar-expand-lg offcanvas-mb">
        <div class="offcanvas-header">  
            <button id="btn-close" class="btn btn-dark float-end me-3">X</button>
         </div> 

        <div class="container-fluid">

            <ul class="navbar-nav me-auto mb-2 mt-3 mb-lg-0 cancel-margin">
                <li class="nav-item">
                    <a class="nav-link btn-navg" aria-current="page" href="#">Categorías</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn-navg ms-lg-5" href="#">Ocasiones</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn-navg ms-lg-5" href="#">Niveles</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn-navg ms-lg-5" href="#">Contacto</a>
                </li>
                <li>
                    <form class="d-flex ms-lg-5 push-bar" role="search">
                        <input class="form-control s-bar p-0" type="search" placeholder="Buscar..." aria-label="Search">
                        <button class="btn btn-search search-button-height" type="submit"><img
                                src="./images/lupa.png" class="lens-icon" alt="Lense"></button>
                    </form>
                </li>
            </ul>

        </div>

    </nav>

</div>
<!-- Navegación -->`
})