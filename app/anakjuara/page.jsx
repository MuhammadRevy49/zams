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
        <div className="p-4">
            {/* Header */}
            <div className="flex content-center md:hidden">
                <a href="/" className="p-1 text-[#F26532] font-bold md:hidden">
                    <ArrowLeft className="mr-3" />
                </a>
                <h1 className="text-2xl font-bold text-[#F26532] mb-4">
                    Daftar Anak Juara
                </h1>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-2 mb-4">
                {/* Tombol Download */}
                <button
                    className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600 transition"
                    title="Download Data"
                >
                    <Download size={20} />
                </button>

                {/* Input Search */}
                <div className="flex items-center bg-white rounded-lg border border-gray-300 flex-1 px-3">
                    <Search className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-1 p-2 outline-none text-gray-800"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {search && (
                        <button onClick={() => setSearch("")}>
                            <X className="text-gray-400" />
                        </button>
                    )}
                </div>

                {/* Tombol Search */}
                <button
                    onClick={handleSearch}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition"
                >
                    Search
                </button>
            </div>

            {/* Total Data */}
            <p className="text-sm text-gray-600 mb-4">
                Total data : {data.length || "null"}
            </p>

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
