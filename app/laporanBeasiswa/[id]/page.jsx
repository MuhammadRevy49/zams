"use client";

import { useState } from "react";
import { X, ArrowLeft, Link } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function historyAduan() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  // Data laporan beasiswa (contoh format yang bener)
  const campaigns = [
    {
      title: "Beasiswa Santri 2025",
      description: "Memberikan bantuan pendidikan bagi santri berprestasi.",
      actions: ["Get Link", "Whatsapp"],
    },
    {
      title: "Beasiswa Yatim Piatu",
      description:
        "Mendukung pendidikan anak yatim piatu agar terus semangat belajar.",
      actions: ["Get Link", "Whatsapp"],
    },
    {
      title: "Beasiswa Hafidz Qur'an",
      description:
        "Program beasiswa untuk santri penghafal Al-Qur'an yang membutuhkan dukungan biaya.",
      actions: ["Get Link", "Whatsapp"],
    },
  ];

  const filtered = campaigns.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
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

      {/* Campaign List */}
      <div className="space-y-4 overflow-y-auto" style={{ maxHeight: "68vh" }}>
        {filtered.length > 0 ? (
          filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow border border-gray-100 p-4 flex gap-4 items-center flex-wrap md:flex-nowrap max-w-full overflow-hidden"
            >
              <div className="flex-1">
                <h2 className="font-bold text-lg text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <div className="flex gap-2">
                {item.actions.includes("Get Link") && (
                  <button className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-lg hover:opacity-80 transition">
                    <Link size={16} /> Link
                  </button>
                )}
                {item.actions.includes("Whatsapp") && (
                  <button className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-lg hover:opacity-80 transition">
                    <FaWhatsapp size={16} /> Chat
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-5">Data tidak ada.</p>
        )}
      </div>
    </div>
  );
}
