import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import AddAdminForm from "../components/admin/AddAdminForm";
import AdminCard from "../components/admin/AdminCard";
import defaultAdminImage from "../../public/admin.png";

interface Admin {
  id: number;
  image: string;
  nameAr: string;
  nameEn: string;
  positionAr: string;
  positionEn: string;
}

const translations = {
  en: {
    admins: "Admins",
    addNewAdmin: "Add New Admin",
    addingNewAdmin: "Adding New Admin",
  },
  ar: {
    admins: "المشرفين",
    addNewAdmin: "إضافة مشرف جديد",
    addingNewAdmin: "إضافة مشرف جديد",
  },
};

export default function AdminsPage() {
  const [isAddingMember, setIsAddingMember] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const [admins, setAdmins] = useState<Admin[]>([
    {
      id: 1,
      image: defaultAdminImage,
      nameAr: "محمد احمد",
      nameEn: "Mohammed Ahmed",
      positionAr: "مشرف",
      positionEn: "Admin",
    },
    {
      id: 2,
      image: defaultAdminImage,
      nameAr: "فاطمة علي",
      nameEn: "Fatima Ali",
      positionAr: "مشرف",
      positionEn: "Super Admin",
    },
    {
      id: 3,
      image: defaultAdminImage,
      nameAr: "علي محمد",
      nameEn: "Ali Mohammed",
      positionAr: "مشرف",
      positionEn: "Admin",
    },
    {
      id: 4,
      image: defaultAdminImage,
      nameAr: "سارة يوسف",
      nameEn: "Sara Youssef",
      positionAr: "سوبر مشرف",
      positionEn: "Super Admin",
    },
    {
      id: 5,
      image: defaultAdminImage,
      nameAr: "خالد حسين",
      nameEn: "Khaled Hussein",
      positionAr: "مشرف",
      positionEn: "Admin",
    },
    {
      id: 6,
      image: defaultAdminImage,
      nameAr: "نور محمود",
      nameEn: "Noor Mahmoud",
      positionAr: "سوبر مشرف",
      positionEn: "Super Admin",
    },
    {
      id: 7,
      image: defaultAdminImage,
      nameAr: "يوسف سامي",
      nameEn: "Youssef Sami",
      positionAr: "مشرف",
      positionEn: "Admin",
    },
    {
      id: 8,
      image: defaultAdminImage,
      nameAr: "أمل سمير",
      nameEn: "Amal Samir",
      positionAr: "سوبر مشرف",
      positionEn: "Super Admin",
    },
    {
      id: 9,
      image: defaultAdminImage,
      nameAr: "ريم محمد",
      nameEn: "Reem Mohammed",
      positionAr: "مشرف",
      positionEn: "Admin",
    },
    {
      id: 10,
      image: defaultAdminImage,
      nameAr: "أحمد سعيد",
      nameEn: "Ahmed Saeed",
      positionAr: "سوبر مشرف",
      positionEn: "Super Admin",
    },
    {
      id: 11,
      image: defaultAdminImage,
      nameAr: "منى عادل",
      nameEn: "Mona Adel",
      positionAr: "سوبر مشرف",
      positionEn: "Super Admin",
    },
  ]);

  const handleOpenForm = () => setIsAddingMember(true);
  const handleCloseForm = () => setIsAddingMember(false);

  const handleSaveAdmin = (newAdmin: {
    nameAr: string;
    nameEn: string;
    positionAr: string;
    positionEn: string;
    image: File;
  }) => {
    const imageUrl = URL.createObjectURL(newAdmin.image);
    setAdmins((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        image: imageUrl,
        nameAr: newAdmin.nameAr,
        nameEn: newAdmin.nameEn,
        positionAr: newAdmin.positionAr,
        positionEn: newAdmin.positionEn,
      },
    ]);
    handleCloseForm();
  };

  return (
    <div className="p-4 bg-white dark:bg-slate-900">
      {!isAddingMember ? (
        <>
          <div className="flex items-center justify-between text-slate-800 dark:text-slate-200">
            <h1 className="text-3xl font-bold">{t.admins}</h1>
            <button
              onClick={handleOpenForm}
              className="bg-cyan-600 hover:bg-cyan-800 text-white px-6 py-3 text-lg font-semibold rounded-lg transition-colors shadow-sm"
            >
              {t.addNewAdmin}
            </button>
          </div>
          <div className="grid grid-cols-auto-fit-250 gap-8 mt-8">
            {admins.map((admin) => (
              <AdminCard
                key={admin.id}
                name={language === "en" ? admin.nameEn : admin.nameAr}
                position={
                  language === "en" ? admin.positionEn : admin.positionAr
                }
                image={admin.image}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-200">
            {t.addingNewAdmin}
          </h1>
          <AddAdminForm onSave={handleSaveAdmin} onCancel={handleCloseForm} />
        </>
      )}
    </div>
  );
}
