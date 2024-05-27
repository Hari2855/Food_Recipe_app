import React from "react";
import AppNavigation from "./src/navigation";
import { ThemeProvider } from "./src/constants/ThemeContext";
import { UserProvider } from "./src/constants/UserContext";

export default function App() {
    return (
       <UserProvider>
        <ThemeProvider>
            <AppNavigation />
        </ThemeProvider>
       </UserProvider>
    )
}