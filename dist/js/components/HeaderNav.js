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
</div>`
})