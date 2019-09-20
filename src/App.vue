<template>
  <v-app>
    <Header />
    <SideNav/>
    <v-content>
      <router-view/>
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
    SideNav
  },
  data: () => ({
    //
  }),
};
</script>
