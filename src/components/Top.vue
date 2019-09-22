<template>
  <div class="main">
      <img id="matching-image" src="../assets/images/ikuta.jpg">
      <div class="self-intro">
        <p>名前 User 学年３年</p>
        <p>学部/学科 経済学部 国際経済学科</p>
      </div>
    </div>
</template>

<script>
</script>

<style scoped>
#matching-image {
  border-radius:50%;
  width:500px;
  height:500px;
  display:block;
  margin:auto;
  padding-top:50px;
}

.self-intro {
  text-align:center;
  margin-top:30px;
  font-weight:bold;
}

.self-intro  p {
  font-size:1rem;
}

.icon-button {
  padding-top:30px;
}
@media screen and (max-width: 480px) {
  #matching-image {
    border-radius:50%;
    width:300px;
    height:400px;
    display:block;
    margin:auto;
  }
}
</style>