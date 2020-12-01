import { configureStore } from '@reduxjs/toolkit';
import IDCard from './../reducers/IDCard';
import Baixe from './../reducers/Baixe';
import ShowModal from './../reducers/showModal';

const rootReducer = {
    IDCard: IDCard,
    Baixe: Baixe,
    ShowModal: ShowModal,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;