import SHOP_DATA from "./shop.data";

const INITIANL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIANL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
