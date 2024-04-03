import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import { colors } from "../../constants/colors";
import MyButton from "./MyButton";
import { useLocation } from "react-router-dom";

const SideBar = () => {
    const location = useLocation();

    const buttonNames = [
        "Sales",
        "Warehouse",
        "Products",
        "Suppliers",
        "Categories",
    ];

    return (
        <Stack
            px={7}
            py={2}
            minHeight={"100vh"}
            gap={2}
            sx={{ boxShadow: "0px 2px 12px -1px rgba(67,42,180,0.75)" }}
        >
            <Typography
                variant="h5"
                color={colors.primary}
                textAlign={"center"}
                fontWeight={"bold"}
                p={2}
                border={`2px solid ${colors.primary}`}
                borderRadius={"1rem"}
            >
                Team 3
            </Typography>
            {buttonNames.map((buttonName) => (
                <MyButton
                    key={buttonName}
                    href={`/admin/${buttonName.replace(/\s/g, "")}`}
                    isActive={
                        location.pathname ===
                        `/admin/${buttonName.replace(/\s/g, "")}`
                    }
                >
                    {buttonName}
                </MyButton>
            ))}
            <Button
                variant="outlined"
                href="/"
                sx={{
                    mt: "auto",
                    borderRadius: "0.6rem",
                }}
            >
                Log Out
            </Button>
        </Stack>
    );
};

export default SideBar;
