<template>
  <v-container>
    <v-row>
      <v-col
        v-for="product in filteredProducts"
        :key="product.id"
        cols="4">
        <product-item :data={product} />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Product from '@/store/Product'
import ProductItem from '@/components/ProductList/Item'

export default defineComponent({
  name: 'ProductList',
  props: ['searchFor'],
  components: { ProductItem },
  data () {
    return {
      filteredProducts: []
    }
  },
  created () {
    this.filteredProducts = Product.all()
  },
  watch: {
    searchFor () {
      if (this.searchFor) {
        this.filteredProducts = Product.query().search(this.searchFor, {
          keys: ['title', 'description']
        }).get()
      } else {
        this.filteredProducts = Product.all()
      }
    }
  }
})
</script>

<style scoped>

</style>
