"use client";

import { useState } from "react";
import { Search, X, Download, Inbox, ArrowLeft } from "lucide-react";

export default function ListAnakJuara() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]); // data awal kosong

    const handleSearch = () => {
        // TODO: fetch data dari API
        console.log("Searching:", search);
    };

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
                    Total data : {data.length || "null"}
                </p>
            </div>

            {/* List Data */}
            {data.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                    <Inbox size={80} />
                    <p className="mt-2">Belum ada data</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.map((anak, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow p-4 flex flex-col"
                        >
                            <h2 className="font-bold text-lg">{anak.nama}</h2>
                            <p className="text-sm text-gray-600">
                                {anak.keterangan}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
