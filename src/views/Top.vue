<template>
  <div class="main">
      <img id="matching-image" src="../assets/images/ikuta.jpg">
      <div class="self-intro">
        <p>名前 生田絵梨花 学年３年</p>
        <p>学部/学科 経済学部 国際経済学科</p>
      </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (min-width: 1024px){
  #matching-image {
    border-radius: 50%;
    width: 30rem;
    height: 30rem;
    display: block;
    margin: auto;
    padding-top: 50px;
  }

  .self-intro {
    text-align: center;
    margin-top: 30px;
    font-weight: bold;

    p {
      font-size: 1rem;
    }
  }
}

/* ipad ver */
@media screen and (min-width: 560px) and (max-width: 959px){
  #matching-image {
    border-radius: 50%;
    width: 35rem;
    height: 35rem;
    display: block;
    margin: auto;
    padding-top: 50px;
  }

  .self-intro {
    text-align: center;
    margin-top: 30px;
    font-weight: bold;
    
    p {
      font-size: 1.5rem;
    }
  }
}

/* smart phone 縦 ver*/
@media screen and (max-width: 480px) {
  #matching-image {
    border-radius: 50%;
    width: 20rem;
    height: 20rem;
    display: block;
    margin: auto;
    margin-top: 2rem;
  }

  .self-intro {
    text-align: center;
    margin-top: 4rem;
    font-weight: bold;
  }
}
</style>