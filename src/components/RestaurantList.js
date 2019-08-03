import React from 'react';
import RestaurantConsumer from '../context';

const RestaurantList = () => (
    <RestaurantConsumer>
        {value => console.log(value)}
    </RestaurantConsumer>
);

export default RestaurantList;