<template>
        <v-card
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{status}}</div>
              <v-list-item-title class="headline mb-1" style="overflow:visible">{{fullName}}</v-list-item-title>
              <v-list-item-subtitle>{{description}}</v-list-item-subtitle>
            </v-list-item-content>
            <div>
            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
            <div style="font-size:14px">{{sum}} рублей</div>
            </div>
          </v-list-item>

          <v-card-actions>
            <v-btn text>Занять</v-btn>
            <v-btn text>опрокинуть</v-btn>
          </v-card-actions>
        </v-card>    
</template>
<style scoped>
.v-list-item{
  padding:0 10px;
}
</style>
<script>
export default {
    name:'box',
    props:['id','status','fullName','description','sum']
    

}
</script>