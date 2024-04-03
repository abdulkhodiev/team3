import React, { useState } from "react";
import {
    TextField,
    Button,
    Card,
    CardContent,
    Box,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Container,
    Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { colors } from "../../constants/colors";

const AdminProductAdd = () => {
    const [productDetails, setProductDetails] = useState({
        name: "",
        description: "",
        price: "",
        quantity: "",
        category: "",
        isAvailable: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductDetails({
            ...productDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission to backend here
        console.log(productDetails);
    };

    const handleCancel = () => {
        navigate("/admin/products");
    };
    const fieldStyle = {
        margin: "1rem 0",
        borderRadius: "15px",
    };

    const categories = ["Electronics", "Books", "Clothing", "Home", "Toys"];

    return (
        <Container
            maxWidth="md"
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Card
                sx={{
                    width: "100%",
                    overflow: "auto",
                    borderRadius: 4,
                    boxShadow: 2,
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Product Name"
                                    variant="outlined"
                                    name="name"
                                    fullWidth
                                    value={productDetails.name}
                                    onChange={handleChange}
                                    InputProps={{
                                        style: {
                                            borderRadius: "15px",
                                        },
                                    }}
                                />
                                <TextField
                                    label="Description"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    name="description"
                                    fullWidth
                                    value={productDetails.description}
                                    onChange={handleChange}
                                    style={fieldStyle}
                                    InputProps={{
                                        style: {
                                            borderRadius: "15px",
                                        },
                                    }}
                                />
                                <TextField
                                    label="Price"
                                    variant="outlined"
                                    name="price"
                                    type="number"
                                    fullWidth
                                    value={productDetails.price}
                                    onChange={handleChange}
                                    style={fieldStyle}
                                    InputProps={{
                                        style: {
                                            borderRadius: "15px",
                                        },
                                    }}
                                />
                                <FormControl fullWidth>
                                    <InputLabel>Category</InputLabel>
                                    <Select
                                        name="category"
                                        value={productDetails.category}
                                        onChange={handleChange}
                                        label="Category"
                                    >
                                        {categories.map((category) => (
                                            <MenuItem
                                                key={category}
                                                value={category}
                                            >
                                                {category}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Quantity"
                                    type="number"
                                    name="quantity"
                                    value={productDetails.quantity}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel>Status</InputLabel>
                                    <Select
                                        name="isAvailable"
                                        value={productDetails.isAvailable}
                                        onChange={handleChange}
                                        label="Status"
                                    >
                                        <MenuItem value={true}>
                                            Available
                                        </MenuItem>
                                        <MenuItem value={false}>
                                            Unavailable
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    onClick={handleCancel}
                                    sx={{
                                        color: colors.primary,
                                        border: `1px solid ${colors.primary}`,
                                        borderRadius: "0.6rem",
                                    }}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        bgcolor: colors.primary,
                                        borderRadius: "0.6rem",
                                    }}
                                    fullWidth
                                >
                                    Add Product
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default AdminProductAdd;
