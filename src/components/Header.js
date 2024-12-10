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
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#00b8d4",
                    color: "#fff",
                    padding: { xs: "8px 12px", sm: "10px 20px" },
                }}
            >
                {/* Left Section */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: { xs: 1, sm: 3 },
                        textAlign: { xs: "center", sm: "left" },
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Email fontSize="small" />
                        <Typography variant="body2">billing@vanderengines.com</Typography>
                    </Box>
                    <Typography variant="body2">Sun - Fri (08AM - 10PM)</Typography>
                </Box>

                {/* Right Section */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        marginTop: { xs: 2, sm: 0 },
                    }}
                >
                    {[Facebook, LinkedIn, Instagram, YouTube].map((Icon, index) => (
                        <IconButton key={index} size="small" sx={{ color: "#fff" }}>
                            <Icon />
                        </IconButton>
                    ))}
                </Box>
            </Box>

            {/* Lower Row */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    color: "#000",
                    padding: { xs: "12px 15px", sm: "20px" },
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    marginTop: "-20px",
                    borderRadius: "0 0 10px 10px",
                }}
            >
                {/* Logo */}
                <Box sx={{ display: "flex", alignItems: "center", mb: { xs: 2, md: 0 } }}>
                    <Box
                        component="img"
                        src="/logo.jpg"
                        alt="Vander Engines"
                        sx={{ height: { xs: 40, sm: 50 }, mr: 2 }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Vander Engines
                    </Typography>
                </Box>

                {/* Navigation */}
                <Box
                    sx={{
                        display: "flex",
                        gap: { xs: 2, md: 3 },
                        flexWrap: "wrap",
                        justifyContent: { xs: "center", md: "flex-start" },
                    }}
                >
                    {["Home", "Engines", "Transmissions", "About Us", "Blogs", "Financing", "Contact"].map(
                        (text) => (
                            <Button key={text} color="inherit" sx={{ color: "#000", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                                {text}
                            </Button>
                        )
                    )}
                </Box>

                {/* Call-to-Action */}
                <Box sx={{ display: "flex", gap: 2, mt: { xs: 2, md: 0 }, flexWrap: "wrap", justifyContent: "center" }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#00b8d4",
                            color: "#fff",
                            textTransform: "none",
                            fontSize: { xs: "0.8rem", sm: "1rem" },
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
