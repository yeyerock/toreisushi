<template>
  <div class="home mb-4 d-flex">
    <div class="division col-4 px-4 d-flex flex-column align-items-center justify-content-center">
      <div class="dibujo_home">
        <img  src="../assets/internal/palillos.png" alt="">
      </div>

      <div class="dibujo_home">
        <img class="w-100" src="../assets/internal/arco.png" alt="">
      </div>

      <div class="dibujo_home">
        <img class="w-100" src="../assets/internal/onigiri.png" alt="">
      </div>
    </div>

    <div class="division col-7 px-4 d-flex flex-column align-items-start justify-content-center">
      <div class="text-justify">
        <router-link to="/rollos" class="enlace">
          <p class="titulo mb-0">Rollos</p>
          <p class="subtitulo">ロールズ</p>
        </router-link>
      </div>    
      
      <div class="text-justify">
        <router-link to="/dragonBalls" class="enlace">
          <p class="titulo mb-0">Dragon Balls</p>
          <p class="subtitulo">ドラゴンボール</p>
        </router-link>
      </div>  

      <div class="text-justify">
        <router-link to="/nigiris" class="enlace">
          <p class="titulo mb-0">Nigiris</p>
          <p class="subtitulo ">にぎり</p>
        </router-link>
      </div>  

      <div class="text-justify">
        <router-link to="/yakimeshi" class="enlace">
          <p class="titulo mb-0">Yakimeshi</p>
          <p class="subtitulo ">やきめし</p>
        </router-link>
      </div> 
      
      <div class="text-justify">
        <router-link to="/extras" class="enlace">
          <p class="titulo mb-0">Extras</p>
          <p class="subtitulo ">追加機能</p>
        </router-link>
      </div>  

      <div class="text-justify">
        <router-link to="/charolas" class="enlace">
          <p class="titulo mb-0">Charolas</p>
          <p class="subtitulo ">トレイ</p>
        </router-link>
      </div>  

      <div class="text-justify">
        <router-link to="/promociones" class="enlace">
          <p class="titulo mb-0">Promociones</p>
          <p class="subtitulo ">プロモーション</p>
        </router-link>         
      </div>  
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'HomeView',
  components: {
    Menu
  }
}
</script>

<style>
  .home{
    margin-top: 5rem;
  }

  .home .division:nth-child(1)  {
    border-right: 2px solid var(--negro);
    margin-right: 0.2rem;
  }

  .home .division:nth-child(2)  {
    border-left: 2px solid var(--negro);
  }

  .dibujo_home{
    width: 4rem;
    margin-bottom: 5rem;
  }

  .dibujo_home:nth-child(1) img{
    height: 9rem;
    width: 2rem;
    rotate: -15deg;
  }

  .dibujo_home:nth-child(2) img{   
    rotate: 15deg;
  }

  .dibujo_home:nth-child(3) img{   
    rotate: -60deg;
  }

  .home .enlace:hover{
    color: var(--naranja);
  }
</style>
