"use client";
import {
  Home, Users, Tag, GraduationCap, BookOpen, FileText,
  ChevronDown, ChevronUp, ReceiptText, HandHeart, LogOut,
  ChevronLeft, ChevronRight, RefreshCcw
} from "lucide-react";

export default function MainDashboard() {
  // Data program dummy (bisa diganti API)
  const programList = [
    { id: 1, name: "Zakat Penghasilan", amount: "Rp7,743,750" },
    { id: 2, name: "Bantuan Kemanusiaan Palestina", amount: "Rp3,080,000" },
    { id: 3, name: "Infaq/Shadaqah", amount: "Rp2,547,738" },
    { id: 4, name: "Insidental Makanan Palestina", amount: "Rp965,000" },
    { id: 5, name: "Sedekah Yatim", amount: "Rp851,000" },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Card utama */}
      <div className="bg-[#0A77A6] text-white rounded-lg p-4 shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Target & Capaian Bulan Ini</h2>
          <button className="flex items-center gap-1 text-sm hover:opacity-80 hover:cursor-pointer transition-all">
            <RefreshCcw size={16} /> Refresh
          </button>
        </div>

        {/* Panel Dana */}
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

        {/* Panel Donatur Berkontribusi */}
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

        {/* Baris ringkasan */}
        <div className="grid grid-cols-5 gap-2 mt-4">
          {["Donatur Anda", "Berdonasi", "Persentase", "Donatur Terprospek", "Jumlah prospek"].map((label) => (
            <div key={label} className="bg-white text-center p-2 flex flex-col items-center rounded shadow">
              <p className="font-bold text-gray-800">null</p>
              <p className="text-[10px] md:text-xs text-gray-800">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex gap-2 md:hidden mt-4">
        {[
          { icon: <Users />, label: "Prospek" },
          { icon: <Tag />, label: "Campaign" },
          { icon: <GraduationCap />, label: "Anak Juara" },
          { icon: <BookOpen />, label: "Beasiswa" },
          { icon: <FileText />, label: "Raport" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center"
          >
            <button className="aspect-square w-full max-w-[60px] flex items-center justify-center text-[#F26532] bg-white shadow rounded-full">
              {item.icon}
            </button>
            <p className="mt-1 text-[10px] text-gray-800 text-center leading-tight">
              {item.label}
            </p>
          </div>
        ))}
      </div>



      {/* Tab & List */}
      <div>
        {/* Tabs */}
        <div className="flex w-full">
          <button className="flex-1 px-4 py-2 text-gray-800 border-b-2 border-[#F26532] hover:cursor-pointer font-semibold rounded-tl-lg hover:bg-gray-200 transition-all">
            Program
          </button>
          <button className="flex-1 px-4 py-2 text-gray-500 hover:bg-gray-200 hover:cursor-pointer rounded-tr-lg transition-all">
            Donatur
          </button>
        </div>

        {/* List Program */}
        <div className="mt-4 space-y-2">
          {programList.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white border border-gray-300 hover:cursor-pointer rounded-lg p-3 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center text-[#F26532] font-bold">
                  {item.id}
                </span>
                <p className="font-medium text-gray-800">{item.name}</p>
              </div>
              <p className="text-[#F26532] font-bold">{item.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
