"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home, Users, Tag, GraduationCap, BookOpen, FileText,
    ChevronDown, ChevronUp, ReceiptText, HandHeart, LogOut,
    ChevronLeft, ChevronRight
} from "lucide-react";

export default function SidebarLayout({ children }) {
    const pathname = usePathname();
    const [openDashboard, setOpenDashboard] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Halaman tanpa sidebar & bottom navbar
    const noSidebar = ["/login"];
    if (noSidebar.includes(pathname)) {
        return <>{children}</>;
    }

    const menuItems = [
        {
            name: "Beranda",
            icon: <Home />,
            href: "/",
            isDropdown: true,
            subMenu: [
                { name: "Prospek", icon: <Users />, href: "/prospek" },
                { name: "Campaign", icon: <Tag />, href: "/campaign" },
                { name: "Anak Juara", icon: <GraduationCap />, href: "/anakjuara" },
                { name: "Beasiswa", icon: <BookOpen />, href: "/beasiswa" },
                { name: "Raport", icon: <FileText />, href: "/raport" },
            ]
        },
        { name: "Donatur", icon: <HandHeart />, href: "/donatur" },
        { name: "Transaksi", icon: <ReceiptText />, href: "/transaksi" }
    ];

    return (
        <div className="flex h-screen">
            {/* Sidebar hanya tampil di md ke atas */}
            <aside
                className={`bg-white shadow-xl flex-col transition-all duration-300 overflow-hidden hidden md:flex
        ${isSidebarOpen ? "w-56" : "w-20"}`}
            >
                <div className="flex items-center justify-center p-3 mt-4">
                    {isSidebarOpen ? (
                        <img src="images/zams.png" alt="Logo" className="h-12" />
                    ) : (
                        <img src="images/z.png" alt="Logo Mini" className="h-10" />
                    )}
                </div>

                <nav className="flex-1 p-3 space-y-2 overflow-y-auto">
                    {isSidebarOpen && <h1 className="p-3 font-bold text-gray-500">Menu</h1>}
                    {menuItems.map((item) => {
                        if (item.isDropdown) {
                            const isActive = pathname === item.href;
                            return (
                                <div key={item.name}>
                                    <div
                                        className={`flex items-center justify-between px-4 py-2 text-[#666] rounded-lg transition ${isActive
                                            ? "bg-[#F26532] text-white"
                                            : "bg-white hover:bg-orange-200"
                                            }`}
                                    >
                                        <Link
                                            href={item.href}
                                            className="flex items-center gap-3 flex-1"
                                            prefetch={false}
                                        >
                                            <span className="text-lg">{item.icon}</span>
                                            {isSidebarOpen && <span className="font-medium">{item.name}</span>}
                                        </Link>

                                        {isSidebarOpen && (
                                            <button
                                                type="button"
                                                onClick={() => setOpenDashboard(!openDashboard)}
                                                className="p-1 rounded hover:bg-orange-300"
                                                aria-label="Toggle submenu"
                                            >
                                                {openDashboard ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                            </button>
                                        )}
                                    </div>

                                    {openDashboard && isSidebarOpen && (
                                        <div className="space-y-2 mt-1 bg-orange-100 rounded-lg">
                                            {item.subMenu.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    prefetch={false}
                                                    className={`flex items-center gap-3 px-4 py-2 text-[#666] rounded-lg cursor-pointer transition ${pathname === sub.href
                                                        ? "bg-[#F26532] text-white"
                                                        : "bg-transparent hover:bg-orange-200"
                                                        }`}
                                                >
                                                    <span className="text-lg">{sub.icon}</span>
                                                    <span className="font-medium">{sub.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                prefetch={false}
                                className={`flex items-center gap-3 px-4 py-2 text-[#666] rounded-lg cursor-pointer transition ${pathname === item.href
                                    ? "bg-[#F26532] text-white"
                                    : "bg-white hover:bg-orange-200"
                                    }`}
                            >
                                <span className="text-lg">{item.icon}</span>
                                {isSidebarOpen && <span className="font-medium">{item.name}</span>}
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-x-hidden">
                {/* Navbar atas selalu muncul */}
                <header className="flex items-center justify-between bg-white shadow-lg border-b border-gray-100 p-2">
                    <div className="flex flex-row">
                        {/* Tombol toggle hanya muncul kalau layar md ke atas */}
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="hidden md:block"
                        >
                            {isSidebarOpen ? (
                                <ChevronLeft className="text-[#F26532]" size={24} />
                            ) : (
                                <ChevronRight className="text-[#F26532]" size={24} />
                            )}
                        </button>
                        <div className="ml-3">
                            <p className="font-bold text-[#F26532] text-lg">Siti Maryam</p>
                            <p className="text-gray-800 text-sm">01100830</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="w-10 h-10 rounded-full bg-[#F26532] text-white font-bold flex items-center justify-center">
                            M
                        </p>
                        <button className="p-2 rounded-full hover:bg-orange-200 hover:cursor-pointer transition-all">
                            <LogOut className="text-[#666]" />
                        </button>
                    </div>
                </header>

                {/* Halaman dinamis */}
                <main className="p-4 overflow-x-hidden bg-gray-50 flex-1">
                    {children}
                </main>

                {/* Bottom Navbar untuk mobile */}
                <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 flex justify-around py-4 px-3">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            prefetch={false}
                            className={`flex flex-col items-center text-sm ${pathname === item.href ? "text-orange-600" : "text-gray-500"
                                }`}
                        >
                            {item.icon}
                            <span className="text-xs">{item.name}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}
