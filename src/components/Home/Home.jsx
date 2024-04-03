import React from "react";
import { Typography, Button, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../../constants/colors";
const Home = () => {
    return (
        <Stack sx={{ mx: "auto", width: "90%" }}>
            <Stack
                id={"home"}
                direction="row"
                justifyContent="space-between"
                alignItems={"center"}
                height={"15vh"}
            >
                <Box
                    sx={{ display: "flex", gap: "1rem" }}
                    alignItems={"center"}
                >
                    {" "}
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            color: colors.primary,
                        }}
                    >
                        Team 3 Store
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                    <Link to="/signup">
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: colors.primary,
                                ":hover": { bgcolor: colors.primary },
                                borderRadius: "1rem",
                                fontWeight: "bold",
                                color: "white",
                                textTransform: "none",
                                fontSize: "1.4rem",
                                padding: "0.5rem 1.5rem",
                            }}
                        >
                            Sign Up
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: colors.primary,
                                ":hover": { bgcolor: colors.primary },
                                borderRadius: "1rem",
                                fontWeight: "bold",
                                color: "white",
                                textTransform: "none",
                                fontSize: "1.4rem",
                                padding: "0.5rem 1.5rem",
                            }}
                        >
                            Log In
                        </Button>
                    </Link>
                </Box>
            </Stack>
            <Box
                height={"80vh"}
                my={"2.5vh"}
                sx={{
                    borderRadius: "1rem",
                    bgcolor: colors.secondary,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "87%",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            color: colors.primary,
                        }}
                    >
                        🌟 Welcome to Team 3 Store! 🌟
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "center",
                            width: "80%",
                            fontSize: "1.1rem",
                        }}
                        py={2}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum rem quod cumque veritatis maiores deserunt, natus
                        maxime explicabo incidunt impedit fugiat sequi repellat
                        odio quas vel nulla! Obcaecati, aliquam fugit.\
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: colors.primary,
                        ":hover": { bgcolor: colors.primary },
                        borderRadius: "1rem",
                        fontWeight: "bold",
                        color: "white",
                        textTransform: "none",
                        fontSize: "1.4rem",
                        padding: "0.8rem 1.5rem",
                    }}
                >
                    Make Your First Order
                </Button>
            </Box>
        </Stack>
    );
};

export default Home;
