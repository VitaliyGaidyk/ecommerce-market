import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

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

interface CartItemPayload {
	id: string,
	productName: string,
	imgUrl: string,
	price: number,
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
		addItem: (state, action: PayloadAction<CartItemPayload>) => {
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
		},
		deleteItem: (state, action) => {
			const id = action.payload
			const existingItem = state.cartItems.find((item) => item.id === id)

			if (existingItem) {
				state.cartItems = state.cartItems.filter((item) => item.id !== id)
				state.totalQuantity = state.totalQuantity - existingItem.quantity
			}

			state.totalAmount = state.cartItems
				.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0)
		}
	}

})

export const cartItem = (state: RootState): CartItem[] => state.cart.cartItems
export const totalAmount = (state: RootState) => state.cart.totalAmount
export const totalItem = (state: RootState): number => state.cart.totalQuantity

export const {addItem, deleteItem} = cartSlice.actions
export default cartSlice.reducer