"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users, Tag, GraduationCap, BookOpen, FileText, RefreshCcw
} from "lucide-react";
import Link from "next/link";

export default function MainDashboard() {
  const [activeTab, setActiveTab] = useState("program");

  const programList = [
    { id: 1, name: "Zakat Penghasilan", amount: "Rp7,743,750" },
    { id: 2, name: "Bantuan Kemanusiaan Palestina", amount: "Rp3,080,000" },
    { id: 3, name: "Infaq/Shadaqah", amount: "Rp2,547,738" },
    { id: 4, name: "Insidental Makanan Palestina", amount: "Rp965,000" },
    { id: 5, name: "Sedekah Yatim", amount: "Rp851,000" },
  ];

  const donorList = [
    { id: 1, name: "Ahmad Fauzi", total: "Rp500,000" },
    { id: 2, name: "Budi Santoso", total: "Rp1,200,000" },
    { id: 3, name: "Siti Aminah", total: "Rp300,000" },
    { id: 4, name: "Rahmat Hidayat", total: "Rp750,000" },
  ];

  return (
    <div className="p-1 space-y-6">
      {/* Card utama */}
      <div className="bg-[#0A77A6] text-white rounded-lg p-4 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Target & Capaian Bulan Ini</h2>
          <button className="flex items-center gap-1 text-sm hover:opacity-80 transition-all">
            <RefreshCcw size={16} /> Refresh
          </button>
        </div>
        <h3 className="text-center font-semibold">Dana</h3>
        <div className="border rounded-lg p-4 flex justify-between mb-4">
          <div>
            <p className="font-bold">Target</p>
            <p>Pencapaian</p>
            <p>%</p>
          </div>
          <div className="text-right">
            <p className="font-bold">Rp0</p>
            <p>Rp0</p>
            <p>null%</p>
          </div>
        </div>
        <h3 className="text-center font-semibold">Donatur Berkontribusi</h3>
        <div className="border rounded-lg p-4 flex justify-between">
          <div>
            <p className="font-bold">Target</p>
            <p>Pencapaian</p>
            <p>%</p>
          </div>
          <div className="text-right">
            <p className="font-bold">0</p>
            <p>null</p>
            <p>null%</p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 mt-4">
          {["Donatur Anda", "Berdonasi", "Persentase", "Donatur Terprospek", "Jumlah prospek"].map((label) => (
            <div key={label} className="bg-white text-center p-2 flex flex-col items-center rounded shadow">
              <p className="font-bold text-gray-800">null</p>
              <p className="text-[10px] md:text-xs text-gray-800">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Menu icon mobile */}
      <div className="w-full flex gap-2 md:hidden mt-4">
        {[
          { icon: <Users />, label: "Prospek", href: "/prospek" },
          { icon: <Tag />, label: "Campaign", href: "/campaign" },
          { icon: <GraduationCap />, label: "Anak Juara", href: "/anakjuara" },
          { icon: <BookOpen />, label: "Beasiswa", href: "/beasiswa" },
          { icon: <FileText />, label: "Raport", href: "/raport" },
        ].map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <a href={item.href} className="aspect-square w-full max-w-[60px] flex items-center justify-center text-[#F26532] bg-white shadow rounded-full">
              {item.icon}
            </a>
            <p className="mt-1 text-[10px] text-gray-800 text-center">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Tab */}
      <div>
        <div className="flex w-full">
          <button
            onClick={() => setActiveTab("program")}
            className={`flex-1 px-4 py-2 font-semibold rounded-tl-lg transition-all 
              ${activeTab === "program"
                ? "text-gray-800 border-b-2 border-[#F26532] bg-gray-100"
                : "text-gray-500 hover:bg-gray-200"}`}
          >
            Program
          </button>
          <button
            onClick={() => setActiveTab("donatur")}
            className={`flex-1 px-4 py-2 font-semibold rounded-tr-lg transition-all 
              ${activeTab === "donatur"
                ? "text-gray-800 border-b-2 border-[#F26532] bg-gray-100"
                : "text-gray-500 hover:bg-gray-200"}`}
          >
            Donatur
          </button>
        </div>

        {/* Animated List View */}
        <div className="mt-4 max-h-[300px] overflow-y-auto space-y-2 pr-1">
          <AnimatePresence mode="wait">
            {activeTab === "program" && (
              <motion.div
                key="program-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {programList.map((item) => (
                  <Link
                    key={item.id}
                    href={`/detailProgram?id=${item.id}`}
                    className="block"
                  >
                    <div
                      className="flex items-center justify-between bg-white border border-gray-200 hover:bg-gray-50 rounded-lg p-4 mb-2 shadow-sm transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-[#F26532]/10 text-[#F26532] font-bold rounded-full">
                          {item.id}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{item.name}</p>
                          <p className="text-xs text-gray-500">Program donasi</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[#F26532] font-bold">{item.amount}</p>
                        <p className="text-xs text-gray-400">terkumpul</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}

            {activeTab === "donatur" && (
              <motion.div
                key="donatur-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {donorList.map((donor) => (
                  <Link
                    key={donor.id}
                    href={`/detailDonasi?id=${donor.id}`}
                    className="block"
                  >
                    <div
                      className="flex items-center justify-between bg-white border border-gray-200 hover:bg-gray-50 rounded-lg p-4 mb-2 shadow-sm transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 font-bold rounded-full">
                          {donor.id}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{donor.name}</p>
                          <p className="text-xs text-gray-500">Donatur aktif</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-blue-600 font-bold">{donor.total}</p>
                        <p className="text-xs text-gray-400">total donasi</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
