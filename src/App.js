import "./App.css";
import { ThemeProvider, createTheme, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Cards from "./components/Cards";
import AddPurchase from "./page/Products";
import { Container } from "@mui/system";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import EditProductsPage from "./page/EditProductsPage";
import AnalyticsPage from "./page/AnalyticsPage";
import LoginPage from "./page/LoginPage/LoginPage";
import RegisterPage from "./page/Register/RegisterPage";
import CustomerList from "./page/CustomerList";

import Store from "./redux/Store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
// import Customer from "./page/Customer";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#007FFF",
        light: "#EEF1F4",
        dark: "",
      },
      secondary: {
        main: "#ffd500",
        contrastText: "#fff0",
      },
      error: {
        main: "#FF1818",
      },
      success: {
        main: "#4AFF01",
      },
      // info:{

      // },
    },
  });

  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="merchant" element={<Sidebar />}>
              <Route path="Dashboard" element={<h1>'Dashboard'</h1>} />
              <Route path="Customers" element={<CustomerList />} />
              <Route path="Add_Purchase" element={<AddPurchase />} />
              <Route path="Edit_Products" element={<EditProductsPage />} />
              <Route path="Analytics" element={<AnalyticsPage />} />
              <Route path="Logout" element={<h1>Logout</h1>} />
              <Route path="" element={<Cart />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            {/* <Route path="customer" element={<Customer/>} /> */}
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
