import React, { Component } from 'react';
import { RestaurantConsumer } from '../context';


export default class RestaurantList extends Component {

    render() {
        return (
            <React.Fragment>
                <RestaurantConsumer>
                    {(value) => {
                        //console.log(value);
                        const res  = value.restaurants;
                        //console.log(typeof res)
                        let obj, restaurant;
                        for(obj in res) {
                            restaurant = res[obj].map(row => (<li className="list-group-item" key={row.name}>{row.name}</li>));
                            return(
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="text-center">Restaurants</h3>
                                    <ul className="list-group">
                                        {restaurant}
                                    </ul>
                                </div>
                            </div>
                            )
                        }
                    }}
                </RestaurantConsumer>
            </React.Fragment>
        )
    }
}
