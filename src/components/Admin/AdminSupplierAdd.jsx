import React, { useState } from "react";
import {
    TextField,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { colors } from "../../constants/colors";

const AdminSupplierAdd = () => {
    const [supplierInfo, setSupplierInfo] = useState({
        name: "",
        company: "",
        website: "",
        email: "",
        address: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSupplierInfo({
            ...supplierInfo,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission to backend here
        console.log(supplierInfo);
    };

    const handleCancel = () => {
        navigate("/admin/suppliers");
    };
    const fieldStyle = {
        margin: "1rem 0",
        borderRadius: "15px",
    };

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
                                    label="Full Name"
                                    variant="outlined"
                                    name="name"
                                    fullWidth
                                    value={supplierInfo.name}
                                    onChange={handleChange}
                                    InputProps={{
                                        style: {
                                            borderRadius: "15px",
                                        },
                                    }}
                                />
                                <TextField
                                    label="Company Name"
                                    variant="outlined"
                                    rows={4}
                                    name="company"
                                    fullWidth
                                    value={supplierInfo.company}
                                    onChange={handleChange}
                                    style={fieldStyle}
                                    InputProps={{
                                        style: {
                                            borderRadius: "15px",
                                        },
                                    }}
                                />
                                <TextField
                                    label="Website"
                                    variant="outlined"
                                    name="website"
                                    type="url"
                                    fullWidth
                                    value={supplierInfo.website}
                                    onChange={handleChange}
                                    style={fieldStyle}
                                    InputProps={{
                                        style: {
                                            borderRadius: "15px",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Email"
                                    type="email"
                                    name="quantity"
                                    value={supplierInfo.email}
                                    onChange={handleChange}
                                    fullWidth
                                    InputProps={{
                                        style: {
                                            borderRadius: "15px",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Address"
                                    name="address"
                                    value={supplierInfo.address}
                                    onChange={handleChange}
                                    fullWidth
                                    InputProps={{
                                        style: {
                                            borderRadius: "15px",
                                        },
                                    }}
                                />
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
                                    Add Supplier
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default AdminSupplierAdd;
