<template>
      <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>PROFILE</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1 black--text">
        FIRSTNAME SECONDNAME
      </div>

      <div>Smells like you have been wasted, dude. Give me a money :)</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title @click="back">Вернуться на предыдущую страницу</v-card-title>
  </v-card>
 
</template>

<script>
export default {
    methods:{
        back: function(){
            return this.$router.replace({ name: "secure" });
        }
    }
    
}
</script>