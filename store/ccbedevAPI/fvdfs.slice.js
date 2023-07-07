import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_fvdf_list = createAsyncThunk(
  "fvdfs/api_v1_fvdf_list",
  async payload => {
    const response = await apiService.api_v1_fvdf_list(payload)
    return response.data
  }
)
export const api_v1_fvdf_create = createAsyncThunk(
  "fvdfs/api_v1_fvdf_create",
  async payload => {
    const response = await apiService.api_v1_fvdf_create(payload)
    return response.data
  }
)
export const api_v1_fvdf_retrieve = createAsyncThunk(
  "fvdfs/api_v1_fvdf_retrieve",
  async payload => {
    const response = await apiService.api_v1_fvdf_retrieve(payload)
    return response.data
  }
)
export const api_v1_fvdf_update = createAsyncThunk(
  "fvdfs/api_v1_fvdf_update",
  async payload => {
    const response = await apiService.api_v1_fvdf_update(payload)
    return response.data
  }
)
export const api_v1_fvdf_partial_update = createAsyncThunk(
  "fvdfs/api_v1_fvdf_partial_update",
  async payload => {
    const response = await apiService.api_v1_fvdf_partial_update(payload)
    return response.data
  }
)
export const api_v1_fvdf_destroy = createAsyncThunk(
  "fvdfs/api_v1_fvdf_destroy",
  async payload => {
    const response = await apiService.api_v1_fvdf_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const fvdfsSlice = createSlice({
  name: "fvdfs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_fvdf_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fvdf_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_fvdf_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fvdf_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fvdf_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_fvdf_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fvdf_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fvdf_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_fvdf_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fvdf_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fvdf_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_fvdf_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fvdf_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fvdf_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_fvdf_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fvdf_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fvdf_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_fvdf_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_fvdf_list,
  api_v1_fvdf_create,
  api_v1_fvdf_retrieve,
  api_v1_fvdf_update,
  api_v1_fvdf_partial_update,
  api_v1_fvdf_destroy,
  slice: fvdfsSlice
}
