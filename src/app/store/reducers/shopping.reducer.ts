import { ShoppingItem } from '../models/shopping-item.model';
import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';

const initialState: ShoppingItem[] = [
    {
        id: '321-432-1-42-14',
        name: 'Diet coke'
    },
    {
        id: '321dfs-1-42-14',
        name: 'Diet fanta'
    }
];

export function ShoppingReducer(
    state: ShoppingItem[] = initialState,
    action: ShoppingAction) {

        switch (action.type) {
            case ShoppingActionTypes.ADD_ITEM:
                return [...state, action.payload];
            case ShoppingActionTypes.REMOVE_ITEM:
                return state.filter(item => item.id !== action.payload);
            default:
                return state;
        }
}
