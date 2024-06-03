import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper } from '../api/api';

const initialState = {
  campers: [],
  filters: {
    location: '',
    details: [],
    form: '',
    transmission: '',
  },
  isLoading: false,
  error: null,
  favorites: [],
  page: 1,
  modalCamper: null,
};

const filterDuplicates = (existingCampers, newCampers) => {
  const existingIds = new Set(existingCampers.map(camper => camper._id));
  return newCampers.filter(camper => !existingIds.has(camper._id));
};

const camperSlice = createSlice({
  name: 'camper',
  initialState,
  reducers: {
    resetPage(state) {
      state.page = 1;
    },
    incrementPage(state) {
      state.page += 1;
    },
    toggleFavorite(state, action) {
      const camperId = action.payload;
      if (state.favorites.includes(camperId)) {
        state.favorites = state.favorites.filter(id => id !== camperId);
      } else {
        state.favorites.push(camperId);
      }
    },
    setFavorites(state, action) {
      state.favorites = action.payload;
    },
    openModal(state, action) {
      state.modalCamper = action.payload;
    },
    closeModal(state) {
      state.modalCamper = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamper.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.isLoading = false;
        const newCampers = action.payload;
        if (state.page === 1) {
          state.campers = newCampers;
        } else {
          const uniqueNewCampers = filterDuplicates(state.campers, newCampers);
          state.campers = [...state.campers, ...uniqueNewCampers];
        }
      })
      .addCase(fetchCamper.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  resetPage,
  incrementPage,
  toggleFavorite,
  setFavorites,
  openModal,
  closeModal,
} = camperSlice.actions;
export default camperSlice.reducer;
