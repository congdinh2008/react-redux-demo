import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginRequest, User } from "../../models/auth/login-request.model";
import { AuthService } from "../../services/auth.service";
import { RegisterRequest } from "../../models/auth/register-request.model";

export const login = createAsyncThunk<User, LoginRequest>(
    'auth/login',
    async (loginRequest: LoginRequest, { rejectWithValue }) => {
        try {
            const response = await AuthService.login(loginRequest);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
)

export const register = createAsyncThunk<User, RegisterRequest>(
    'auth/register',
    async (registerRequest: any, { rejectWithValue }) => {
        try {
            const response = await AuthService.register(registerRequest);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
)