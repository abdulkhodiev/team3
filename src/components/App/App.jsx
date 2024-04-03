import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
    Home,
    Layout,
    AdminLayout,
    AdminProducts,
    AdminProductsAdd,
    AdminSupplier,
    AdminSupplierAdd,
    Login,
    SignUp,
} from "../index";
import "./App.css";

function App() {
    return (
        <Box>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />

                    <Route path="admin" element={<AdminLayout />}>
                        <Route path="products" element={<AdminProducts />} />
                        <Route
                            path="products/add"
                            element={<AdminProductsAdd />}
                        />
                        <Route
                            path="suppliers/add"
                            element={<AdminSupplierAdd />}
                        />
                        <Route path="suppliers" element={<AdminSupplier />} />
                    </Route>

                    {/* <Route path="user" element={<UserLayout />}></Route> */}
                </Route>
            </Routes>
        </Box>
    );
}

export default App;
