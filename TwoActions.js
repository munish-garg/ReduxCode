const redux = require('redux');
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const initialState = {
    noOfCake: 20,
    noOfIceCreams: 15
}

const buyCake = () =>{
    return {
        type: BUY_CAKE
    }
}

const buyIceCream = () =>{
    return {
        type: BUY_ICECREAM
    }
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            noOfCake: state.noOfCake - 1,
            noOfIceCreams: state.noOfIceCreams
        }
        case BUY_ICECREAM: return{
            noOfCake: state.noOfCake,
            noOfIceCreams: state.noOfIceCreams - 1
        }
        default: return state
    }
}

const Store = createStore(reducer);
const unsubscribe = Store.subscribe(()=>console.log('Current State is: ', Store.getState()));
Store.dispatch(buyCake());
Store.dispatch(buyIceCream());
Store.dispatch(buyCake());
Store.dispatch(buyIceCream());
unsubscribe();