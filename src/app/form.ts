import {createSlice } from "@reduxjs/toolkit";


export interface FormState {
    animalName?: string;
    taxonomieName?: string;
    date?: string;
}

const initialState: FormState = {
    animalName: undefined,
    taxonomieName: undefined,
    date: undefined
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setAnimalName(state, action) {
            state.animalName = action.payload;
        },
    },
});

export const {setAnimalName} = formSlice.actions;

export default formSlice.reducer;