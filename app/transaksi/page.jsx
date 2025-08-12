"use client";

import { useState } from "react";
import { FiSearch, FiDownload } from "react-icons/fi";
import { X } from "lucide-react";
import { Download, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function TransaksiPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Profiling");
  const [programFilter, setProgramFilter] = useState("Program");
  const [startDate, setStartDate] = useState("2025-08-05");
  const [endDate, setEndDate] = useState("2025-08-05");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      nama: "Tatsky Reza Setiawan",
      kategori: "Sarana Air Bersih & Sanitasi",
      date: "2025-08-12, 09:16:47",
      jenis: "Shopeepay - Donol",
      author: "RZ - Pusat",
      jumlah: 10000,
      checked: false,
    },
    {
      id: 2,
      nama: "Tatsky Reza Setiawan",
      kategori: "Sarana Air Bersih & Sanitasi",
      date: "2025-08-12, 09:16:47",
      jenis: "Shopeepay - Donol",
      author: "RZ - Pusat",
      jumlah: 10000,
      checked: false,
    },
    {
      id: 3,
      nama: "Tatsky Reza Setiawan",
      kategori: "Sarana Air Bersih & Sanitasi",
      date: "2025-08-12, 09:16:47",
      jenis: "Shopeepay - Donol",
      author: "RZ - Pusat",
      jumlah: 10000,
      checked: false,
    },
    {
      id: 4,
      nama: "Tatsky Reza Setiawan",
      kategori: "Sarana Air Bersih & Sanitasi",
      date: "2025-08-12, 09:16:47",
      jenis: "Shopeepay - Donol",
      author: "RZ - Pusat",
      jumlah: 10000,
      checked: false,
    },
    {
      id: 5,
      nama: "Tatsky Reza Setiawan",
      kategori: "Sarana Air Bersih & Sanitasi",
      date: "2025-08-12, 09:16:47",
      jenis: "Shopeepay - Donol",
      author: "RZ - Pusat",
      jumlah: 10000,
      checked: false,
    },
    {
      id: 6,
      nama: "Tatsky Reza Setiawan",
      kategori: "Sarana Air Bersih & Sanitasi",
      date: "2025-08-12, 09:16:47",
      jenis: "Shopeepay - Donol",
      author: "RZ - Pusat",
      jumlah: 10000,
      checked: false,
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  // Filter data sesuai search
  const filteredDonatur = data.filter((d) =>
    d.nama.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      // Nanti ganti dengan API call
      setLoading(false);
    }, 1500);
  };

  const handleClear = () => {
    setSearch("");
    setFilter("Profiling");
    setProgramFilter("Program");
    setStartDate("");
    setEndDate("");
    setData([]);
    setSelectedItems([]);
    setSelectAll(false);
  };

  const toggleSelectAll = () => {
    const newValue = !selectAll;
    setSelectAll(newValue);
    setSelectedItems(newValue ? data.map((item) => item.id) : []);
  };

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
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
          value={programFilter}
          onChange={(e) => setProgramFilter(e.target.value)}
          className="flex-1 text-gray-800 min-w-[150px] border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all"
        >
          <option value="Program">Program</option>
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
            <input
              type="checkbox"
              checked={selectAll}
              onChange={toggleSelectAll}
            />{" "}
            Select All
          </label>
          <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-all">
            <FiDownload size={16} /> Close Bulk
          </button>
        </div>
        <p className="p-2 text-gray-800 text-xs md:text-sm">
          Total Data : {data.length}
        </p>
      </div>

      {/* Data */}
      {filteredDonatur.length === 0 ? (
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
            {filteredDonatur.map((donatur, index) => {
              const isSelected = selectedItems.includes(donatur.id);
              return (
                <div
                  key={index}
                  className={`bg-white shadow rounded-lg p-4 flex flex-col transition-all hover:bg-orange-50 hover:cursor-pointer ${
                    isSelected
                      ? "border border-[#F26532] shadow-lg"
                      : "border border-gray-100"
                  }`}
                >
                  <div className="flex flex-row justify-between w-full">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelect(donatur.id)}
                        className="w-5 h-5 accent-[#F26532] cursor-pointer"
                      />
                      <div className="text-left space-y-1">
                        <h2 className="font-bold text-gray-800">{donatur.nama}</h2>
                        <p className="text-sm text-gray-500">{donatur.kategori}</p>
                        <p className="text-sm text-gray-400">{donatur.date}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-right text-gray-800 font-semibold">{donatur.jenis}</p>
                      <p className="text-right text-sm text-gray-500">{donatur.author}</p>
                      <p className="text-right text-lg text-orange-600 font-semibold">{donatur.jumlah.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 mt-1 flex flex-row justify-between">
                    <div className="flex flex-row items-center mt-2">
                      <button className="p-2 flex items-center rounded bg-[#F26532] shadow text-white mr-2 hover:opacity-50 transition-all hover:cursor-pointer">
                        <Download className="mr-2" size={18}/>Download
                      </button>
                      <p className="font-semibold text-[#F26532]">{donatur.retail}</p>
                    </div>
                    <div className="mt-2 flex flex-row items-center space-x-2">
                      <div className="p-2 rounded-full bg-gray-50 text-[#F26532] shadow hover:cursor-pointer hover:opacity-50 transition-all">
                        <Mail />
                      </div>
                      <div className="p-2 rounded-full bg-gray-50 shadow hover:cursor-pointer hover:opacity-50 transition-all">
                        <FaWhatsapp size={24} color="#25D366" />
                      </div>
                    </div>
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
