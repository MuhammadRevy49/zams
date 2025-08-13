"use client";

import { useState, useEffect } from "react";
import { Search, X, Download, Mail, Inbox, ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ListBeasiswa() {
  const [search, setSearch] = useState("");
  const [originalData] = useState([
    {
      nama: "A. Fakhri Romadhani",
      tingkat: "SD",
      wali: "Aris Muhammad Ridwan",
      periode: "Januari - Juni 2025",
      notif: 14,
    },
    {
      nama: "Aaliyah Saibun",
      tingkat: "SMP",
      wali: "Anastasia Septiani Sugiharta",
      periode: "Januari - Juni 2025",
      notif: 12,
    },
    {
      nama: "Ababil Septian Reffi",
      tingkat: "SD",
      wali: "Muhammad",
      periode: "Januari - Juni 2025",
      notif: 9,
    },
  ]);

  const [data, setData] = useState(originalData);

  useEffect(() => {
    const filtered = originalData.filter((item) =>
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.tingkat.toLowerCase().includes(search.toLowerCase()) ||
      item.wali.toLowerCase().includes(search.toLowerCase()) ||
      item.periode.toLowerCase().includes(search.toLowerCase())
    );
    setData(filtered);
  }, [search, originalData]);

  return (
    <div className="p-1">
      {/* Header */}
      <div className="flex content-center md:hidden">
        <a href="/" className="text-[#F26532] font-bold md:hidden">
          <ArrowLeft className="mr-3" />
        </a>
        <h1 className="text-xl font-bold text-[#F26532] mb-4">
          Daftar Laporan Beasiswa
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 w-full">
        <div className="flex gap-2 mb-3 w-full">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search..."
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
        </div>
      </div>

      <div className="flex items-center mb-4">
        <button className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600 transition">
          <Download size={20} />
        </button>
        <p className="text-sm text-gray-600 p-3">
          Total data : {data.length}
        </p>
      </div>

      {data.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <Inbox size={80} />
          <p className="mt-2">Belum ada data</p>
        </div>
      ) : (
        <div className="space-y-3">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow flex items-center justify-between p-4 hover:bg-orange-50 border border-gray-100 hover:cursor-pointer transition-all"
            >
              <div>
                <h2 className="font-bold text-gray-800">{item.nama}</h2>
                <p className="text-[#F26532] font-medium">{item.tingkat}</p>
                <button className="mt-2 bg-[#F26532] text-white px-3 py-1 rounded text-sm hover:opacity-50 hover:cursor-pointer transition">
                  <Download size={14} className="inline-block mr-1" />
                  Download
                </button>
              </div>

              <div className="text-right">
                <p className="font-medium text-xs md:text-sm text-gray-700">
                  {item.wali}
                </p>
                <p className="text-sm text-gray-500">{item.periode}</p>
                <div className="flex justify-end gap-2 mt-2">
                  <div className="relative hover:cursor-pointer hover:opacity-50 transition-all">
                    <Mail className="text-[#F26532]" size={28} />
                    {item.notif > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#F26532] text-white text-xs rounded-full px-1">
                        {item.notif}
                      </span>
                    )}
                  </div>
                  <div className="relative hover:cursor-pointer hover:opacity-50 transition-all">
                    <FaWhatsapp className="text-green-500" size={28} />
                    {item.notif > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#F26532] text-white text-xs rounded-full px-1">
                        {item.notif}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
