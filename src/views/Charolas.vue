<template>
    <section class="categoria_menu d-flex flex-column px-3">
        <div class="boton_regresar d-flex my-3">
            <router-link to="/" class="btn boton enlace text-white">Regresar
            </router-link>
        </div> 

     <div class="cabecera_categoria d-flex justify-content-center align-items-center mb-5">
        <div class="logo_categoria col-3 col-sm-1 mx-3">
          <img class="w-100" src="../assets/internal/charolas.png" alt="">
        </div> 
        <div class="cont_textos col-7">
             <h1 class="titulo">Charolas</h1>
             <h3 class="subtitulo">トレイ</h3>
         </div>
     </div>
 
     <div class="swiper mySwiper">
       <div class="swiper-wrapper">
  
         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/charolas/charola_chida.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Charola Mediana</h2>
             <p class="precio_platillo mb-0">$200.00</p>
             <p class="texto_platillo  mb-0">4 Rollos de sushi, 1 Orden de rollos primavera, 1 Orden de Dragon Balls, 1 Onigiri y 2 Nigiris</p>
           </div>
         </div>

         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/charolas/charola_elite.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">charola Elite</h2>
             <p class="precio_platillo mb-0">$350.00</p>
             <p class="texto_platillo  mb-0">6 Rollos de Sushi, 1 Orden de rollos primavera, 1 Orden de Dragon Balls, 1 Onigiri y 2 Nigiris </p>
           </div>
         </div>
 
       </div>
       <div class="swiper-pagination"></div>
     </div>
    </section>
 </template>
 
 <script type="module">
 export default {
   components: {
     
   },
   mounted(){
      var swiper = new Swiper('.swiper', {
       effect: 'coverflow',
       grabCursor: true,
       centeredSlides: true,
       slidesPerView: 'auto',
       coverflowEffect: {
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       },
       pagination: {
         el: '.swiper-pagination',
       },
     });
   }
 };
 
 
 </script>