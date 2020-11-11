<template>
  <v-app>
    <app-bar />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import AppBar from '@/components/AppBar'
import Product from '@/store/Product'
import data from '@/data'

export default defineComponent({
  name: 'App',
  components: {
    AppBar
  },
  created () {
    Product.insert({
      data: data
    })
  }
})
</script>
