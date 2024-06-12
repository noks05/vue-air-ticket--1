import { createStore } from "vuex";

import cart from "./cart";
import compare from "./compare";
import demo from "./demo";
import wishlist from "./wishlist";
import flight from "./flight";
import calendar from "./calendar";

export default createStore({
  modules: {
    cart,
    compare,
    demo,
    wishlist,
    flight,
    calendar
  },
});
