import React from "react";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { colors } from "../../constants/colors";

const MyButton = ({ children, href, isActive }) => {
    return (
        <Button
            component={RouterLink}
            to={href}
            variant="contained"
            sx={{
                bgcolor: isActive ? colors.primary : "white",
                color: isActive ? "white" : colors.primary,
                ":hover": {
                    bgcolor: colors.primary,
                    color: "white",
                },
                borderRadius: "0.6rem",
                textTransform: "none",
                fontSize: "1.1rem",
                boxShadow: "0px 2px 7px -1px rgba(67,42,180,0.75)",
                px: 4,
            }}
        >
            {children}
        </Button>
    );
};

export default MyButton;
