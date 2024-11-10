import { createContext, useContext, useState } from "react";

type LanguageContextType = {
  language: "en" | "ar";
  direction: "ltr" | "rtl";
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"en" | "ar">("ar");
  const [direction, setDirection] = useState<"ltr" | "rtl">("rtl");

  const toggleLanguage = () => {
    if (language === "ar") {
      setLanguage("en");
      setDirection("ltr");
      document.dir = "ltr";
    } else {
      setLanguage("ar");
      setDirection("rtl");
      document.dir = "rtl";
    }
  };

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
