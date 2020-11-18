import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as firebase from 'firebase';

export const fetchBaixe = createAsyncThunk(
    'user/fetchBaixe',
    (endpoint) => new Promise((a, b) => {
        var dbRef = firebase.database().ref().child(endpoint);
        dbRef.on('value', snap => a(snap.val()));
    })
)

const Input = createSlice({
    name: 'Baixe',
    initialState: [],
    reducers: {

    },
    extraReducers: {
        [fetchBaixe.fulfilled]: (state, action) => {
            
        }
    }
})

const { reducer} = Input;
export default reducer;