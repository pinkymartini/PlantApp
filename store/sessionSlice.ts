import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SessionState {
  hasProPlan: boolean;
  isLoading: boolean;
  hasOnboarded: boolean;
}

const initialState: SessionState = {
  hasProPlan: false,
  isLoading: true,
  hasOnboarded:false
};

export const loadProPlanStatus = createAsyncThunk(
  'session/loadProPlanStatus',
  async () => {
    const hasProPlan = await AsyncStorage.getItem('hasProPlan');
    return hasProPlan === 'true';
  }
);

export const updateProPlanStatus = createAsyncThunk(
  'session/updateProPlanStatus',
  async (hasProPlan: boolean) => {
    await AsyncStorage.setItem('hasProPlan', hasProPlan.toString());
    return hasProPlan;
  }
);

export const loadOnboardedStatus = createAsyncThunk(
  'session/loadOnboardedStatus',
  async () => {
    const hasCompletedOnboarding = await AsyncStorage.getItem('hasCompletedOnboarding');
    return hasCompletedOnboarding === 'true';
  }
);


export const updateOnboardedStatus = createAsyncThunk(
  'session/updateOnboardedStatus',
  async (hasCompletedOnboarding: boolean) => {
    await AsyncStorage.setItem('hasCompletedOnboarding', hasCompletedOnboarding.toString());
    return hasCompletedOnboarding;
  }
);

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setProPlan: (state, action: PayloadAction<boolean>) => {
      state.hasProPlan = action.payload;
    },
    setCompletedOnBoarding: (state, action: PayloadAction<boolean>) => {
      state.hasOnboarded = action.payload;
    },
  },
  extraReducers: (builder) => {
  builder
    
    .addCase(loadProPlanStatus.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(loadProPlanStatus.fulfilled, (state, action) => {
      state.hasProPlan = action.payload;
      state.isLoading = false;
    })
    .addCase(loadProPlanStatus.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(updateProPlanStatus.fulfilled, (state, action) => {
      state.hasProPlan = action.payload;
    })
    
    .addCase(loadOnboardedStatus.fulfilled, (state, action) => {
      state.hasOnboarded = action.payload;
    })
    .addCase(updateOnboardedStatus.fulfilled, (state, action) => {
      state.hasOnboarded = action.payload;
    });
}


});

export const { setProPlan, setCompletedOnBoarding } = sessionSlice.actions;
export default sessionSlice.reducer;


