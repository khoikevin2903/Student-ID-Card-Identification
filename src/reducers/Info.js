import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as firebase from 'firebase';

export const fetchInfo = createAsyncThunk(
    'user/fetchInfo',
    () => new Promise((a,b)=> {
        var dbRef = firebase.database().ref().child('info');
        dbRef.on('value', snap => localStorage.setItem('info', JSON.stringify(snap.val())));
    })
)

const Input = createSlice({
    name: 'Info',
    initialState: [],
    reducers: {

    },
    extraReducers: {
        [fetchInfo.fulfilled]: (state, action) => {
            
        }
    }
})

const { reducer} = Input;
export default reducer;