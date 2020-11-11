import Vue from 'vue'
import Vuex from 'vuex'
import VuexORMSearch from '@vuex-orm/plugin-search'
import VuexORM from '@vuex-orm/core'

import Product from '@/store/Product'
import Cart from '@/store/Cart'

Vue.use(Vuex)
VuexORM.use(VuexORMSearch, {
  caseSensitive: false,
  threshold: 0.3
})

const database = new VuexORM.Database()

database.register(Product)
database.register(Cart)

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

export default store
