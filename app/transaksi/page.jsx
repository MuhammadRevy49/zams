"use client";

import { useState } from "react";
import { FiSearch, FiDownload } from "react-icons/fi";
import { X } from "lucide-react";

export default function TransaksiPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Profiling");
  const [startDate, setStartDate] = useState("2025-08-05");
  const [endDate, setEndDate] = useState("2025-08-05");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setData([]); // nanti ganti dengan API call
      setLoading(false);
    }, 1500);
  };

  const handleClear = () => {
    setSearch("");
    setFilter("Profiling");
    setStartDate("");
    setEndDate("");
    setData([]);
  };

  return (
    <div className="p-1 w-full overflow-x-hidden">
      <h1 className="text-xl font-bold text-[#F26532] mb-4">Transaksi</h1>

      {/* Search Bar */}
      <div className="flex flex-wrap gap-2 mb-4 w-full">
        <div className="relative flex-1 min-w-[200px]">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Cari transaksi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-10 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all"
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

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-4 w-full">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="flex-1 text-gray-800 min-w-[150px] border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all"
        >
          <option value="Profiling">Profiling</option>
          <option value="Donasi">Donasi</option>
          <option value="Refund">Refund</option>
        </select>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="flex-1 text-gray-800 min-w-[150px] border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all"
        >
          <option value="Profiling">Program</option>
          <option value="Donasi">Donasi</option>
          <option value="Refund">Refund</option>
        </select>
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
          className="bg-[#F26532] text-white font-bold px-4 py-2 rounded-lg flex-1 min-w-[120px] hover:bg-orange-600 transition-all"
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
          <label className="flex items-center gap-1">
            <input type="checkbox" /> Select All
          </label>
          <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-all">
            <FiDownload size={16} /> Close Bulk
          </button>
        </div>
        <p className="p-2 text-gray-800 text-xs md:text-sm">
          Total Data : 8888
        </p>
      </div>

      {/* Loader / Data */}
      {loading ? (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#F26532] mb-4"></div>
          <p className="text-gray-500">Menghitung Data...</p>
        </div>
      ) : data.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
            alt="No data"
            className="w-32 h-32 mb-4 opacity-70"
          />
          <p className="text-gray-500">Tidak ada data transaksi</p>
        </div>
      ) : (
        <div>{/* List transaksi nanti taruh di sini */}</div>
      )}
    </div>
  );
}
