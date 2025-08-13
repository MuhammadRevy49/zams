"use client";
import { useState } from "react";
import { X, Download, ArrowLeft, LogOut, FileText } from "lucide-react";

export default function ProspekPage() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      nama: "Tatsky Reza Setiawan",
      kategori: "Bantuan Makanan ke Palestina",
      date: "2025-08-12",
      jenis: "Whatsapp",
      status: "Closing",
      jumlah: 10000,
      tema: "Infaq Shodaqoh Terikat",
      checked: false,
    }
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  // Filter data sesuai search
  const filteredProspek = data.filter((d) =>
    d.nama.toLowerCase().includes(search.toLowerCase())
  );

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
    <div className="p-1">
      {/* Judul */}
      <div className="flex content-center md:hidden">
        <a href="/" className="text-[#F26532] font-bold md:hidden">
          <ArrowLeft className="mr-3" />
        </a>
        <h1 className="text-xl font-bold text-[#F26532] mb-4">
          Daftar Prospect
        </h1>
      </div>

      {/* Filter */}
      <div className="space-y-3 mb-6">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 text-gray-800 rounded-lg px-4 py-2 pr-10 focus:ring-3 focus:ring-orange-300 focus:outline-1 focus:outline-[#F26532] transition-all"
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

        {/* Dropdown */}
        <div className="flex gap-3">
          <select className="flex-1 border border-gray-300 rounded-lg text-gray-800 px-4 py-2 focus:ring-3 focus:ring-orange-300 focus:outline-1 focus:outline-[#F26532] transition-all">
            <option>Respon</option>
          </select>
          <select className="flex-1 border border-gray-300 rounded-lg text-gray-800 px-4 py-2 focus:ring-3 focus:ring-orange-300 focus:outline-1 focus:outline-[#F26532] transition-all">
            <option>Media</option>
          </select>
        </div>

        {/* Tanggal */}
        <div className="flex gap-3">
          <input
            type="date"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-3 focus:ring-orange-300 focus:outline-1 focus:outline-[#F26532] transition-all"
            defaultValue="2025-08-05"
          />
          <input
            type="date"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-3 focus:ring-orange-300 focus:outline-1 focus:outline-[#F26532] transition-all"
            defaultValue="2025-08-05"
          />
        </div>

        {/* Tombol Search & Clear */}
        <div className="flex gap-3">
          <button className="bg-[#F26532] text-white px-6 py-2 rounded-lg flex-1 hover:opacity-50 hover:cursor-pointer transition-all">
            Search
          </button>
          <button className="bg-gray-100 border border-gray-300 shadow text-[#F26532] px-6 py-2 rounded-lg flex-1 hover:bg-gray-300 hover:cursor-pointer transition-all">
            Clear
          </button>
        </div>
      </div>

      {/* Tombol Download & Upload */}
      <div className="flex items-center justify-between w-full gap-3 mb-4">
        <div className="flex items-center space-x-2">
          <button className="bg-green-500 text-white p-2 hover:bg-green-700 hover:cursor-pointer transition-all rounded-full">
            <Download size={20} />
          </button>
          <button className="bg-[#F26532] text-white px-4 py-2 rounded-lg hover:opacity-50 hover:cursor-pointer transition-all">
            Upload Prospect
          </button>
          <a href="#" className="text-blue-500 text-sm hover:text-blue-700 transition-all">
            Download Format
          </a>
        </div>
        <p className="text-sm text-gray-500 text-right">Total data: {data.length}</p>
      </div>

      {/* Select All & Close Bulk */}
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
        <label className="flex items-center gap-1 select-none">
          <input type="checkbox" checked={selectAll} onChange={toggleSelectAll} className="accent-[#F26532]" /> Select All
        </label>
        <button className="flex items-center gap-1 text-gray-500 hover:cursor-pointer select-none hover:text-gray-700 transition-all">
          <LogOut size={16} /> Close Bulk
        </button>
      </div>

      {/* Data */}
      {filteredProspek.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
            alt="No data"
            className="w-32 h-32 mb-4 opacity-70"
          />
          <p className="text-gray-500">Data prospek tidak ada.</p>
        </div>
      ) : (
        <div className="mt-3 overflow-y-auto" style={{ maxHeight: "60vh" }}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mt-3">
            {filteredProspek.map((donatur, index) => {
              const isSelected = selectedItems.includes(donatur.id);
              return (
                <div
                  key={index}
                  className={`bg-white shadow rounded-lg p-4 flex flex-col transition-all hover:bg-orange-50 hover:cursor-pointer border border-gray-100 ${isSelected
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
                        <p className="text-sm text-gray-500">{donatur.jenis}</p>
                        <p className="text-sm text-gray-400">{donatur.kategori}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-right text-gray-400">{donatur.date}</p>
                      <p className="text-center rounded-full text-gray-700 shadow text-sm bg-orange-300">{donatur.status}</p>
                      <p className="text-right text-sm text-gray-500">{donatur.tema}</p>
                      <p className="text-right text-lg text-[#F26532] font-semibold">Rp{donatur.jumlah.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 mt-1 flex flex-row justify-between">
                    <div className="flex flex-row items-center mt-2">
                      <button className="p-2 flex items-center rounded-lg bg-[#F26532] shadow text-white mr-2 hover:opacity-50 transition-all hover:cursor-pointer">
                        <FileText className="mr-2" size={18} />Import
                      </button>
                      <p className="font-semibold text-[#F26532]">{donatur.retail}</p>
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
