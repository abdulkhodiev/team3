import React, { useState } from "react";
import {
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log(credentials);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Card
                style={{
                    minWidth: 275,
                    borderRadius: "15px",
                    boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.2)",
                }}
            >
                <CardContent
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "2rem",
                    }}
                >
                    <Typography variant="h5" style={{ marginBottom: "2rem" }}>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                            fullWidth
                            style={{ marginBottom: "1rem" }}
                            required
                            InputProps={{
                                style: {
                                    borderRadius: "15px",
                                },
                            }}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            fullWidth
                            required
                            style={{ marginBottom: "1rem" }}
                            InputProps={{
                                style: {
                                    borderRadius: "15px",
                                },
                            }}
                        />
                        <Button
                            // type="submit"
                            component={Link}
                            to="/admin/products"
                            variant="contained"
                            fullWidth
                            style={{
                                backgroundColor: "#330140",
                                color: "white",
                                padding: "10px 0",
                                borderRadius: "15px",
                                boxShadow: "0 4px 8px 0 rgba(51, 1, 64, 0.5)",
                                textTransform: "none",
                                fontSize: "1rem",
                            }}
                        >
                            Log In
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
