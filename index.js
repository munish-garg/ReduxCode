//Three main pillars of Redux(State Management Library):-
//Action, Reducer and Store
const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE';
//Action
const buyCake = () =>{
    return {
        type: BUY_CAKE
    }
}

//Initial State
const initialState = {
    numberOfCakes: 10
}

//Reducer
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            numberOfCakes: state.numberOfCakes - 1
        }
        default: return state
    }
}

const store = createStore(reducer);
console.log('Initial State is: ', store.getState());

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
const unsubscribe = store.subscribe(()=>console.log('Current State is: ', store.getState()))
// const unsubscribe = store.subscribe(()=>console.log('Current State is: ', store.getState()))
unsubscribe();
