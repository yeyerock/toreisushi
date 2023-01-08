<template>
    <section class="categoria_menu d-flex flex-column px-3">
        <div class="boton_regresar d-flex my-3">
            <router-link to="/" class="btn boton enlace text-white">Regresar
            </router-link>
        </div> 

     <div class="cabecera_categoria d-flex justify-content-center align-items-center mb-5">
          <div class="logo_categoria col-3 col-sm-1 mx-3">
              <img class="w-100" src="../assets/internal/nigiris.png" alt="">
          </div>
          <div class="cont_textos col-7">
             <h1 class="titulo">Nigiris</h1>
             <h3 class="subtitulo">ドラゴンボール</h3>
         </div>
         
     </div>
 
     <div class="swiper mySwiper">
       <div class="swiper-wrapper">
  
         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/nigiris/arrachera_nig.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Nigiris Arrachera</h2>
             <p class="precio_platillo mb-0">$70.00</p>
             <p class="texto_platillo  mb-0">Int: Arrachera, Queso philadelphia, Aguacate</p>
           </div>
         </div>

         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/nigiris/camaron_nig.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Nigiris Camarón</h2>
             <p class="precio_platillo mb-0">$70.00</p>
             <p class="texto_platillo  mb-0">Int: Camarón, Queso philadelphia, Aguacate</p>
           </div>
         </div>

         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/nigiris/pulpo_nig.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Nigiris Pulpo</h2>
             <p class="precio_platillo mb-0">$70.00</p>
             <p class="texto_platillo  mb-0">Int: Pulpo, Queso philadelphia, Aguacate</p>
           </div>
         </div>

         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/nigiris/salmon_nig.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Nigiris Salmón</h2>
             <p class="precio_platillo mb-0">$70.00</p>
             <p class="texto_platillo  mb-0">Int: Salmón, Queso philadelphia, Aguacate</p>
           </div>
         </div>

         <div class="swiper-slide">  
           <div class="img_platillo">
               <img src="../assets/fotos/nigiris/surimi_nig.jpg" alt="">
             </div>        
             <div class="cont_descripcion">
             <h2 class="nombre_platillo mb-0">Nigiris Surimi</h2>
             <p class="precio_platillo mb-0">$70.00</p>
             <p class="texto_platillo  mb-0">Int: Surimi, Queso philadelphia, Aguacate</p>
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