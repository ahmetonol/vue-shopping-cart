<template>
  <v-container>
    <v-toolbar dense flat>
      <v-toolbar-title>Products</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        dense
        flat
        hide-details
        rounded
        v-model="q"
        placeholder="Search for products..."
        solo-inverted
      ></v-text-field>
    </v-toolbar>
    <product-list :searchFor="q"/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from '@vue/composition-api'
import ProductList from '@/components/ProductList/List'

export default defineComponent({
  name: 'List',
  data () {
    return {
      q: ''
    }
  },
  components: {
    ProductList
  }
})
</script>
