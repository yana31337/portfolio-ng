import { combineReducers, legacy_createStore } from "redux";
import sCardReducer from "./sCard-reducer";
import mCardReducer from "./mCard-reducer";
import lCardReducer from "./lCard-reducer";

let reducers = combineReducers ({
    sCard: sCardReducer, 
    mCard: mCardReducer,
    lCard: lCardReducer
})

let store = legacy_createStore (reducers)

export default store;

// import movie1 from './assets/png/movie_1.jpg';
// import movie2 from './assets/png/movie_2.jpg'

// // interface IStore {
// //     movies: []
// //         id: number,
// //         name: string,
// //         img: string
    
// // }

// // let store=  {
// //     movies:  IStore  = [
// //         { id: 1, name: 'one', img: movie1 },
// //         { id: 2, name: 'one', img: movie2 }
// //     ]
// // }

// // export default store;
