import React from "react";
import AppNavigation from "./src/navigation";
import { ThemeProvider } from "./src/constants/ThemeContext";

export default function App() {
    return (
        <ThemeProvider>
            <AppNavigation />
        </ThemeProvider>
    )
}