import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { LanguageProvider } from "../context/LanguageContext";
import Header from "../components/header/Header";
import { ThemeProvider } from "../context/ThemeContext";

export default function AppLayout() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header />
        <div className="flex flex- bg-mainLightBg dark:bg-mainDarkBg">
          <Sidebar />
          <main className="flex-1 p-4 container mx-auto">
            <Outlet />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
