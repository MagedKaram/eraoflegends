// MainLayout.tsx
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadModal from "@/components/DownloadModal"; // ✅ جديد
import { ScrollRestoration } from "react-router-dom";

export default function MainLayout() {
  const [isDownloadOpen, setDownloadOpen] = useState(false);
  const location = useLocation();

  // افتح بالمَناداة من أي زر: window.dispatchEvent(new Event("open-download-modal"))
  useEffect(() => {
    const openHandler = () => setDownloadOpen(true);
    window.addEventListener("open-download-modal", openHandler as any);
    return () =>
      window.removeEventListener("open-download-modal", openHandler as any);
  }, []);

  // اقفل عند تغيير المسار (اختياري)
  useEffect(() => {
    setDownloadOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <ScrollRestoration />
        <Outlet />
      </main>
      <Footer />

      {/* ✅ المودال العالمي هنا مرة واحدة */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setDownloadOpen(false)}
      />
    </div>
  );
}
