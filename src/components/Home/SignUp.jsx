import React, { useState } from "react";
import {
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    Link,
    Alert,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const SignUp = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
        // Reset error state on user input change
        setError("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if passwords match
        if (credentials.password !== credentials.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        // Handle signup logic here
        console.log(credentials);
        // Reset form or redirect user to another page
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
                    maxWidth: "50%",
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
                        Sign Up
                    </Typography>
                    {error && (
                        <Alert
                            severity="error"
                            style={{ width: "100%", marginBottom: "1rem" }}
                        >
                            {error}
                        </Alert>
                    )}
                    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            name="username"
                            value={credentials.username}
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
                        <TextField
                            label="Email"
                            variant="outlined"
                            name="email"
                            value={credentials.email}
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
                        <TextField
                            label="Confirm Password"
                            variant="outlined"
                            type="password"
                            name="confirmPassword"
                            value={credentials.confirmPassword}
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
                            type="submit"
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
                                marginBottom: "1rem",
                            }}
                        >
                            Sign Up
                        </Button>
                    </form>
                    <Typography variant="body2">
                        Already have an account?{" "}
                        <Link
                            component={RouterLink}
                            to="/login"
                            style={{ color: "#330140" }}
                        >
                            Log in
                        </Link>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default SignUp;
