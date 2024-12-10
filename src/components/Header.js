'use client';

import React from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { Email, Phone, ShoppingCart, Facebook, LinkedIn, Instagram, YouTube } from "@mui/icons-material";

const Header = () => {
    return (
        <Box sx={{ position: "relative", zIndex: 1 }}>
            {/* Upper Row */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#00b8d4",
                    color: "#fff",
                    padding: "10px 20px",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {/* Left Section: Email and Hours */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Email fontSize="small" />
                        <Typography variant="body2">billing@vanderengines.com</Typography>
                    </Box>
                    <Typography variant="body2">Sun - Fri (08AM - 10PM)</Typography>
                </Box>

                {/* Right Section: Social Icons */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton size="small" sx={{ color: "#fff" }}>
                        <Facebook />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "#fff" }}>
                        <LinkedIn />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "#fff" }}>
                        <Instagram />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "#fff" }}>
                        <YouTube />
                    </IconButton>
                </Box>
            </Box>

            {/* Lower Row */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    color: "#000",
                    padding: "20px 20px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    marginTop: "-20px", // Overlapping effect
                    borderRadius: "0 0 10px 10px",
                }}
            >
                {/* Left Section: Logo */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                        component="img"
                        src="/logo.jpg"
                        alt="Vander Engines"
                        sx={{ height: 50, mr: 2 }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Vander Engines
                    </Typography>
                </Box>

                {/* Center Section: Navigation */}
                <Box sx={{ display: "flex", gap: 3 }}>
                    <Button color="inherit" sx={{ color: "#000" }}>
                        Home
                    </Button>
                    <Button color="inherit" sx={{ color: "#000" }}>
                        Engines
                    </Button>
                    <Button color="inherit" sx={{ color: "#000" }}>
                        Transmissions
                    </Button>
                    <Button color="inherit" sx={{ color: "#000" }}>
                        About Us
                    </Button>
                    <Button color="inherit" sx={{ color: "#000" }}>
                        Blogs
                    </Button>
                    <Button color="inherit" sx={{ color: "#000" }}>
                        Financing
                    </Button>
                    <Button color="inherit" sx={{ color: "#000" }}>
                        Contact
                    </Button>
                </Box>

                {/* Right Section: Call and Cart */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#00b8d4",
                            color: "#fff",
                            textTransform: "none",
                        }}
                    >
                        Free Consultation
                    </Button>
                    <IconButton size="large" sx={{ color: "#000" }}>
                        <ShoppingCart />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
