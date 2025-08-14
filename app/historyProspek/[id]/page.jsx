"use client";

import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from 'react-icons/fa';
import { useRouter } from "next/navigation";

export default function historyProspek() {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("2025-08-05");
  const [endDate, setEndDate] = useState("2025-08-05");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      nama: "Tatsky Reza Setiawan",
      kategori: "Infaq / Shadaqah",
      date: "2025-08-12",
      status: "Closing",
      jumlah: 10000,
      checked: false,
    },
    {
      id: 2,
      nama: "Tatsky Reza Setiawan",
      kategori: "Infaq / Shadaqah",
      date: "2025-08-12",
      status: "Closing",
      jumlah: 10000,
      checked: false,
    },
    {
      id: 3,
      nama: "Tatsky Reza Setiawan",
      kategori: "Infaq / Shadaqah",
      date: "2025-08-12",
      status: "Closing",
      jumlah: 10000,
      checked: false,
    },
  ]);

  // Filter data sesuai search
  const filteredTransaksi = data.filter((d) =>
    d.kategori.toLowerCase().includes(search.toLowerCase())
  );

  const router = useRouter();

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      // Nanti ganti dengan API call
      setLoading(false);
    }, 1500);
  };

  const handleClear = () => {
    setSearch("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="p-1 w-full overflow-x-hidden">
      <div className="flex items-center mb-3">
        <button onClick={() => router.back()} className="p-2 rounded-full hover:bg-orange-200 hover:cursor-pointer transition-all mr-1"><ArrowLeft className="text-[#F26532]" /></button>
        <h1 className="text-xl font-bold text-[#F26532]">Riwayat Prospek</h1>
      </div>

      {/* Search Bar */}
      <div className="flex flex-wrap gap-2 mb-4 w-full">
        <div className="relative flex-1 min-w-[200px]">
          <div className="flex items-center gap-3">
            <select className="flex-1 border border-gray-300 py-2.5 text-gray-700 px-3 rounded-lg focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all">
              <option>Respon</option>
            </select>
            <select className="flex-1 border border-gray-300 py-2.5 text-gray-700 px-3 rounded-lg focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all">
              <option>Media</option>
            </select>
          </div>
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

      {/* Date Filter */}
      <div className="flex flex-wrap gap-2 w-full">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="flex-1 text-gray-800 min-w-[150px] border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all"
        />
        <span className="flex items-center text-gray-800">-</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="flex-1 text-gray-800 min-w-[150px] border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2 mb-3 mt-4">
        <button className="bg-green-500 text-white p-3 rounded-full flex items-center justify-center hover:bg-green-700 transition-all">
          <FiDownload size={20} />
        </button>
        <button
          onClick={handleSearch}
          className="bg-[#F26532] text-white font-bold px-4 py-2 rounded-lg flex-1 min-w-[120px] hover:opacity-50 hover:cursor-pointer transition-all"
        >
          Search
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-100 border border-gray-300 shadow text-[#F26532] font-bold px-4 py-2 rounded-lg flex-1 min-w-[120px] hover:bg-gray-300 transition-all"
        >
          Clear
        </button>
      </div>

      {/* Select All */}
      <div className="flex flex-wrap justify-between mt-3 gap-2">
        <div className="flex items-center gap-4 text-sm text-gray-600 p-2">
          <label className="flex items-center gap-1 select-none">
            First Prospek :
          </label>
          <p className="flex items-center gap-1 text-gray-500 select-none hover:text-gray-700 transition-all">2006-08-08  </p>
        </div>
        <p className="p-2 text-gray-800 text-xs md:text-sm">
          Total Data : {data.length}
        </p>
      </div>

      {/* Data */}
      {filteredTransaksi.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
            alt="No data"
            className="w-32 h-32 mb-4 opacity-70"
          />
          <p className="text-gray-500">Data transaksi tidak ada.</p>
        </div>
      ) : (
        <div className="mt-3 overflow-y-auto" style={{ maxHeight: "60vh" }}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mt-3">
            {filteredTransaksi.map((transaksi, index) => {
              return (
                <div
                  key={index}
                  className={`shadow rounded-lg p-4 flex flex-col transition-all hover:bg-orange-100 border border-gray-100 bg-white`}
                >
                  <div className="flex flex-row justify-between w-full">
                    <div className="flex items-center gap-3">
                      <div className="text-left space-y-1">
                        <h2 className="font-bold text-gray-800">{transaksi.date}</h2>
                        <p className="text-sm text-gray-500">{transaksi.kategori}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-right text-gray-600 py-1 px-2 bg-orange-200 rounded-full shadow">{transaksi.status}</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 mt-1 flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center mt-2">
                      <Link href={`/detailDonatur/${transaksi.id}`} className="text-[#F26532] flex items-center mr-2 bg-gray-50 shadow hover:opacity-50 transition-all p-2 rounded"><FaWhatsapp size={18} className="mr-2" />Whatsapp</Link>
                    </div>
                    <p className="text-right text-lg text-orange-600 font-semibold">Rp{transaksi.jumlah.toLocaleString()}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
