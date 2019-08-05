import React, { Component } from 'react';
import restaurantLists from './sample.json';

const RestaurantContext = React.createContext();

class RestaurantProvider extends Component {
    state =  {
        restaurants: []
    }

    componentDidMount() {
        this.setState(() => {
            return { restaurants: restaurantLists }
        })
    }

    render() {
        return (
                <RestaurantContext.Provider value={{
                    ...this.state
                }}>
                    {this.props.children}
                </RestaurantContext.Provider>
            );
    }
}

const RestaurantConsumer = RestaurantContext.Consumer;

export { RestaurantProvider, RestaurantConsumer };