import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_cvvrt_list = createAsyncThunk(
  "cvvrts/api_v1_cvvrt_list",
  async payload => {
    const response = await apiService.api_v1_cvvrt_list(payload)
    return response.data
  }
)
export const api_v1_cvvrt_create = createAsyncThunk(
  "cvvrts/api_v1_cvvrt_create",
  async payload => {
    const response = await apiService.api_v1_cvvrt_create(payload)
    return response.data
  }
)
export const api_v1_cvvrt_retrieve = createAsyncThunk(
  "cvvrts/api_v1_cvvrt_retrieve",
  async payload => {
    const response = await apiService.api_v1_cvvrt_retrieve(payload)
    return response.data
  }
)
export const api_v1_cvvrt_update = createAsyncThunk(
  "cvvrts/api_v1_cvvrt_update",
  async payload => {
    const response = await apiService.api_v1_cvvrt_update(payload)
    return response.data
  }
)
export const api_v1_cvvrt_partial_update = createAsyncThunk(
  "cvvrts/api_v1_cvvrt_partial_update",
  async payload => {
    const response = await apiService.api_v1_cvvrt_partial_update(payload)
    return response.data
  }
)
export const api_v1_cvvrt_destroy = createAsyncThunk(
  "cvvrts/api_v1_cvvrt_destroy",
  async payload => {
    const response = await apiService.api_v1_cvvrt_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cvvrtsSlice = createSlice({
  name: "cvvrts",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_cvvrt_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvvrt_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_cvvrt_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvvrt_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvvrt_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_cvvrt_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvvrt_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvvrt_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_cvvrt_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvvrt_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvvrt_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cvvrt_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvvrt_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvvrt_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cvvrt_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvvrt_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvvrt_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cvvrt_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_cvvrt_list,
  api_v1_cvvrt_create,
  api_v1_cvvrt_retrieve,
  api_v1_cvvrt_update,
  api_v1_cvvrt_partial_update,
  api_v1_cvvrt_destroy,
  slice: cvvrtsSlice
}
