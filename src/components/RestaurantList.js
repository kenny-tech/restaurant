import React, { Component } from 'react';
import { RestaurantConsumer } from '../context';


export default class RestaurantList extends Component {

    render() {
        return (
            <React.Fragment>
                <RestaurantConsumer>
                    {value => {
                        // return (<div>
                                
                        //     </div>
                        // )
                        console.log(value);
                    }}
                </RestaurantConsumer>
            </React.Fragment>
        )
    }
}
