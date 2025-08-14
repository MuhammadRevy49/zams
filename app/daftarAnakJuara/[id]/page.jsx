"use client";

import { useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function historyAduan() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // Data donasi
  const donations = [
    { name: "Muhammad Revy Rizqy Pratama", level: "SD", program: "Infaq Pendidikan Siswa SD Juara", amount: 333000 },
    { name: "Aisyah Putri Lestari", level: "SMP", program: "Beasiswa Siswa SMP Berprestasi", amount: 500000 },
    { name: "Dzakwan Al-Fatih", level: "SD", program: "Bantuan Buku & Alat Tulis", amount: 150000 },
    { name: "Siti Nurhaliza", level: "SMA", program: "Beasiswa SMA Juara", amount: 750000 },
    { name: "Rizky Maulana", level: "SD", program: "Infaq Pendidikan Siswa SD Juara", amount: 250000 },
    { name: "Nabila Zahra", level: "SMP", program: "Pelatihan Bahasa Inggris", amount: 180000 },
    { name: "Fajar Pratama", level: "SMA", program: "Bantuan Ujian Nasional", amount: 300000 },
    { name: "Andi Saputra", level: "SD", program: "Infaq Pendidikan Siswa SD Juara", amount: 200000 },
  ];

  // Filter data sesuai pencarian
  const filtered = donations.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.program.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-1">
      {/* Header */}
      <div className="flex items-center mb-3">
        <button onClick={() => router.back()} className="p-2 rounded-full hover:bg-orange-200 hover:cursor-pointer transition-all mr-1"><ArrowLeft className="text-[#F26532]" /></button>
        <h1 className="text-xl font-bold text-[#F26532]">Daftar Anak Juara</h1>
      </div>

      {/* Search Bar */}
      <div className="flex gap-2 mb-3">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Cari disini..."
            className="w-full border border-gray-300 text-gray-800 rounded-lg px-4 py-2 pr-10 focus:ring-3 focus:ring-orange-300 focus:outline-1 focus:outline-[#F26532] transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-2.5 text-gray-400"
            >
              <X size={18} />
            </button>
          )}
        </div>
        <button className="bg-[#F26532] text-white px-6 py-2 rounded-lg shadow hover:opacity-50 hover:cursor-pointer transition">
          Search
        </button>
      </div>
      <p className="text-gray-700 text-sm mb-5">Total Data : {filtered.length}</p>

      {/* List Donasi */}
      <div className="space-y-4 overflow-y-auto" style={{ maxHeight: "68vh" }}>
        {filtered.length > 0 ? (
          filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow justify-between border border-gray-100 p-4 flex gap-4 items-center flex-wrap md:flex-nowrap max-w-full overflow-hidden"
            >
              <div>
                <p className="text-gray-600 font-semibold">{item.name}</p>
                <p className="text-[#F26532]">{item.level}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">{item.program}</p>
                <p className="text-[#F26532] font-semibold">
                  Rp{item.amount.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">Data tidak ada.</p>
        )}
      </div>
    </div>
  );
}
