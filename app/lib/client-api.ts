"use client";

import axios from "axios";
import { firebaseApp } from "./firebase";
import { AuthService } from "./auth";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export const authService = new AuthService(firebaseApp, axiosInstance);
