app.component('footer-info',{
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
    `<!--Footer-->
    <footer class="row mt-5 text-center ending-bar">

    <div class="mt-5 ms-xl-5 marg-bot">
        <div class="row row-move">
            <div class="col-md-4  footer-icon mb-5 d-flex justify-content-center align-items-center">
                <a href="#"><img src="./images/logo.png" class="logo-footer position-relative minus-margin margin-footer icon-move"
                        alt="Graphic identifier"></a>
            </div>

            <div class="col-md-2 hide-mb hide-tab">
                <div class="row">
                    <p class="nav-link active footer-info">Secciones</p>
                    <div class="col p-0">
                        <ul class="p-0 text-start">
                            <li class="footer-no-item mb-1"><a class="footer-text" href="#">Mejores Recetas</a>
                            </li>
                            <li class="footer-no-item mb-1"><a class="footer-text" href="#">Categorias</a></li>
                            <li class="footer-no-item mb-1"><a class="footer-text" href="#">Ocasiones</a></li>
                            <li class="footer-no-item mb-1"><a class="footer-text" href="#">Niveles</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-md-2 margin-footer margin-footer-tablet hide-mb hide-tab">
                <div class="row">
                    <p class="nav-link active footer-info">Social</p>
                    <div class="col p-0">
                        <ul class="p-0 text-start">
                            <li class="footer-no-item mb-1"><a class="footer-text" href="#"><img
                                        src="./images/instagram.png" class="me-3 icon-sm"
                                        alt="Instagram">ReceTicas</a></li>
                            <li class="footer-no-item mb-1"><a class="footer-text" href="#"><img
                                        src="./images/facebook.png" class="me-3 icon-sm"
                                        alt="Facebokk">ReceTicas</a></li>
                            <li class="footer-no-item mb-1"><a class="footer-text" href="#"><img
                                        src="./images/whatsapp.png" class="me-3 icon-sm" alt="WhatsApp">2222
                                    2222</a></li>
                            <li class="footer-no-item mb-1"><a class="footer-text" href="#"><img
                                        src="./images/correo.png" class="me-3 icon-sm"
                                        alt="Correo">rt@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-md-2 margin-footer margin-footer-tablet hide-mb hide-tab">
                <div class="row">
                    <p class="nav-link active footer-info">Acerca de <br>nosotros</p>
                    <div class="col p-0">
                        <ul class="p-0 text-start">
                            <li class="footer-no-item mb-1"><a class="footer-text" href="#">Terminos y sus
                                    <br>políticas</a></li>
                            <li class="footer-no-item mb-1"><a class="footer-text" href="#">Equipo</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>

</footer>
<!--Footer-->`
})