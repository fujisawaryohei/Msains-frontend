<template>
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="../assets/images/ikuta.jpg" style="margin-top:1rem;"></v-img>
      </v-list-item-avatar>

      <v-list-item-content style="display:flex;">
        <v-list-item-title style="font-size:1rem; margin-top:1rem;">生田絵梨花</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>

    <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title style="font-size:1rem; margin-bottom:2rem;">{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data(){
        return {
           items: [
               {"name":"学内掲示板"},
               {"name":"TIMELINE"},
               {"name":"時間割検索"},
               {"name":"通知"}
           ]
        }
    }
  }
</script>

<style scoped>
  
</style>