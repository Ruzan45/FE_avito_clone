import {configureStore} from '@reduxjs/toolkit';
import positionSlice from './slices/positionSlice';

const store = configureStore({
    reducer:{
        positionSlice
    }
});

export default store;