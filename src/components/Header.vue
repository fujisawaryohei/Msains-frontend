<template>
  <header class="default-header">
      <div class="header-left">
        <v-app-bar-nav-icon class="sideNavBtn" color="black" dark @click.stop="sideNavTrigger"></v-app-bar-nav-icon>
        <h2>Msains</h2>
        <ul>
          <li><a href="">学内掲示板</a></li>
          <li><a href="">TIMELINE</a></li>
          <li><a href="">時間割検索</a></li>
          <li><a href="">通知</a></li>
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
      drawer: false
    }
  },
  methods: {
    sideNavTrigger(){
      this.$store.dispatch("sideNavAction");
    }
  }
}
</script>


<style scoped>  
.default-header {
  display: flex;
  justify-content: space-between;
  background-color: #88CE6E;
}

.default-header .sideNavBtn {
  display: none;
}

.header-left h2 {
  color:#6A6363;
  margin-top: 15px;
  margin-left: 30px;
}

.header-left {
  display :flex;
  align-items: center;
}

.header-left ul {
  display: flex;
  list-style: none;
  margin-top:30px;
  margin-right:30px;
}

.header-left ul li {
  color: #F7F0F0;
  font-weight: bold;
  padding-left: 60px;
}

.header-left a {
  color: #6A6363;
}

.header-right {
  display: flex;
  align-items: center;
}

.header-right img {
  width: 60px;
  height: 60px;
  margin-top: 10px;
  border-radius: 90%;
  margin-right: 20px;
}

.header-right input {
  margin-top:10px;
  margin-right: 20px;
}

/* smart phone responsive */
@media screen and (max-width: 479px) {
  .header-left > ul {
    display:none;
  }
  .header-right {
    display:none;
  }
  .default-header .sideNavBtn {
    display: block;
    margin-left: 10px;
  }
  .header-left > h2 {
    text-align:center;
  }
}

/* ipad responsive */
@media screen and(max-width: 767px){

}
</style>>