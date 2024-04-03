import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../index";

const AdminLayout = () => {
    return (
        <Stack direction="row">
            <SideBar />
            <Outlet />
        </Stack>
    );
};

export default AdminLayout;
