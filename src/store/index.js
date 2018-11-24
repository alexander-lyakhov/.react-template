import {createStore} from 'redux';
import data from './data.json';

const defaultState = {
	products: data,
	totalProducts: 100,
	totalPrice: 200
}

export default createStore((state = defaultState, action) => {
		return state;
	}
)