"use client";

import { useState } from "react";
import { Search, X, Download, Mail, Inbox, ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ListBeasiswa() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([
        {
            nama: "A. Fakhri Romadhani",
            tingkat: "SD",
            wali: "Aris Muhammad Ridwan",
            periode: "Januari - Juni 2025",
            notif: 14,
        },
        {
            nama: "Aaliyah Saibun",
            tingkat: "SMP",
            wali: "Anastasia Septiani Sugiharta",
            periode: "Januari - Juni 2025",
            notif: 12,
        },
        {
            nama: "Ababil Septian Reffi",
            tingkat: "SD",
            wali: "Muhammad",
            periode: "Januari - Juni 2025",
            notif: 9,
        },
    ]);

    const handleSearch = () => {
        console.log("Searching:", search);
    };

    return (
        <div className="p-4 max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex content-center md:hidden">
                <a href="/" className="p-1 text-[#F26532] font-bold md:hidden">
                    <ArrowLeft className="mr-3" />
                </a>
                <h1 className="text-2xl font-bold text-[#F26532] mb-4">
                    Daftar Prospect
                </h1>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-2 mb-4">
                {/* Download All */}
                <button className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600 transition">
                    <Download size={20} />
                </button>

                {/* Input */}
                <div className="flex items-center bg-white rounded-lg border border-gray-300 flex-1 px-3">
                    <Search className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-1 p-2 outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {search && (
                        <button onClick={() => setSearch("")}>
                            <X className="text-gray-400" />
                        </button>
                    )}
                </div>

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition"
                >
                    Search
                </button>
            </div>

            {/* Total Data */}
            <p className="text-sm text-gray-600 mb-4">
                Total data : {data.length}
            </p>

            {/* List Data */}
            {data.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                    <Inbox size={80} />
                    <p className="mt-2">Belum ada data</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {data.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow flex items-center justify-between p-4"
                        >
                            {/* Kiri */}
                            <div>
                                <h2 className="font-bold">{item.nama}</h2>
                                <p className="text-orange-500 font-medium">
                                    {item.tingkat}
                                </p>
                                <button className="mt-2 bg-orange-500 text-white px-3 py-1 rounded text-sm hover:bg-orange-600 transition">
                                    <Download size={14} className="inline-block mr-1" />
                                    Download
                                </button>
                            </div>

                            {/* Kanan */}
                            <div className="text-right">
                                <p className="font-medium">{item.wali}</p>
                                <p className="text-sm text-gray-500">
                                    {item.periode}
                                </p>
                                <div className="flex justify-end gap-2 mt-2">
                                    <div className="relative">
                                        <Mail className="text-orange-500" size={28} />
                                        {item.notif > 0 && (
                                            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full px-1">
                                                {item.notif}
                                            </span>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <FaWhatsapp
                                            className="text-green-500"
                                            size={28}
                                        />
                                        {item.notif > 0 && (
                                            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full px-1">
                                                {item.notif}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
