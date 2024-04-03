import React, { useState, useEffect } from "react";
import {
    Table,
    Stack,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TableHead,
    Paper,
    Box,
    TextField,
    Button,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { colors } from "../../constants/colors";
import EditIcon from "@mui/icons-material/Edit";

const AdminProducts = () => {
    // const zoneAPI = axios.create({
    //     baseURL: "http://localhost:8070/api/v1",
    // });

    // const [rows, setRows] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    // const fetchExamData = async () => {
    //     try {
    //         const response = await zoneAPI.get("/users/admins");
    //         setRows(response.data);
    //     } catch (error) {
    //         console.error("Failed to fetch exam data:", error);
    //     }
    // };

    // const addAdmin = async () => {
    //     try {
    //         await zoneAPI.post("/users", {
    //             firstName,
    //             lastName,
    //             phoneNumber,
    //             password,
    //             role: "ADMIN",
    //         });

    //         setFirstName("");
    //         setLastName("");
    //         setPhoneNumber("");
    //         setPassword("");

    //         fetchExamData();

    //         alert("Admin added successfully.");
    //     } catch (error) {
    //         console.error("Failed to add admin:", error);

    //         if (
    //             error.response &&
    //             error.response.data &&
    //             error.response.data.phoneNumber
    //         ) {
    //             alert(`Error: ${error.response.data.phoneNumber}`);
    //         } else {
    //             alert("An unexpected error occurred. Please try again.");
    //         }
    //     }
    // };

    // useEffect(() => {
    //     fetchExamData();
    // }, []);

    const rows = [
        {
            id: 1,
            name: "Product 1",
            category: "Category 1",
            price: 100,
            quantity: 123,
            status: "Available",
        },
        {
            id: 2,
            name: "Product 2",
            category: "Category 2",
            price: 200,
            quantity: 123,
            status: "Available",
        },
        {
            id: 3,
            name: "Product 3",
            category: "Category 3",
            price: 300,
            quantity: 123,
            status: "Available",
        },
    ];

    return (
        <Stack
            direction={"column"}
            width={"75%"}
            marginX={"auto"}
            paddingY={"5rem"}
        >
            <Box sx={{ width: "100%" }}>
                <Button
                    component={Link}
                    to="/admin/products/add"
                    variant="contained"
                    sx={{
                        bgcolor: colors.primary,
                        ":hover": { bgcolor: colors.primary },
                        borderRadius: "1rem",
                        fontWeight: "bold",
                        color: "white",
                        textTransform: "none",
                        fontSize: "1.4rem",
                        marginBottom: "1rem",
                    }}
                >
                    Add Product +
                </Button>
                <TableContainer
                    component={Paper}
                    sx={{
                        boxShadow: "none",
                        margin: 0,
                        padding: 0,
                        border: `1px solid #EEEEEE`,
                        borderRadius: "1rem",
                    }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>
                                    Edit
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.category}</TableCell>
                                    <TableCell>{row.price}$</TableCell>
                                    <TableCell>{row.quantity}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>
                                        <Button
                                            variant="outlined"
                                            sx={{ borderRadius: "0.6rem" }}
                                        >
                                            <EditIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Stack>
    );
};

export default AdminProducts;
