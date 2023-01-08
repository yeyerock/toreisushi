<template>
    <section class="categoria_menu d-flex flex-column px-3">
        <div class="boton_regresar d-flex my-3">
            <router-link to="/" class="btn boton enlace text-white">Regresar
            </router-link>
        </div> 

     <div class="cabecera_categoria d-flex justify-content-center align-items-center mb-5">
      <div class="logo_categoria col-3 col-sm-1 mx-3">
        <img class="w-100" src="../assets/internal/yakimeshi.png" alt="">
      </div> 
        <div class="cont_textos col-7">
             <h1 class="titulo">Yakimeshi</h1>
             <h3 class="subtitulo">ドラゴンボール</h3>
         </div>         
     </div>
 
     <div class="swiper mySwiper">
       <div class="swiper-wrapper">
  
         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/yakimeshi/arrachera_yak.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Yakimeshi Arrachera</h2>
             <p class="precio_platillo mb-0">$89.00</p>
             <p class="texto_platillo  mb-0">Ing: Arrachera, Surimi, Aguacate, Arroz blanco, Ajonjolí</p>
             
           </div>
         </div>

         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/yakimeshi/camaron_yak.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Yakimeshi Camarón</h2>
             <p class="precio_platillo mb-0">$89.00</p>
             <p class="texto_platillo  mb-0">Ing: Camarón, Surimi, Aguacate, Arroz blanco, Ajonjolí</p>
           </div>
         </div>
         
         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/yakimeshi/surimi_yak.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Yakimeshi Surimi</h2>
             <p class="precio_platillo mb-0">$89.00</p>
             <p class="texto_platillo  mb-0">Ing: Surimi, Aguacate, Arroz blanco, Ajonjolí</p>
           </div>
         </div>
 
       </div>
       <div class="swiper-pagination"></div>
     </div>
    </section>
 </template>
 
 <style>
     .categoria_menu{
         width: 100%;
     }
 
     .cabecera_categoria{
         width: 100%;
     }
 
     .cabecera_categoria .logo_categoria{
         
     }
 </style>
 
 
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