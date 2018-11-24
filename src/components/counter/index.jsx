import React, {Component} from 'react';
import './styles.scss';

const Counter = (props) => {
    const {value, onDecrease, onIncrease} = props;

    console.log(value)

	return (
    	<div className="counter">
    		<button className="decrease" onClick={onDecrease} />
    		<div className="value">{value}</div>
    		<button className="increase" onClick={onIncrease} />
    	</div>
	)
}

export default Counter;