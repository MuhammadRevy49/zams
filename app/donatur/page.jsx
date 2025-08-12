"use client";

import { useState, useEffect } from "react";
import { FiSearch, FiPlus, FiDownload } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";
import { Download, X, User, Mail } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';

export default function DonaturPage() {
  const [donaturList, setDonaturList] = useState([]);
  const [search, setSearch] = useState("");
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [startDate, setStartDate] = useState("mm/dd/yy");
  const [endDate, setEndDate] = useState("mm/dd/yy");
  const [selectedItems, setSelectedItems] = useState([]);

  // Dummy fetch - nanti tinggal ganti endpoint asli
  useEffect(() => {
    async function fetchDummyData() {
      try {
        const dummy = [
          { id: 1, name: "Ahmad Fauzi", kode: "011008301234", status: "Middle Spender, Full Engage,-", prospek: "Last Prospek: 08/08/2025", retail: "Retail, Loyal", total: 10000, tanggal: "2025-08-08", jenis: "Infaq/Shadaqah", respon: "closing" },
          { id: 2, name: "Ahmad Malik", kode: "011008301232", status: "Low Spender, Full Engage,-", prospek: "Last Prospek: 09/08/2025", retail: "Retail, Baru", total: 99000, tanggal: "2025-09-08", jenis: "Infaq/Shadaqah", respon: "closing" },
          { id: 3, name: "Muhammad Revy", kode: "01100830125", status: "High Spender, Full Engage,-", prospek: "Last Prospek: 10/08/2025", retail: "Retail, Retensi", total: 14000, tanggal: "2025-08-09", jenis: "Infaq/Shadaqah", respon: "closing" },
          { id: 5, name: "Fauzy Achmad", kode: "01100830321", status: "Low Spender, Full Engage,-", prospek: "Last Prospek: 11/08/2025", retail: "Retail, Platinum", total: 25000, tanggal: "2025-08-07", jenis: "Infaq/Shadaqah", respon: "closing" },
          { id: 6, name: "Fauzy Editio", kode: "01100830321", status: "Low Spender, Full Engage,-", prospek: "Last Prospek: 11/08/2025", retail: "Retail, Platinum", total: 25000, tanggal: "2025-08-07", jenis: "Infaq/Shadaqah", respon: "closing" },
          { id: 7, name: "Fauzy Rahmatio", kode: "01100830321", status: "Low Spender, Full Engage,-", prospek: "Last Prospek: 11/08/2025", retail: "Retail, Platinum", total: 25000, tanggal: "2025-08-07", jenis: "Infaq/Shadaqah", respon: "closing" },
          { id: 8, name: "Fauzy Ganzae", kode: "01100830321", status: "Low Spender, Full Engage,-", prospek: "Last Prospek: 11/08/2025", retail: "Retail, Platinum", total: 25000, tanggal: "2025-08-07", jenis: "Infaq/Shadaqah", respon: "closing" },
        ];
        await new Promise((res) => setTimeout(res, 300));
        setDonaturList(dummy);
      } catch (err) {
        console.error("fetch error:", err);
      }
    }
    fetchDummyData();
  }, []);

  const filteredDonatur = donaturList.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  const visibleIds = filteredDonatur.map(d => d.id);

  const toggleSelect = (id) => {
    setSelectedItems(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const toggleSelectAll = () => {
    const allVisibleSelected = visibleIds.length > 0 && visibleIds.every(id => selectedItems.includes(id));
    if (allVisibleSelected) {
      setSelectedItems(prev => prev.filter(id => !visibleIds.includes(id)));
    } else {
      setSelectedItems(prev => Array.from(new Set([...prev, ...visibleIds])));
    }
  };

  const allSelected = visibleIds.length > 0 && visibleIds.every(id => selectedItems.includes(id));

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
        <button
          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          className="text-center p-2 flex-col justify-center hover:bg-gray-300 hover:cursor-pointer rounded-lg text-[#F26532] transition-all"
        >
          <FaSearchPlus />
          <p>Advanced</p>
        </button>
      </div>

      {/* Dropdown Advanced Filter (TETAP UTUH, tidak diubah) */}
      {isAdvancedOpen && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <select className="w-full text-gray-700 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all">
                <option className="text-gray-300">- Jenis -</option>
                <option>Community</option>
                <option>Retail</option>
                <option>Corporate</option>
                <option>SuperInfaq</option>
              </select>
            </div>
            <div>
              <select className="w-full text-gray-700 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all">
                <option>Low</option>
                <option>Mid</option>
                <option>High</option>
              </select>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <select className="w-full text-gray-700 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all">
                <option className="text-gray-300">- Profiling -</option>
                <option>Platinum</option>
                <option>Calon Platinum</option>
                <option>Loyal</option>
                <option>Baru</option>
                <option>Retensi</option>
                <option>Calon Donatur</option>
                <option>High Retensi</option>
              </select>
            </div>
            <div>
              <select className="w-full text-gray-700 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all">
                <option className="text-gray-300">- Milad -</option>
                <option>Hari Ini</option>
                <option>Minggu Ini</option>
              </select>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <select className="w-full text-gray-700 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all">
                <option className="text-gray-300">- Engage -</option>
                <option>Less</option>
                <option>Normal</option>
                <option>Full</option>
              </select>
            </div>
            <div>
              <select className="w-full text-gray-700 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all">
                <option className="text-gray-300">- Status Prospek -</option>
                <option>Belum</option>
                <option>Sudah</option>
              </select>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <select className="w-full text-gray-700 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all">
                <option className="text-gray-300">- Status Donasi -</option>
                <option>Belum</option>
                <option>Sudah</option>
                <option>Belum Tahun Ini</option>
              </select>
            </div>
            <div>
              <select className="w-full text-gray-700 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all">
                <option className="text-gray-300">- Respon -</option>
                <option>PTD</option>
                <option>Masih Pertimbangan</option>
                <option>Tidak Donasi</option>
                <option>Tidak Diangkat</option>
                <option>Tidak Aktif</option>
                <option>Salah Sambung</option>
                <option>Nomor Salah</option>
                <option>Nomor Belum Terpasang</option>
                <option>Lain Lain</option>
                <option>Closing</option>
                <option>Tidak Ingin Dihubungi</option>
                <option>Belum Ada Respon</option>
                <option>Membalas Pesan</option>
              </select>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <div className="space-y-3">
                <select className="w-full text-gray-700 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all">
                  <option className="text-gray-300">- Waktu -</option>
                  <option>Hari ini bulan lalu</option>
                  <option>Hari ini tahun lalu</option>
                  <option>Bulan ini tahun lalu</option>
                </select>
                <div className="flex gap-3">
                  <input value={startDate} onChange={(e) => setStartDate(e.target.value)} type="date" className="w-full text-gray-800 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all" />
                  <input value={endDate} onChange={(e) => setEndDate(e.target.value)} type="date" className="w-full text-gray-800 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all" />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <input type="radio" id="rekomendasi" name="filterMode" className="mr-3" />
                <label htmlFor="rekomendasi" className="text-gray-800">by Rekomendasi</label>
              </div>
              <div>
                <input type="radio" id="periode" name="filterMode" className="mr-3" />
                <label htmlFor="periode" className="text-gray-800">by Periode</label>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex space-x-2 w-full">
        <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-700 hover:cursor-pointer transition-all">
          <Download />
        </button>
        <button className="p-2 bg-green-500 rounded-lg md:text-sm text-xs text-white font-bold ">+ Donatur</button>
        <button className="flex-[2] flex items-center font-bold justify-center gap-2 bg-[#F26532] text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 hover:cursor-pointer transition-all">
          Search
        </button>
        <button className="flex-[1] items-center font-bold gap-2 border border-gray-300 bg-gray-100 text-[#F26532] px-4 py-2 rounded-lg shadow hover:bg-gray-300 hover:cursor-pointer transition-all">
          Clear
        </button>
      </div>

      <div className="flex justify-between mt-3">
        <div className="flex items-center gap-4 text-sm text-gray-600 p-2">
          <label className="flex items-center gap-1">
            {/* Select All sekarang berfungsi pada visible (filtered) items */}
            <input
              type="checkbox"
              checked={allSelected}
              onChange={toggleSelectAll}
            />{" "}
            Select All
          </label>
          <button className="flex items-center gap-1 text-gray-500 hover:cursor-pointer hover:text-gray-700 transition-all">
            <Download size={16} /> Close Bulk
          </button>
        </div>
        <div className="flex gap-2 flex-row">
          {/* tetap sama seperti semula */}
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
        // Bungkus heula
        <div className="mt-3 overflow-y-auto" style={{ maxHeight: "60vh" }}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mt-3">
            {filteredDonatur.map((donatur, index) => {
              const isSelected = selectedItems.includes(donatur.id);
              return (
                <div
                  key={index}
                  className={`bg-white shadow rounded-lg p-4 flex flex-col transition-all hover:bg-orange-50 hover:cursor-pointer ${isSelected ? "border-1 border-[#F26532] shadow-lg" : "border border-gray-100"
                    }`}
                >
                  <div className="flex flex-row justify-between w-full">
                    <div className="flex items-center gap-3">
                      {/* checkbox di pinggir kiri card */}
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelect(donatur.id)}
                        className="w-5 h-5 accent-[#F26532] cursor-pointer"
                      />
                      <div className="text-left space-y-1">
                        <h2 className="font-bold text-gray-800">{donatur.name}</h2>
                        <p className="text-sm text-gray-500">{donatur.kode}</p>
                        <p className="text-sm text-gray-500">{donatur.status}</p>
                        <p className="text-xs text-gray-500 font-semibold">{donatur.prospek}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-right text-orange-600 font-semibold">Rp. {donatur.total.toLocaleString()}</p>
                      <p className="text-right text-sm text-gray-500">{donatur.tanggal}</p>
                      <p className="text-right text-sm text-gray-500">{donatur.jenis}</p>
                      <p className="text-xs text-gray-500 bg-orange-200 px-2 shadow rounded-lg">Response : {donatur.respon}</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-300 mt-3 flex flex-row justify-between">
                    <div className="flex flex-row items-center mt-2">
                      <div className="p-2 rounded-full bg-white shadow text-[#F26532] mr-2"><User /></div>
                      <p className="font-semibold text-[#F26532]">{donatur.retail}</p>
                    </div>
                    <div className="mt-2 flex flex-row items-center space-x-2">
                      <div className="p-2 rounded-full bg-gray-50 text-[#F26532] shadow"><Mail /></div>
                      <div className="p-2 rounded-full bg-gray-50 shadow"><FaWhatsapp size={24} color="#25D366" /></div>
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
