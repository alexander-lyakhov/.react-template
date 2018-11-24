import React, {Component} from 'react';
import './styles.scss';

import Counter from '@/components/counter'

class Cart extends Component {

	constructor(props) {
		super(props)

		this.state = {
			amount: 0
		}

		this.decrease = this.decrease.bind(this);
		this.increase = this.increase.bind(this);
	}

	decrease() {
		console.log('decrease')
		this.setState({amount: --this.state.amount})
	}

	increase() {
		console.log('increase')
		this.setState({amount: ++this.state.amount})
	}

	render() {
	    const {cart} = this.props;
	    const {amount} = this.state;

    	return (
    		<div className="cart">
    			<div className="title">
    				{cart.name}
    			</div>

    			<div className="image">
    				<img src={cart.src} />
    				<div className="img-cover" />
    			</div>

    			<div className="price">
    				Price: {cart.price} $
    			</div>

    			<Counter value={amount} max={cart.limit} onDecrease={this.decrease} onIncrease={this.increase} />

    			<div className="price-total">
    				<span>Total:</span>
    				<span>totalPrice $</span>
    			</div>

    			<div className="reset-wrapper">
    				<button className="reset">Reset</button>
    			</div>
    		</div>
    	)
	}
}

export default Cart;
