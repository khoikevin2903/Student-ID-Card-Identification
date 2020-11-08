import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as firebase from 'firebase';



export const fetchIDCard = createAsyncThunk(
    'user/fetchDataUser',
    (endpoint) => new Promise((a,b)=> {
        var dbRef = firebase.database().ref().child(endpoint);
		dbRef.on('value', snap => a(snap.val()));
    })
)

const IDCard = createSlice({
    name: 'infoUser',
    initialState: {},
    reducers: {
        
    },
    extraReducers : {
        [fetchIDCard.fulfilled] : (state, action) => {
            return action.payload;
        }
    }
    
})

const { reducer, actions } = IDCard;
export const { AddToCart} = actions;
export default reducer; 