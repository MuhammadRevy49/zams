"use client";

import { useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function historyAduan() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const campaigns = [
    {
      title: "Zakat Penghasilan",
      description:
        "Tutup Akhir Tahun dengan Keberkahan Tunaikan Zakat Penghasilan 2,5% dari penghasilan bersihkan harta dan jiwamu",
      image: "/images/gambar1.jpg",
      actions: ["Get Link", "Whatsapp"],
    },
    {
      title: "Dana NonHalal",
      description: "Dana Non Halal untuk program sosial yang bermanfaat",
      image: "/images/gambar2.jpg",
      actions: ["Get Link", "Whatsapp"],
    },
    {
      title: "Dana NonHalal",
      description: "Dana Non Halal untuk program sosial yang bermanfaat",
      image: "/images/gambar3.jpeg",
      actions: ["Get Link", "Whatsapp"],
    },
    {
      title: "Dana NonHalal",
      description: "Dana Non Halal untuk program sosial yang bermanfaat",
      image: "/images/gambar4.jpg",
      actions: ["Get Link", "Whatsapp"],
    },
    {
      title: "Dana NonHalal",
      description: "Dana Non Halal untuk program sosial yang bermanfaat",
      image: "/images/gambar5.jpg",
      actions: ["Get Link", "Whatsapp"],
    },
    {
      title: "Dana NonHalal",
      description: "Dana Non Halal untuk program sosial yang bermanfaat",
      image: "/images/gambar6.jpg",
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
        <h1 className="text-xl font-bold text-[#F26532]">Riwayat Aduan</h1>
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
      <p className="text-gray-700 text-sm mb-5">Total Data : </p>

      {/* Campaign List */}
      <div className="space-y-4 overflow-y-auto" style={{ maxHeight: "68vh" }}>
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow border border-gray-100 p-4 flex gap-4 items-center flex-wrap md:flex-nowrap max-w-full overflow-hidden"
          >
            test ajah
          </div>
        ))}
      </div>
    </div>
  );
}
