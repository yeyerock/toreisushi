<template>
    <section class="categoria_menu d-flex flex-column px-3">
        <div class="boton_regresar d-flex my-3">
            <router-link to="/" class="btn boton enlace text-white">Regresar
            </router-link>
        </div> 

     <div class="cabecera_categoria d-flex justify-content-center align-items-center mb-5">
       <div class="logo_categoria col-3 col-sm-1 mx-3">
             <img class="w-100" src="../assets/internal/dragon_ball.png" alt="">
         </div>   
      <div class="cont_textos col-7">
             <h1 class="titulo">Dragon Balls</h1>
             <h3 class="subtitulo">ドラゴンボール</h3>
         </div>        
     </div>
 
     <div class="swiper mySwiper">
       <div class="swiper-wrapper">
  
         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/dragonballs/arrachera_dra.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Dragon Ball Arrachera</h2>
             <p class="precio_platillo mb-0">$79.00</p>
             <p class="texto_platillo  mb-0">Int: Arrachera, Queso philadelphia, Aguacate</p>
            <p class="texto_platillo ">Ext: Cubierta empanizada</p>
           </div>
         </div>

         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/dragonballs/camaron_dra.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Dragon Ball Camarón</h2>
             <p class="precio_platillo mb-0">$79.00</p>
             <p class="texto_platillo  mb-0">Int: Camarón, Queso philadelphia, Aguacate</p>
            <p class="texto_platillo ">Ext: Cubierta empanizada</p>
           </div>
         </div>

         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/dragonballs/manchego_dra.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Dragon Ball Manchego</h2>
             <p class="precio_platillo mb-0">$79.00</p>
             <p class="texto_platillo  mb-0">Int: Queso manchego, Queso philadelphia, Aguacate</p>
            <p class="texto_platillo ">Ext: Cubierta empanizada</p>
           </div>
         </div>

         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/dragonballs/pulpo_dra.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Dragon Ball Pulpo</h2>
             <p class="precio_platillo mb-0">$79.00</p>
             <p class="texto_platillo  mb-0">Int: Pulpo, Queso philadelphia, Aguacate</p>
            <p class="texto_platillo ">Ext: Cubierta empanizada</p>
           </div>
         </div>

         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/dragonballs/salmon_dra.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Dragon Ball Salmón</h2>
             <p class="precio_platillo mb-0">$79.00</p>
             <p class="texto_platillo  mb-0">Int: Salmón, Queso philadelphia, Aguacate</p>
            <p class="texto_platillo ">Ext: Cubierta empanizada</p>
           </div>
         </div>

         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/dragonballs/surimi_dra.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Dragon Ball Surimi</h2>
             <p class="precio_platillo mb-0">$79.00</p>
             <p class="texto_platillo  mb-0">Int: Surimi, Queso philadelphia, Aguacate</p>
            <p class="texto_platillo ">Ext: Cubierta empanizada</p>
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