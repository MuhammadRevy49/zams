"use client";

import { useState } from "react";
import { FiSearch, FiPlus, FiDownload } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";
import { Download, X } from "lucide-react";


export default function DonaturPage() {
  // Contoh data (nanti bisa diganti dari API)
  const [donaturList, setDonaturList] = useState([]);
  const [search, setSearch] = useState("");

  const filteredDonatur = donaturList.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-1">
      {/* Header */}
      <h1 className="text-xl font-bold text-[#F26532] mb-4">Donatur</h1>

      {/* Search & Action */}
      <div className="flex flex-row items-center gap-2 mb-6">
        <div className="relative flex-1 w-full">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Cari donatur..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-gray-800 border border-gray-300 rounded-lg focus:ring-3 focus:ring-orange-300 focus:outline-1 focus:outline-[#F26532] transition-all"
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
        <button className="text-center p-2 flex-col justify-center hover:bg-gray-300 hover:cursor-pointer rounded-lg text-[#F26532] transition-all">
          <FaSearchPlus />
          <p>Advanced</p>
        </button>
      </div>
      <div className="flex space-x-2 w-full">
        <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-700 hover:cursor-pointer transition-all">
          <Download />
        </button>
        <button className="p-2 bg-green-500 rounded-lg md:text-sm text-xs text-white font-bold ">+ Donatur</button>

        {/* Search lebih lebar */}
        <button className="flex-[2] flex items-center font-bold justify-center gap-2 bg-[#F26532] text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 hover:cursor-pointer transition-all">
          Search
        </button>

        {/* Clear ukuran normal */}
        <button className="flex-[1] items-center font-bold gap-2 border border-gray-300 bg-gray-100 text-[#F26532] px-4 py-2 rounded-lg shadow hover:bg-gray-300 hover:cursor-pointer transition-all">
          Clear
        </button>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex items-center gap-4 text-sm text-gray-600 p-2">
          <label className="flex items-center gap-1">
            <input type="checkbox" /> Select All
          </label>
          <button className="flex items-center gap-1 text-gray-500 hover:cursor-pointer hover:text-gray-700 transition-all">
            <Download size={16} /> Close Bulk
          </button>
        </div>
        <div className="flex gap-2 flex-row">
          <p className="p-2 text-gray-800 text-sm">Total Data : 8888</p>
        </div>
      </div>


      {/* Data */}
      {filteredDonatur.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
            alt="No data"
            className="w-32 h-32 mb-4 opacity-70"
          />
          <p className="text-gray-500">Belum ada data donatur</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDonatur.map((donatur, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 border border-gray-100 flex items-center justify-between"
            >
              <div>
                <h2 className="font-bold text-gray-800">{donatur.name}</h2>
                <p className="text-sm text-gray-500">{donatur.phone}</p>
              </div>
              <div className="text-orange-600 font-semibold">
                Rp {donatur.total.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
