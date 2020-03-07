<template>
  <v-app>
    <Header />
    <v-content style="background-color:#D1EBD0;">
      <SideNav />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header';
import SideNav from './components/SideNav';

export default {
  name: 'App',
  components: {
    Header,
    SideNav,
  }
};
</script>
