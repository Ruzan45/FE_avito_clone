import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSearchWhithVal = createAsyncThunk('/hystorySearch/fetchSearchWhithVal', async (val) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=ru&limit=10&q=${encodeURIComponent(val)}`); // Возвращает Promise<Response>
    const data = await response.json();//поэтому json()
    return data;

})
export const fetchSearchPosition = createAsyncThunk('/hystorySearch/fetchSearchPosition', async (pos) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${encodeURIComponent(pos.lat)}8&lon=${encodeURIComponent(pos.lng)}`);
    const data = await response.json();
    return data; //возвращаем в action.payload
})
export const fetchSearchAddressOnClose = createAsyncThunk('/searchAddressOnClose/fetchSearchAddressOnClose', async (pos) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${encodeURIComponent(pos.lat)}8&lon=${encodeURIComponent(pos.lon)}`);
    const data = await response.json();
    return data; //возвращаем в action.payload
})



const data = window.localStorage.getItem('hystoryPositionUser');
const initialState = {
    hystorySearch: {
        data: data ? JSON.parse(data) : [],
        status: 'loading'
    },
    searchResults: {
        items: [],
        status: null,
        errMsg: null
    },
    searchPosition: {
        item: [],
        status: null,
        errMsg: null
    },
    searchAddressOnClose: {
        item: [],
        status: null,
        errMsg: null
    },
};
const addToHystoryLogic = (state, action) => {
    const hystory = state.hystorySearch.data;
    const selected = action.payload;
    const saveToLC = (data) => {
        window.localStorage.setItem('hystoryPositionUser', JSON.stringify(data));
    }
    if (selected) {
        if (hystory.length > 0) {//сохраняю в редакс историю кликов
            const found = Object.values(hystory).some(item => item.display_name === selected.display_name); //есть ли в истории объектов данная позиция
            if (!found) {//если не было такой
                if (hystory.length >= 4) { //колличество истории
                    state.hystorySearch.data.unshift(selected);
                    state.hystorySearch.data.pop();
                    saveToLC(state.hystorySearch.data);
                } else {
                    state.hystorySearch.data.unshift(selected);
                    saveToLC(state.hystorySearch.data);
                }
            } else {//если такая позиция уже была
                const iRemove = hystory.findIndex(item => item.display_name === selected.display_name);//найди индекс этой позиции в истории
                if (hystory.length !== 1) {//если история не одна
                    if (selected.address) {//если в доп запросе или в payload есть данные об адресе
                        state.hystorySearch.data = [selected, ...hystory.slice(0, iRemove), ...hystory.slice(iRemove + 1)];
                        saveToLC(state.hystorySearch.data);
                    } else {
                        state.hystorySearch.data = [hystory[iRemove], ...hystory.slice(0, iRemove), ...hystory.slice(iRemove + 1)];
                        saveToLC(state.hystorySearch.data);
                    }
                } else {
                    if (selected.address) {//если в доп запросе или в payload есть данные об адресе
                        state.hystorySearch.data = [selected];//то замени свежими данными
                        saveToLC(state.hystorySearch.data);
                    }
                }
            }
        } else {
            state.hystorySearch.data.push(selected);
            saveToLC(state.hystorySearch.data);
        }
    }
}
const hystorySearchSlice = createSlice({
    name: 'hystorySearch',
    initialState,
    reducers: {
        hystoryToRedux(state, action) {
            addToHystoryLogic(state, action);
        },
        statusNull(state) {
            state.searchAddressOnClose.status = null;
        },
    },
    extraReducers: (builder) => {
        builder
            //запрос по названию
            .addCase(fetchSearchWhithVal.pending, (state) => {
                state.searchResults.items = [];
                state.searchResults.status = 'loading';
            })
            .addCase(fetchSearchWhithVal.fulfilled, (state, action) => {
                state.searchResults.items = action.payload;
                state.searchResults.status = 'loaded';
            })
            .addCase(fetchSearchWhithVal.rejected, (state, action) => {
                state.searchResults.items = [];
                state.searchResults.status = 'error';
                state.searchResults.errMsg = action.payload;
                console.log(action.payload);
            })
            //запрос по координатам
            .addCase(fetchSearchPosition.pending, (state) => {
                state.searchPosition.item = [];
                state.searchPosition.status = 'loading';
            })
            .addCase(fetchSearchPosition.fulfilled, (state, action) => {
                state.searchPosition.item = action.payload;
                state.searchPosition.status = 'loaded';
            })
            .addCase(fetchSearchPosition.rejected, (state, action) => {
                state.searchPosition.item = [];
                state.searchPosition.status = 'error';
                state.searchPosition.errMsg = action.payload;
                console.log(action.payload);
            })
            //запрос по координатам
            .addCase(fetchSearchAddressOnClose.pending, (state) => {
                state.searchAddressOnClose.item = [];
                state.searchAddressOnClose.status = 'loading';
            })
            .addCase(fetchSearchAddressOnClose.fulfilled, (state, action) => {
                state.searchAddressOnClose.item = action.payload;
                state.searchAddressOnClose.status = 'loaded';
                addToHystoryLogic(state, action);
            })
            .addCase(fetchSearchAddressOnClose.rejected, (state, action) => {
                state.searchAddressOnClose.item = [];
                state.searchAddressOnClose.status = 'error';
                state.searchAddressOnClose.errMsg = action.payload;
                console.log(action.payload);
            })

    }
})

export const { hystoryToRedux, statusNull } = hystorySearchSlice.actions;

export default hystorySearchSlice.reducer;