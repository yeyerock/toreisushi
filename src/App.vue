<template>
  <div id="app">
    <nav class="menu_superior">
      <section class="d-flex justify-content-between align-items-center px-3">
        <div class="logo_menu">
            <img class="w-100" src="./assets/internal/logo_torei.png" alt="">
        </div>
        <div>
            <a href="https://wa.me/+5214422006063?text=Hola%20,%quisiera%20ordenar%20un%20pedido" target="_blank" class="boton btn btn-sm text-white">Hacer pedido</a>
        </div>
      </section>
    </nav>

    <router-view/>

    <section class="foot d-flex flex-column align-items-center justify-content-center w-100 mx-auto">      
      
      <div class="cont_redes d-flex justify-content-center align-items-center mb-2 mx-auto">
        <div class=" mx-auto">
          <a href="tel:+524422006063" target="_blank" class="icono_red"><i class="mdi mdi-phone " ></i></a>
        </div>

        <div class="mx-auto">
           <a href="https://wa.me/+5214422006063?text=Hola%20,%quisiera%20ordenar%20un%20pedido" target="_blank" class="icono_red"><i class="mdi mdi-whatsapp " ></i></a>
        </div>
       
        <div class="mx-auto">
          <a href="https://www.instagram.com/torei_sushi/" target="_blank" class="icono_red"><i class="mdi mdi-instagram " ></i></a>
        </div>
            
        <div class="mx-auto">
          <a href="https://www.facebook.com/toreisushi" target="_blank" class="icono_red"><i class="mdi mdi-facebook " ></i></a>
        </div>           
      </div>
      
      <div class="logo_footer mx-auto mb-4">
        <img class="w-100" src="./assets/internal/logo_torei.png" alt="">
      </div>
          <!-- <div class="text-center mb-3">            
            <span class="leyenda_footer  enlace ">Crafted by: <a href="https://b312studio.com" target="_blank" class="enlace">B312 Studio</a></span>
          </div> -->
    </section>
  </div>
</template>

<script>

export default {
  components: {
    
  }
}
</script>


<style>

  :root{
    --negro: #000;
    --naranja:#FE9128;
    --blanco: #fff;
    --hueso: #FFF9DC;
    --rojo: #CE0010;
  }
  #app {
    overflow-x: hidden;
    height: 100vh;
    background-image: url(./assets/internal/fondo_vertical.png);
    background-size: cover;
  }

  .enlace{
    text-decoration: none;
    color: var(--negro);
  }

  .boton{
    background: var(--naranja) !important;
    font-family: rival-sans, sans-serif !important;
    font-weight: 700 !important;
    font-style: italic !important;
  }

  .cont_redes{
    width: 80%;
  }

  .icono_red{
    color: var(--negro);
    font-size: 2.5rem;
  }

  .icono_red:hover{
    color: var(--rojo);
    transition: 0.3s;
  }

  .titulo{
    font-family: rival-sans, sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 2rem;
    text-align: left;
  }

  .subtitulo{
    font-size: 1.5rem;
    font-family: rival-sans, sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: left;
  }

  .nombre_platillo{
    font-family: rival-sans, sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 1.5rem;
  }

  .precio_platillo{
    font-family: rival-sans, sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 1.5rem;
  }

  .texto_platillo{
    font-size: 1rem;
    font-family: rival-sans, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

    nav {
      padding: 1rem;
      width: 100%;
    }

    nav .logo_menu{
      width: 5rem;
    }

/* Estilos Cards */

  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 100%;
   
  }

   .swiper-slide .img_platillo{
     width: 300px;
    height: 400px;    
    border-radius: 2rem;
    overflow: hidden;
   }

   .swiper-slide .img_platillo img{
    width: 100%;
   }

  .swiper-slide .cont_descripcion{
    /* background: #00000083; */
    height: 100%;
    padding: 0.5rem;
  }

  .swiper-slide .nombre_platillo,
  .swiper-slide .texto_platillo ,
  .swiper-slide .precio_platillo {
    color: var(--negro);
    text-align: justify;
  }

  /* Menu */
  .menu_superior{
    position: fixed;
  }

/* Footer */

.logo_footer{
  width: 5rem;
}

.leyenda_footer{
  font-size: 1rem;
    font-family: rival-sans, sans-serif;
    font-weight: 400;
    font-style: normal;
}

.leyenda_footer .enlace{
  color: var(--rojo);
}

.leyenda_footer .enlace:hover{
  font-weight: bold;
  transition: 0.3s;
}
</style>
