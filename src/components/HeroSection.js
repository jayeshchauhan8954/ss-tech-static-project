import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

const HeroSection = () => {
    return (
        <Box
            sx={{
                position: "relative",
                height: "600px",
                backgroundImage: "url('/maruti-suzuki-baleno-car.png')", // Replace with your car image URL
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
                    fontSize: "4rem", // Enlarge the text size
                    fontWeight: "bold",
                    color: "transparent", // Make the text transparent
                    textAlign: "center",
                    mb: 64,
                    WebkitTextStroke: "2px #00b8d4", // Outline color and thickness
                    WebkitTextFillColor: "transparent", // Ensure the fill is transparent
                }}
            >
                Finance Option Available
            </Typography>

            {/* Call Now Button */}
            <Button
                variant="contained"
                sx={{
                    position: "absolute",
                    top: "3%",
                    right: "10%",
                    backgroundColor: "#00b8d4",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "10px 20px",
                }}
            >
                Call Now
            </Button>

            {/* Form in Bottom Left */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: "10%",
                    left: "5%",
                    backgroundColor: "#fff",
                    border: "2px dotted #00b8d4",
                    borderRadius: "10px",
                    padding: "20px",
                    width: "350px",
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
                    }}
                >
                    Get Your Quote
                </Typography>
                <form>
                    {/* Select Part */}
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

                    {/* User Name */}
                    <TextField
                        label="Your Name"
                        fullWidth
                        margin="normal"
                        required
                    />

                    {/* Phone Number */}
                    <TextField
                        label="Phone Number"
                        fullWidth
                        margin="normal"
                        type="tel"
                        required
                    />

                    {/* Email Address */}
                    <TextField
                        label="Email Address"
                        fullWidth
                        margin="normal"
                        type="email"
                        required
                    />

                    {/* Submit Button */}
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 2,
                            backgroundColor: "#00b8d4",
                            color: "#fff",
                            textTransform: "none",
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
