<template>
    <section class="categoria_menu d-flex flex-column px-3">
        <div class="boton_regresar d-flex my-3">
            <router-link to="/" class="btn boton enlace text-white">Regresar
            </router-link>
        </div> 

     <div class="cabecera_categoria d-flex justify-content-around mb-5">
         <div class="cont_textos col-7">
             <h1 class="titulo">Extras</h1>
             <h3 class="subtitulo">追加機能</h3>
         </div>
         <div class="logo_categoria col-3">
             <img class="w-100" src="../assets/internal/extra.png" alt="">
         </div>
     </div>
 
     <div class="swiper mySwiper">
       <div class="swiper-wrapper">
  
         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/extras/arrachera_oni.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Onigiris Arrachera</h2>
             <p class="precio_platillo mb-0">$70.00</p>
             <p class="texto_platillo  mb-0">Int: Arrachera, Queso, Aguacate</p>
             <p class="texto_platillo ">Ext: Ajonjolí</p>
           </div>
         </div>

         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/extras/rollo_primavera.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Rollos Primavera</h2>
             <p class="precio_platillo mb-0">$70.00</p>
             <p class="texto_platillo  mb-0">Int: Arrachera, Queso, Aguacate</p>
             <p class="texto_platillo ">Ext: Ajonjolí</p>
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