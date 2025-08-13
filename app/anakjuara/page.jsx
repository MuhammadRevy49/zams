"use client";

import { useState } from "react";
import { Search, X, Download, BookUser, ArrowLeft, Mail, WalletCards, Info} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ListAnakJuara() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([
        {
            id: 1,
            nama: "Tatsky Reza Setiawan",
            kode: "01100830123",
            kategori: "Program Infaq Pendidikan Siswa SMP",
            date: "2025-08-12, 09:16:47",
            status: "Kurang",
            namaaj: "Muhammad Dzaky",
            jumlah: 10000,
            sekolah: "SMP",
        },
    ]);

    const handleSearch = () => {
        // TODO: fetch data dari API
        console.log("Searching:", search);
    };

    const filteredData = data.filter((d) =>
        d.nama.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-1">
            {/* Header */}
            <div className="flex content-center md:hidden">
                <a href="/" className="text-[#F26532] font-bold md:hidden">
                    <ArrowLeft className="mr-3" />
                </a>
                <h1 className="text-xl font-bold text-[#F26532] mb-4">
                    Daftar Anak Juara
                </h1>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-2 w-full">
                {/* Input Search */}
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
                    <button className="bg-[#F26532] text-white px-6 py-2 rounded-lg shadow hover:opacity-80 hover:cursor-pointer transition">
                        Search
                    </button>
                </div>
            </div>

            <div className="flex flex-row">
                {/* Tombol Download */}
                <button
                    className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600 transition"
                    title="Download Data"
                >
                    <Download size={20} />
                </button>
                {/* Total Data */}
                <p className="text-sm text-gray-600 py-3 px-2">
                    Total data : {data.length || "0"}
                </p>
            </div>

            {/* Data */}
            {filteredData.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-20 text-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
                        alt="No data"
                        className="w-32 h-32 mb-4 opacity-70"
                    />
                    <p className="text-gray-500">Data anak juara tidak ada.</p>
                </div>
            ) : (
                <div className="mt-3 overflow-y-auto" style={{ maxHeight: "63vh" }}>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mt-3">
                        {filteredData.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`bg-white shadow rounded-lg p-4 flex flex-col transition-all hover:bg-orange-50 hover:cursor-pointer border border-gray-100`}
                                >
                                    <div className="flex flex-row justify-between w-full">
                                        <div className="flex items-center gap-3">
                                            <div className="text-left space-y-1">
                                                <h2 className="font-bold text-gray-700 flex items-center"><BookUser className="mr-1 text-blue-400"/>{data.kode}</h2>
                                                <p className="text-sm text-gray-500">Nama Donatur</p>
                                                <p className="text-md font-semibold text-gray-700">{data.nama}</p>
                                                <h2 className="text-gray-500">{data.kategori}</h2>
                                                <p className="text-md font-semibold text-[#F26532]">Rp. {data.jumlah.toLocaleString()}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-center text-sm rounded-full text-red-500 font-semibold p-1 bg-red-100 shadow flex items-center justify-center"><Info size={18} className="mr-1"/>{data.status}</p>
                                            <p className="text-right text-sm text-gray-500">Nama Anak Juara</p>
                                            <p className="text-right text-md font-semibold text-gray-700">{data.namaaj}</p>
                                            <p className="text-right text-lg text-orange-600 font-semibold">{data.sekolah}</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-300 mt-1 flex flex-row justify-between">
                                        <div className="flex flex-row items-center mt-2">
                                            <button className="p-2 flex items-center rounded text-gray-500 font-semibold mr-2 transition-all">
                                                <WalletCards className="mr-2" size={18} />Sisa Saldo : <span className="text-semibold text-[#F26532] ml-1">Rp.</span>
                                            </button>
                                            <p className="font-semibold text-[#F26532]">{data.retail}</p>
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
