import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductData} from "../assets/data/products";

interface CartItem {
	id: string;
	productName: string;
	imgUrl: string;
	price: number;
	quantity: number;
	totalPrice: number;
}

interface CartItemsData {
	cartItems: CartItem[],
	totalAmount: number,
	totalQuantity: number,
}

const initialState: CartItemsData = {
	cartItems: [],
	totalAmount: 0,
	totalQuantity: 0,
}

const cartSlice = createSlice({
	name: '@@cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<ProductData>) => {
			const newItem = action.payload
			const existingItem = state.cartItems.find((item) => item.id === newItem.id);

			state.totalQuantity++

			if (!existingItem) {
				state.cartItems.push({
					id: newItem.id,
					productName: newItem.productName,
					imgUrl: newItem.imgUrl,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
				})
			} else {
				existingItem.quantity++
				existingItem.totalPrice += newItem.price;
			}

			state.totalAmount = state.cartItems
				.reduce((total, item) => total + item.price * item.quantity, 0);
			console.log(state.totalQuantity)
		},
	}
})

export const {addItem} = cartSlice.actions
export default cartSlice.reducer