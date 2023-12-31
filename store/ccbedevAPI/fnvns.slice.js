import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_fnvn_list = createAsyncThunk(
  "fnvns/api_v1_fnvn_list",
  async payload => {
    const response = await apiService.api_v1_fnvn_list(payload)
    return response.data
  }
)
export const api_v1_fnvn_create = createAsyncThunk(
  "fnvns/api_v1_fnvn_create",
  async payload => {
    const response = await apiService.api_v1_fnvn_create(payload)
    return response.data
  }
)
export const api_v1_fnvn_retrieve = createAsyncThunk(
  "fnvns/api_v1_fnvn_retrieve",
  async payload => {
    const response = await apiService.api_v1_fnvn_retrieve(payload)
    return response.data
  }
)
export const api_v1_fnvn_update = createAsyncThunk(
  "fnvns/api_v1_fnvn_update",
  async payload => {
    const response = await apiService.api_v1_fnvn_update(payload)
    return response.data
  }
)
export const api_v1_fnvn_partial_update = createAsyncThunk(
  "fnvns/api_v1_fnvn_partial_update",
  async payload => {
    const response = await apiService.api_v1_fnvn_partial_update(payload)
    return response.data
  }
)
export const api_v1_fnvn_destroy = createAsyncThunk(
  "fnvns/api_v1_fnvn_destroy",
  async payload => {
    const response = await apiService.api_v1_fnvn_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const fnvnsSlice = createSlice({
  name: "fnvns",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_fnvn_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fnvn_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_fnvn_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fnvn_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fnvn_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_fnvn_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fnvn_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fnvn_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_fnvn_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fnvn_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fnvn_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_fnvn_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fnvn_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fnvn_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_fnvn_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fnvn_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fnvn_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_fnvn_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_fnvn_list,
  api_v1_fnvn_create,
  api_v1_fnvn_retrieve,
  api_v1_fnvn_update,
  api_v1_fnvn_partial_update,
  api_v1_fnvn_destroy,
  slice: fnvnsSlice
}
