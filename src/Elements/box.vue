<template>
        <v-card
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{status}}</div>
              <v-list-item-title class="headline mb-1" style="overflow:visible" @click="rep">{{fullName}}</v-list-item-title>
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
            <v-btn text @click="overlay = !overlay">Занять</v-btn>
            <v-btn text>опрокинуть</v-btn>
          </v-card-actions>

          <v-overlay :value=overlay>
            <v-btn
              icon
              @click="overlay = false"
            >
              <v-icon>mdi-close</v-icon>          
            </v-btn>
            <v-stepper v-model="e6" vertical>
                <v-stepper-step :complete="e6 > 1" step="1">
                  Условия
                  <small>Договор о займе</small>
                </v-stepper-step>

                <v-stepper-content step="1">
                  <v-card color="grey lighten-1" class="mb-12" height="200px" style="color:black">Вы принимаете условия, которые состоят в том, 
                    что ответственность лежит исключительно меду заемщиком и лицом, занимающим средства.
                    Бла бал аваываываыв
                    ываывадывтадываыва
                    ывдлатжавжапжыкдп
                    кдптдкпужкдпукукждлп 
                    кпудлкпдукодпук укдпоук укпо укщдпд ук подук лпуокд лпуок пдулокпдлу к
                  </v-card>
                  
                  <v-btn color="primary" @click="e6 = 2; success = true; error=false">Continue</v-btn>
                  <v-btn text @click="success=false;error=true;overlay=false">Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this app</v-stepper-step>

                <v-stepper-content step="2">
                  <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                  <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                  <v-btn text @click="e6--">Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad unit</v-stepper-step>

                <v-stepper-content step="3">
                  <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                  <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
                  <v-btn text @click="e6--">Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-step step="4">View setup instructions</v-stepper-step>
                <v-stepper-content step="4">
                  <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                  <v-btn color="primary" @click="alert=!alert">Continue</v-btn>
                  <v-btn text @click="e6--">Cancel</v-btn>
                    <v-alert
                      :value="alert"
                      color="pink"
                      dark
                      border="top"
                      icon="mdi-home"
                      transition="scale-transition"
                      style="margin-top:15px"
                    >
                    Reroute to GIGABEATS CHAT
                    </v-alert>                  
                </v-stepper-content>
              </v-stepper>            
          </v-overlay>
        </v-card>    
</template>

<style scoped>
.v-list-item{
  padding:0 10px;
}


.v-stepper{
  max-width: 800px;
  margin: auto;
}
</style>

<script>
export default {
    name:'box',
    props:['id','status','fullName','description','sum'],
    data(){
      return{overlay:false,e6: 1,alert:false}
    },
    methods:{
      rep: function(){
        return this.$router.replace({ name: "profile" });
      }
    }
}
</script>