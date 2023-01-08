<template>
   <section class="categoria_menu d-flex flex-column px-3">
  
    <div class="boton_regresar d-flex my-3">
        <router-link to="/" class="btn boton enlace text-white">Regresar
        </router-link>
      </div> 


    <div class="cabecera_categoria d-flex justify-content-center align-items-center mb-5">
      <div class="logo_categoria col-3 col-sm-1 mx-3">
        <img class="w-100" src="../assets/internal/rollos.png" alt="">
    </div>  
      <div class="cont_textos col-7">
            <h1 class="titulo">Rollos</h1>
            <h3 class="subtitulo">ロールズ</h3>
        </div>       
    </div>

    <div class="swiper mySwiper">
      <div class="swiper-wrapper">

        
        <!-- Rollos Especiales -->

        <div class="swiper-slide">  
          <div class="img_platillo">
              <img src="../assets/fotos/especiales/arrachera_aguacate_esp.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="titulo text-center mb-0">Especiales</h2>
          </div>
        </div>

        <div class="swiper-slide">  
          <div class="img_platillo">
            <img src="../assets/fotos/especiales/arrachera_aguacate_esp.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo mb-0">Rollo de Arrachera Especial</h2>
            <p class="precio_platillo mb-0">$69.00</p>
            <p class="texto_platillo  mb-0">Int: Arrachera, Queso philadeplhia</p>
            <p class="texto_platillo ">Ext: Aguacate, Ajonjolí</p>
          </div>
        </div>

        <div class="swiper-slide">  
          <div class="img_platillo">
            <img src="../assets/fotos/especiales/camaron_alga_esp.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo mb-0">Rollo de Camarón Especial</h2>
            <p class="precio_platillo mb-0">$69.00</p>
            <p class="texto_platillo  mb-0">Int: Camarón, Queso philadeplhia</p>
            <p class="texto_platillo ">Ext: Alga</p>
          </div>
        </div>

        <div class="swiper-slide">  
          <div class="img_platillo">
            <img src="../assets/fotos/especiales/surimi_esp.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo mb-0">Rollo de Surimi Especial</h2>
            <p class="precio_platillo mb-0">$69.00</p>
            <p class="texto_platillo  mb-0">Int: Surimi, Queso philadelphia, Alga</p>
            <p class="texto_platillo ">Ext: Surimi</p>
          </div>
        </div>

        <!-- Rollos Naturales -->

        <div class="swiper-slide">  
          <div class="img_platillo">
              <img src="../assets/fotos/naturales/arrachera_nat.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="titulo text-center mb-0">Naturales</h2>
          </div>
        </div>

        <div class="swiper-slide">  
          <div class="img_platillo">
              <img src="../assets/fotos/naturales/arrachera_nat.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo mb-0">Rollo de Arrachera</h2>
            <p class="precio_platillo mb-0">$69.00</p>
            <p class="texto_platillo  mb-0">Int: Arrachera, Queso philadelphia</p>
            <p class="texto_platillo ">Ext: Ajonjolí</p>
          </div>
        </div>

        <div class="swiper-slide">  
          <div class="img_platillo">
              <img src="../assets/fotos/naturales/camaron_nat.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo mb-0">Rollo de Camarón</h2>
            <p class="precio_platillo mb-0">$69.00</p>
            <p class="texto_platillo  mb-0">Int: Camarón, Pepino, Queso philadelphia</p>
            <p class="texto_platillo ">Ext: Ajonjolí</p>
          </div>
        </div>

        <div class="swiper-slide">  
          <div class="img_platillo">
              <img src="../assets/fotos/naturales/mango_nat.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo mb-0">Rollo de Mango</h2>
            <p class="precio_platillo mb-0">$69.00</p>
            <p class="texto_platillo  mb-0">Int: Mango, Pepino, Queso philadelphia</p>
            <p class="texto_platillo ">Ext: Ajonjolí</p>
          </div>
        </div>

        <div class="swiper-slide">  
          <div class="img_platillo">
              <img src="../assets/fotos/naturales/pulpo_nat.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo mb-0">Rollo de Pulpo</h2>
            <p class="precio_platillo mb-0">$69.00</p>
            <p class="texto_platillo  mb-0">Int: Pulpo, Pepino, Queso philadelphia</p>
            <p class="texto_platillo ">Ext: Ajonjolí</p>
          </div>
        </div>

        <div class="swiper-slide">  
          <div class="img_platillo">
              <img src="../assets/fotos/naturales/salmon_nat.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo mb-0">Rollo de Salmón</h2>
            <p class="precio_platillo mb-0">$69.00</p>
            <p class="texto_platillo  mb-0">Int: Salmón, Pepino, Queso philadelphia</p>
            <p class="texto_platillo ">Ext: Ajonjolí</p>
          </div>
        </div>

        <div class="swiper-slide">  
          <div class="img_platillo">
              <img src="../assets/fotos/naturales/surimi_nat.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo mb-0">Rollo de Surimi</h2>
            <p class="precio_platillo mb-0">$69.00</p>
            <p class="texto_platillo  mb-0">Int: Surimi, Pepino, Queso philadelphia</p>
            <p class="texto_platillo ">Ext: Ajonjolí</p>
          </div>
        </div>

         <!-- Rollos Empanizados -->
        
         <div class="swiper-slide">  
          <div class="img_platillo">
              <img src="../assets/fotos/empanizados/arrachera_emp.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="titulo text-center mb-0">Empanizados</h2>
          </div>
        </div>

        <div class="swiper-slide">  
          <div class="img_platillo">
            <img src="../assets/fotos/empanizados/arrachera_emp.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo mb-0">Rollo de Arrachera</h2>
            <p class="precio_platillo mb-0">$69.00</p>
            <p class="texto_platillo  mb-0">Int: Arrachera, Queso philadelphia</p>
            <p class="texto_platillo ">Ext: Cubierta empanizada</p>
          </div>
        </div>

        <div class="swiper-slide">  
          <div class="img_platillo">
            <img src="../assets/fotos/empanizados/camaron_emp.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo mb-0">Rollo de Camarón</h2>
            <p class="precio_platillo mb-0">$69.00</p>
            <p class="texto_platillo  mb-0">Int: Camarón, Queso philadelphia</p>
            <p class="texto_platillo ">Ext: Cubierta empanizada</p>
          </div>
        </div>

        <div class="swiper-slide">  
          <div class="img_platillo">
            <img src="../assets/fotos/empanizados/manchego_emp.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo mb-0">Rollo de Manchego</h2>
            <p class="precio_platillo mb-0">$69.00</p>
            <p class="texto_platillo  mb-0">Int: Queso manchego, Queso philadelphia</p>
            <p class="texto_platillo ">Ext: Cubierta empanizada</p>
          </div>
        </div>

        <div class="swiper-slide">  
          <div class="img_platillo">
            <img src="../assets/fotos/empanizados/pulpo_emp.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo mb-0">Rollo de Pulpo</h2>
            <p class="precio_platillo mb-0">$69.00</p>
            <p class="texto_platillo  mb-0">Int: Pulpo, Queso philadelphia</p>
            <p class="texto_platillo ">Ext: Cubierta empanizada</p>
          </div>
        </div>

        <div class="swiper-slide">  
          <div class="img_platillo">
            <img src="../assets/fotos/empanizados/salmon_emp.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo mb-0">Rollo de Salmón</h2>
            <p class="precio_platillo mb-0">$69.00</p>
            <p class="texto_platillo  mb-0">Int: Salmón, Queso philadelphia</p>
            <p class="texto_platillo ">Ext: Cubierta empanizada</p>
          </div>
        </div>

        <div class="swiper-slide">  
          <div class="img_platillo">
            <img src="../assets/fotos/empanizados/surimi_emp.jpg" alt="">
            </div>        
          <div class="cont_descripcion">
            <h2 class="nombre_platillo mb-0">Rollo de Surimi</h2>
            <p class="precio_platillo mb-0">$69.00</p>
            <p class="texto_platillo  mb-0">Int: Surimi, Queso philadelphia</p>
            <p class="texto_platillo ">Ext: Cubierta empanizada</p>
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
        margin-top: 4rem;
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