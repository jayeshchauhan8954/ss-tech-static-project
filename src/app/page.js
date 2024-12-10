"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  InputAdornment,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

// Custom MUI Theme
const theme = createTheme({
  palette: {
    primary: { main: "#00b8d4" },
    secondary: { main: "#ff4081" },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  )
}

export default Home
