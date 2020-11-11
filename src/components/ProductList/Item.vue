<template>
  <v-card shaped>
    <v-img
      height="250"
      lazy-src="https://lh3.googleusercontent.com/aR34MxRBretppyADbJcfqIZp-LraO1ELhk00lTZw0Q7MF1ebUKZeggeQkjBuZCCmYRSYNzr8=w640-h400-e365-rj-sc0x00ffffff"
      :src="product.imageUrl"
    ></v-img>
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-text>
      <v-rating
        :value="product.rating"
        color="amber"
        dense
        half-increments
        readonly
      ></v-rating>
    </v-card-text>
    <v-card-actions>
      <v-btn
        :to="{name: 'detail', params: { id: product.id }}"
        text>
        Details
      </v-btn>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            @click="addToCart"
          >
            <v-icon>mdi-cart-arrow-down</v-icon>
          </v-btn>
        </template>
        <span>Add to shopping cart</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import ProductItemMixin from '@/mixins/ProductItem'

export default defineComponent({
  props: ['data'],
  mixins: [ProductItemMixin],
  name: 'ProductListItem',
  computed: {
    product () {
      return this.data.product
    }
  }
})
</script>

<style scoped>

</style>
