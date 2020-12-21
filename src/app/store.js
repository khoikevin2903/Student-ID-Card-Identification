import { configureStore } from '@reduxjs/toolkit';
import IDCard from './../reducers/IDCard';
import Baixe from './../reducers/Baixe';
import ShowModal from './../reducers/showModal';
import Info from './../reducers/Info'

const rootReducer = {
    IDCard: IDCard,
    Baixe: Baixe,
    ShowModal: ShowModal,
    Info: Info,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;