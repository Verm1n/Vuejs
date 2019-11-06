<template>
  <v-app>

    <div>
      <v-app-bar
            color="deep accent-4"
            dark
          >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Loans page</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu
              left
              bottom
            >
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  @click="() => {}"
                >
                  <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
      </v-app-bar>


      <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>


      <v-content>
            <v-carousel
            cycle
            continuous
            interval = 5000
            >
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                >
                  <v-sheet
                    :color="colors[i]"
                    height="100%"
                  >
                    <v-row
                      class="fill-height"
                      align="center"
                      justify="center"
                    >
                      <div class="display-3">{{ slides[i] }}</div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel> 
             <v-parallax
              dark
              height="100%"
             >
                <div style="display:flex;flex-direction:row;jusify-content:space-between;">
                  <box style="margin-top:40px" v-for="i in orders" 
                  :key="i.id"
                  :status=i.status
                  :fullName=i.fullName
                  :description=i.description
                  :sum=i.sum   
                  ></box>
                </div>
             </v-parallax>
      </v-content>
    </div>
    
  </v-app>  
</template>

<script>
import box from '../Elements/box'

    export default {
        name: 'secure',
        data() {
            return {
                drawer: null,
                items: [
                  {title:'Home',vIcon:'mdi -dashboard'},
                  {title:'About',icon:'mdi -question_answer'}
                ],
                colors: [
                  '#0059ff',
                  '#0059ff',
                  '#0059ff',
                  '#0059ff',
                  '#0059ff',
                ],
                slides: [
                  'Чувак',
                  'Не',
                  'Это',
                  'Надо',
                  'Видеть...',
                ],
                orders: 
                  [{
                    id:0,
                    status:'Online',
                    fullName:'Игорь',
                    description:'Мне бы в биткоин вложиться',
                    sum:1000
                  },
                  { 
                    id:1,
                    status:'Online',
                    fullName:'Константин',
                    description:'Чуваки...Не...Это надо видеть...',
                    sum:3000
                  },
                  { 
                    id:2,
                    status:'Online',
                    fullName:'Антон',
                    description:'На креветки с круасанами',
                    sum:10
                  },
                  {
                    id:3,
                    status:'Online',
                    fullName:'Денис',
                    description:'Собираю донаты на чат',
                    sum:14000
                  }
                  ]
                
            }
        },
        components:{
          'box':box
        }
    }
</script>

<style>

</style>