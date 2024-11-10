import { useState, ChangeEvent, FormEvent } from "react";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    uploadImage: "Upload Image",
    nameArabic: "Name in Arabic",
    nameEnglish: "Name in English",
    roleArabic: "Role in Arabic",
    roleEnglish: "Role in English",
    addNow: "Add Now",
    cancel: "Cancel",
    imageRequired: "Please upload an image",
  },
  ar: {
    uploadImage: "تحميل صوره",
    nameArabic: "الاسم بالعربية",
    nameEnglish: "الاسم بالإنجليزية",
    roleArabic: "المنصب بالعربية",
    roleEnglish: "المنصب بالإنجليزية",
    addNow: "إضافة الان",
    cancel: "إلغاء",
    imageRequired: "الرجاء تحميل صورة",
  },
};

interface NewAdmin {
  nameAr: string;
  nameEn: string;
  positionAr: string;
  positionEn: string;
  image: File | null;
}

interface AddAdminFormProps {
  onSave: (admin: Required<Omit<NewAdmin, "image"> & { image: File }>) => void;
  onCancel: () => void;
}

export default function AddAdminForm({ onSave, onCancel }: AddAdminFormProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const [newAdmin, setNewAdmin] = useState<NewAdmin>({
    nameAr: "",
    nameEn: "",
    positionAr: "",
    positionEn: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAdmin((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewAdmin((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setError("");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newAdmin.image) {
      setError(t.imageRequired);
      return;
    }

    if (
      newAdmin.nameAr &&
      newAdmin.nameEn &&
      newAdmin.positionAr &&
      newAdmin.positionEn &&
      newAdmin.image
    ) {
      onSave({
        nameAr: newAdmin.nameAr,
        nameEn: newAdmin.nameEn,
        positionAr: newAdmin.positionAr,
        positionEn: newAdmin.positionEn,
        image: newAdmin.image,
      });
    }
  };

  return (
    <div className="flex bg-slate-800 rounded-xl shadow-lg">
      <div className="w-full p-8">
        <div className="flex flex-col items-center mb-8">
          <label className="relative cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-56 h-56 object-cover rounded-full border-4 border-slate-200 dark:border-slate-700 p-2"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </div>
            )}
          </label>
          <span className="mt-4 text-slate-600 dark:text-slate-400">
            {t.uploadImage}
          </span>
          {error && <span className="mt-2 text-red-500 text-sm">{error}</span>}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="nameAr"
            value={newAdmin.nameAr}
            onChange={handleChange}
            placeholder={t.nameArabic}
            className="w-full p-3 border border-slate-600 rounded-lg bg-slate-700 text-slate-800 dark:text-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="nameEn"
            value={newAdmin.nameEn}
            onChange={handleChange}
            placeholder={t.nameEnglish}
            className="w-full p-3 border border-slate-600 rounded-lg bg-slate-700 text-slate-800 dark:text-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="positionAr"
            value={newAdmin.positionAr}
            onChange={handleChange}
            placeholder={t.roleArabic}
            className="w-full p-3 border border-slate-600 rounded-lg bg-slate-700 text-slate-800 dark:text-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="positionEn"
            value={newAdmin.positionEn}
            onChange={handleChange}
            placeholder={t.roleEnglish}
            className="w-full p-3 border border-slate-600 rounded-lg bg-slate-700 text-slate-800 dark:text-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-800 text-white px-6 py-3 rounded-lg transition-colors shadow-sm"
            >
              {t.addNow}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-lg transition-colors"
            >
              {t.cancel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
