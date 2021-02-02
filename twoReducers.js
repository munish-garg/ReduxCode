const redux = require('redux');
const createStore = redux.createStore
const combineReducer = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const Cake = {
    noOfCake: 20
}

const IceCream = {
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


const Cakereducer = (state = Cake, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            noOfCake: state.noOfCake - 1,
            // noOfIceCreams: state.noOfIceCreams
        }
        default: return state
    }
}

const IceCreamreducer = (state = IceCream, action) =>{
    switch(action.type){
        case BUY_ICECREAM: return{
            // noOfCake: state.noOfCake,
            noOfIceCreams: state.noOfIceCreams - 1
        }
        default: return state
    }
}

const combined = combineReducer({
    caketype: Cakereducer,
    IceCreamtype: IceCreamreducer
})

const Store = createStore(combined);
const unsubscribe = Store.subscribe(()=>console.log('Current State is: ', Store.getState()));
Store.dispatch(buyCake());
Store.dispatch(buyIceCream());
Store.dispatch(buyCake());
Store.dispatch(buyIceCream());
unsubscribe();