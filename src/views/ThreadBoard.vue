<template>
  <div class="wrap">
    <SideBar />
    <div class="thread-content">
      <div class="title-card">
      </div>
      <div class="search-card">
      </div>
      <div class="thread-card">
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar';
export default {
    components: {
      SideBar
    }
}
</script>

<style scoped>
  .wrap {
    display: flex;
    margin: 0 auto;
    max-width: 1080px;
  }

  .thread-content {
      flex:1;
  }
</style>