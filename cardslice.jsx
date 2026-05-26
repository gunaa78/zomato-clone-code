import { createSlice } from "@reduxjs/toolkit";


const cardSlice = createSlice({
  name: "card",
  initialState: {
    cartItems: [],
    cartopen: false,
    favourates: [],
    mode :"light"
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      console.log(item?.hlo?.id,"jiii")
      console.log(state.cartItems,"oiii")
      const existingitem = state.cartItems.find(i => i.id === item.id);
      // console.log(existingitem,'jjhhj')

      if (existingitem) {
        existingitem.quantity += 1;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1, 
        });
      }
      state.cartopen = true; 
    },
    decrementQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);

      if (item) {
        item.quantity -= 1;

        if 
        (item.quantity === 0) 
        {
          state.cartItems = state.cartItems.filter(i =>i.id !== action.payload);
        }
      }
    },
//     removefromcart: (state, action) => {
//   state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
// },
    openCart:(state) => {state.cartopen = true;},
    // closeCart :(state) => {state.cartopen = false;},

findfavourate:(state,action) =>{
  const carD = action.payload
  console.log('bddj',state.hlo)

  console.log('dsa', carD)
  const Exists = state.favourates.find(i =>i.id === carD.id)
  if(Exists){
    state.favourates = state.favourates.filter(i =>i.id !== carD.id);
    console.log(state.favourates,'abd')
  }
  else{
    state.favourates.push(carD)
  }
  console.log('ddnna',Exists)


  localStorage.setItem("FAV",JSON.stringify(state.favourates))
}



    


  },
});

export const { addToCart, decrementQty,  openCart, findfavourate } = cardSlice.actions;
export default cardSlice.reducer;