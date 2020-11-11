<template>
  <v-container v-if="product !== null && typeof product === 'object'">
    <v-toolbar dense flat>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            small
            :to="{name: 'products'}"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </template>
        <span>Back to products</span>
      </v-tooltip>
      <v-toolbar-title class="ml-3">{{ product.title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-rating
        class="mr-2"
        :value="product.rating"
        color="amber"
        dense
        half-increments
        readonly
      ></v-rating>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="success"
            v-bind="attrs"
            v-on="on"
            @click="addToCart"
          >
            <v-icon>mdi-cart-arrow-down</v-icon>
          </v-btn>
        </template>
        <span>Add to shopping cart</span>
      </v-tooltip>
    </v-toolbar>
    <v-row>
      <v-col
        cols="6"
        md="4">
        <v-img
          class="elevation-2 rounded"
          height="250"
          :lazy-src="product.imageUrl"
          :src="product.imageUrl"
        ></v-img>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="8">
        <h4>Product Description</h4>
        <p>{{product.description}}</p>
        <h4>${{product.price}}</h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Product from '@/store/Product'
import ProductItemMixin from '@/mixins/ProductItem'

export default defineComponent({
  props: ['id'],
  mixins: [ProductItemMixin],
  name: 'Detail',
  components: {},
  data () {
    return {
      product: null
    }
  },
  created () {
    this.product = Product.find(this.id)
  }
})
</script>
