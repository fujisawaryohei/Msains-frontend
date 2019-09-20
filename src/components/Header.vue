<template>
  <header class="default-header">
      <div class="header-left">
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
</script>


<style scoped>  
.top-page-header {
  display: flex;
  justify-content: space-between;
  background-color: #88CE6E;
}

.top-page-header h2 {
  color:#6A6363;
  margin-top: 20px;
  margin-left: 30px;
}

.top-page-header ul {
  display: flex;
  align-items: center;
  list-style: none;
  margin-top: 30px;
  margin-right: 30px;
}

.top-page-header ul li {
  padding-left:10px;
}

.top-page-header a {
  color: white;
}


.default-header {
  display: flex;
  justify-content: space-between;
  background-color: #88CE6E;
}

.header-left h2 {
  color:#6A6363;
  margin-top: 20px;
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
  padding-left: 60px;
}

.header-left a {
  color: #6A6363;
}

.header-right {
  display: flex;
  align-items: center;
}

.header-right img{
  width: 60px;
  height: 60px;
  border-radius: 90%;
  margin-top: 20px;
  margin-right: 20px;
}

.header-right input {
  margin-top: 20px;
  margin-right: 20px;
}

</style>>