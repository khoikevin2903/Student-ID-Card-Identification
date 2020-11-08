import { configureStore } from '@reduxjs/toolkit';
import IDCard from './../reducers/IDCard';

const rootReducer = {
    IDCard: IDCard,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;