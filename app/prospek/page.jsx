"use client";
import { useState } from "react";
import { Search, X, Calendar, Download, Users, ArrowLeft } from "lucide-react";

export default function ProspekPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-4">
      {/* Judul */}
      <div className="flex content-center md:hidden">
        <a href="/" className="p-1 text-[#F26532] font-bold md:hidden">
          <ArrowLeft className="mr-3" />
        </a>
        <h1 className="text-2xl font-bold text-[#F26532] mb-4">
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
          <button className="bg-[#F26532] text-white px-6 py-2 rounded-lg flex-1 hover:bg-orange-600 hover:cursor-pointer transition-all">
            Search
          </button>
          <button className="bg-gray-100 border border-gray-300 shadow text-[#F26532] px-6 py-2 rounded-lg flex-1 hover:bg-gray-300 hover:cursor-pointer transition-all">
            Clear
          </button>
        </div>
      </div>

      {/* Tombol Download & Upload */}
      <div className="flex items-center gap-3 mb-4">
        <button className="bg-green-500 text-white p-2 hover:bg-green-700 hover:cursor-pointer transition-all rounded-full">
          <Download size={20} />
        </button>
        <button className="bg-[#F26532] text-white px-4 py-2 rounded-lg hover:bg-orange-600 hover:cursor-pointer transition-all">
          Upload Prospect
        </button>
        <a href="#" className="text-blue-500 text-sm hover:text-blue-700 transition-all">
          Download Format
        </a>
      </div>

      {/* Select All & Close Bulk */}
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
        <label className="flex items-center gap-1">
          <input type="checkbox" /> Select All
        </label>
        <button className="flex items-center gap-1 text-gray-500 hover:cursor-pointer hover:text-gray-700 transition-all">
          <Download size={16} /> Close Bulk
        </button>
      </div>

      {/* Data kosong */}
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <Users size={80} strokeWidth={1} />
      </div>

      <p className="text-sm text-gray-500 text-right">Total data: 0</p>
    </div>
  );
}
