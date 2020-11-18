import { configureStore } from '@reduxjs/toolkit';
import IDCard from './../reducers/IDCard';
import Baixe from './../reducers/Baixe';

const rootReducer = {
    IDCard: IDCard,
    Baixe: Baixe
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;