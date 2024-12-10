'use client'

import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const HeroSection = () => {
    return (
        <Box
            sx={{
                position: "relative",
                height: { xs: "500px", sm: "700px" },
                backgroundImage: "url('/maruti-suzuki-baleno-car.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
            }}
        >
            {/* Finance Options */}
            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: "2rem", sm: "4rem", lg: "5rem" },
                    fontWeight: "bold",
                    color: "transparent",
                    textAlign: "center",
                    WebkitTextStroke: { xs: "1px #00b8d4", sm: "2px #00b8d4" },
                    WebkitTextFillColor: "transparent",
                }}
            >
                Finance Option Available
            </Typography>

            {/* Call Now Button */}
            <Button
                variant="contained"
                sx={{
                    position: "absolute",
                    top: { xs: "5%", sm: "3%" },
                    right: { xs: "5%", sm: "10%" },
                    backgroundColor: "#00b8d4",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: { xs: "8px 16px", sm: "12px 24px" },
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    zIndex: 1
                }}
            >
                Call Now
            </Button>

            {/* Form in Bottom Left */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: { xs: "5%", sm: "10%" },
                    left: { xs: "5%", sm: "10%" },
                    backgroundColor: "#fff",
                    border: "2px dotted #00b8d4",
                    borderRadius: "10px",
                    padding: { xs: "15px", sm: "25px" },
                    width: { xs: "300px", sm: "400px", md: "500px" },
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        color: "#000",
                        fontWeight: "bold",
                        mb: 2,
                        textAlign: "center",
                        fontSize: { xs: "1rem", sm: "1.5rem" },
                    }}
                >
                    Get Your Quote
                </Typography>
                <form>
                    <TextField
                        label="Select Part"
                        fullWidth
                        margin="normal"
                        select
                        SelectProps={{ native: true }}
                    >
                        <option value="engine">Engine</option>
                        <option value="transmission">Transmission</option>
                        <option value="other">Other</option>
                    </TextField>
                    <TextField
                        label="Your Name"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Phone Number"
                        fullWidth
                        margin="normal"
                        type="tel"
                        required
                    />
                    <TextField
                        label="Email Address"
                        fullWidth
                        margin="normal"
                        type="email"
                        required
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 2,
                            backgroundColor: "#00b8d4",
                            color: "#fff",
                            textTransform: "none",
                            fontSize: { xs: "0.9rem", sm: "1.2rem" },
                        }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default HeroSection;
