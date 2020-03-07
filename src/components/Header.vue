<template>
  <header class="default-header">
      <div class="header-left">
        <v-app-bar-nav-icon class="sideNavBtn" color="black" dark @click.stop="sideNavTrigger"></v-app-bar-nav-icon>
        <h2 @click="$router.push({ name: 'top'})">Msains</h2>
        <ul v-if="authentication_token">
          <li @click="$router.push({ name: 'threadboard'})"><span>学内掲示板</span></li>
          <li><span>TIMELINE</span></li>
          <li><span>時間割検索</span></li>
          <li><span>通知</span></li>
        </ul>
        <ul v-if="!authentication_token">
          <li>新規登録</li>
          <li>ログイン</li>
        </ul>
      </div>
      <div class="header-right">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ユーザー検索">
        <a href=""><img src="../assets/images/ikuta.jpg"></a>
      </div>
  </header>
</template>

<script>
export default {
  data(){
    return {
      drawer: false,
      authentication_token: true 
    }
  },
  methods: {
    sideNavTrigger(){
      this.$store.dispatch("sideNavAction");
    }
  }
}
</script>


<style scoped lang="scss">
@import '../assets/scss/utils/valiables.scss';
/* pc ver */
@media screen and (min-width: $breakpoint-pc-min-width){
  .default-header {
    display: flex;
    justify-content: space-between;
    background-color: #88CE6E;
    
    .sideNavBtn {
      display: none;
    }
  }

  .header-left {
    display :flex;
    align-items: center;
    
    h2 {
      color:#6A6363;
      margin-top: 15px;
      margin-left: 30px;
    }

    &:hover {
      cursor: pointer;
    }
    
    ul {
      display: flex;
      list-style: none;
      margin-top:30px;
      margin-right:30px;
    }

    ul li {
      color: #F7F0F0;
      font-size: $pc_font_size;
      font-weight: bold;
      padding-left: 60px;
    }

    span {
      color: #6A6363;
    }

    span:hover {
      cursor: pointer;
    }
  }

  .header-right {
    display: flex;
    align-items: center;

    img {
      width: $mini_img_width;
      height: $mini_img_height;
      margin-top: 10px;
      border-radius: $mini_img_border_radius;
      margin-right: 20px;
    }

    input {
      margin-top: 10px;
      margin-right: 20px;
    } 
  }
}

/* ipad ver */
@media screen and (min-width: 560px) and (max-width: 959px){  
  .default-header {
    background-color: #88CE6E;
    height: 4rem;
  }

  .header-left {
    display: flex;
    justify-content: space-around;
    margin-right: 15rem;
    margin-top: 1.0rem;

    .sideNavBtn {
      size: 3rem;
    }

    ul {
      display: none;
    }
  }
  
  .header-right {
    display: none;
  }
}

/* smart phone 縦ver */
@media screen and (max-width: 480px) {
  .default-header {
    background-color: #88CE6E;
    height: 4rem;
  }

  .header-left {
    display: flex;
    justify-content: space-around;
    margin-right: 6.0rem;
    margin-top: 1rem;

    ul {
      display: none;
    }
  }
  
  .header-right {
    display: none;
  }
}

/* smart phone 横 ver*/
@media screen and (max-width: $breakpoint-sp-max-width) and (orientation: landscape){
  #default-header {
    width: 100vw;
  }
}
</style>