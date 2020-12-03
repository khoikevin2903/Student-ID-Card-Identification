import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as firebase from 'firebase';

export const fetchIDCard = createAsyncThunk(
    'user/fetchDataUser',
    (endpoint) => new Promise((a, b) => {
        var dbRef = firebase.database().ref().child(endpoint);
        dbRef.on('value', snap => a(snap.val()));
    })
)

const IDCard = createSlice({
    name: 'infoUser',
    initialState: {},
    reducers: {
        onSaveToCard: (state, action) => {
            var today = new Date();
            var date = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
            const newData = { ...action.payload, timeIn: date };
            var dataRef = firebase.database().ref('/baixe').push();
            dataRef.set({
                ...newData
            });
        },
    },
    extraReducers: {
        [fetchIDCard.fulfilled]: (state, action) => {
            return action.payload;
        }
    }

})

const { reducer, actions } = IDCard;
export const { onSaveToCard } = actions;
export default reducer;