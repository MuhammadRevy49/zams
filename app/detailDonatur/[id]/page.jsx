"use client";

import { ArrowLeft, ChevronRight, ChevronDown, Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Form() {
    const [showCampaignInput, setShowCampaignInput] = useState(true);
    const [showMore, setShowMore] = useState(false); // state tambahan untuk tombol Show More
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full">
            <div className="flex items-center">
                <Link href="/prospek" className="hover:bg-orange-100 rounded-full p-1 transition-all">
                    <ArrowLeft className="text-[#F26532]" />
                </Link>
                <h1 className="p-2 font-bold text-[#F26532]">Muhammad Revy Rizqy P</h1>
            </div>
            <div>
                {/* Header clickable */}
                <div
                    className="flex flex-col bg-white rounded-lg shadow p-3 mb-3 mt-2 cursor-pointer"
                >
                    <div className="flex justify-between" onClick={() => setOpen(!open)}>
                        <h1 className="md:text-xl text-md font-bold text-[#F26532]">
                            Profil Donatur
                        </h1>
                        {open ? (
                            <ChevronDown className="text-gray-600" />
                        ) : (
                            <ChevronRight className="text-gray-600" />
                        )}
                    </div>
                    {/* Dropdown Form */}
                    {open && (
                        <div className="rounded-lg space-y-2">
                            <label className="mt-1 text-gray-600">Nama Donatur</label>
                            <input
                                type="text"
                                className="border border-gray-200 p-2 rounded w-full focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all"
                            />
                            <label className="mt-1 text-gray-600">Profiling</label>
                            <input
                                type="email"
                                className="border border-gray-200 p-2 rounded w-full focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all"
                            />
                            <label className="mt-1 text-gray-600">Frekuensi</label>
                            <input
                                type="number"
                                className="border border-gray-200 p-2 rounded w-full focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all"
                            />
                            <label className="mt-1 text-gray-600">Total</label>
                            <input
                                type="number"
                                className="border border-gray-200 p-2 rounded w-full focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all"
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className="bg-white p-3 rounded-lg shadow">
                <div className="flex justify-between items-center">
                    <h1 className="text-[#F26532] font-bold md:text-xl text-md">Form</h1>
                    <ChevronDown className="text-gray-600" />
                </div>
                <div className="flex flex-col mt-1 space-y-1">
                    <label className="text-gray-600">Tanggal Prospect</label>
                    <input type="date" className="text-gray-600 border border-gray-200 p-2 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all" />
                </div>
                <div className="flex flex-col mt-1 space-y-1">
                    <label className="text-gray-600">Potensi</label>
                    <input type="text" className="text-gray-600 border border-gray-200 p-2 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all" />
                </div>
                <div className="flex flex-col mt-1 space-y-1">
                    <label className="text-gray-600">Media<span className="text-red-500">*</span></label>
                    <select className="p-2 text-gray-600 border border-gray-200 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all">
                        <option>Whatsapp</option>
                    </select>
                </div>
                <div className="flex flex-col mt-1 space-y-1">
                    <label className="text-gray-600">Respon<span className="text-red-500">*</span></label>
                    <select className="text-gray-600 p-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all">
                        <option>Closing</option>
                    </select>
                </div>
                <div className="flex flex-col mt-1 space-y-1">
                    <label className="text-gray-600">Campaign Parent<span className="text-red-500">*</span></label>
                    <select className="text-gray-600 p-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all">
                        <option>Infaq Shodaqoh Terikat</option>
                    </select>
                </div>
                <div className="flex flex-col mt-1 space-y-1">
                    <label className="text-gray-600">Campaign<span className="text-red-500">*</span></label>
                    <div
                        className="p-3 w-full hover:bg-orange-100 flex items-center space-y-0 hover:cursor-pointer rounded transition-all"
                        onClick={() => setShowCampaignInput(!showCampaignInput)}
                    >
                        <input
                            type="checkbox"
                            className="accent-[#F26532]"
                            checked={showCampaignInput}
                            onChange={() => setShowCampaignInput(!showCampaignInput)}
                        />
                        <div className="flex flex-col ml-3">
                            <label className="text-gray-700">Data Campaign</label>
                            <span className="text-sm text-gray-400">Bersumber dari Zains</span>
                        </div>
                    </div>
                    {showCampaignInput && (
                        <input
                            type="text"
                            placeholder="Masukkan data campaign"
                            className="text-gray-600 border border-gray-200 p-2 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all"
                        />
                    )}
                </div>
                <div className="flex flex-col mt-1 space-y-1">
                    <label className="text-gray-600">Cross Selling</label>
                    <select className="text-gray-600 p-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all">
                        <option>Infaq Shodaqoh Terikat</option>
                    </select>
                </div>
                <div className="flex flex-col mt-1 space-y-1">
                    <label className="text-gray-600">Deskripsi</label>
                    <input type="text" className="text-gray-600 border border-gray-200 p-2 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all" />
                </div>
                <button className="flex p-2 bg-[#F26532] text-white font-semibold justify-center rounded-lg mt-2 w-full hover:cursor-pointer hover:opacity-50 transition-all">Save</button>

                {/* Tombol Show More dengan event handler */}
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="flex p-2 bg-white text-[#F26532] font-semibold justify-center rounded-lg mt-2 w-full hover:cursor-pointer hover:opacity-50 transition-all"
                >
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </div>
            {/* Konten tambahan muncul di bawah tombol saat showMore true */}
            {showMore && (
                <div>
                    <div className="mt-5">
                        <div className="flex justify-between my-2 items-center">
                            <h1 className="md:text-xl text-md font-bold text-[#F26532]">Riwayat Donasi</h1>
                            <Link href="/" className="px-2 py-1 rounded text-[#F26532] font-semibold hover:opacity-50 flex items-center transition-all">See More <ChevronRight /></Link>
                        </div>
                        <div className="flex flex-col space-y-1 mt-3 bg-white shadow p-3 rounded-lg">
                            <div className="flex justify-between">
                                <div className="text-left space-y-2">
                                    <h1 className="text-gray-700 font-semibold">14-08-2025</h1>
                                    <h1 className="text-gray-600">Infaq/Shadaqoh</h1>
                                    <button className="px-2 py-1 bg-[#F26532] text-white flex items-center hover:opacity-50 hover:cursor-pointer transition-all rounded"><Download size={18} className="mr-2" />Kwitansi</button>
                                </div>
                                <div className="flex flex-col items-end space-y-2">
                                    <h1 className="text-gray-500">Midtrans - Donol</h1>
                                    <h1 className="font-bold text-[#F26532]">Rp.10,000</h1>
                                    <button className="px-2 py-1 bg-[#F26532] text-white flex items-center rounded hover:cursor-pointer hover:opacity-50 transition-all"><Download size={18} className="mr-2" />Sertifikat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex justify-between my-2 items-center">
                            <h1 className="md:text-xl text-md font-bold text-[#F26532]">Riwayat Prospek</h1>
                            <Link href="/" className="px-2 py-1 rounded text-[#F26532] font-semibold hover:opacity-50 flex items-center transition-all">See More <ChevronRight /></Link>
                        </div>
                        <div className="flex flex-col space-y-1 mt-3 bg-white shadow p-3 rounded-lg">
                            <div className="flex justify-between">
                                <div className="text-left space-y-2">
                                    <h1 className="text-gray-700">14-08-2025</h1>
                                    <h1 className="text-gray-600">Infaq/Shadaqoh</h1>
                                    <button className="px-2 py-1 bg-[#F26532] text-white flex items-center hover:opacity-50 hover:cursor-pointer transition-all rounded"><Download size={18} className="mr-2" />Kwitansi</button>
                                </div>
                                <div className="flex flex-col items-end space-y-2">
                                    <h1 className="text-gray-500">Midtrans - Donol</h1>
                                    <h1 className="font-bold text-[#F26532]">Rp.10,000</h1>
                                    <button className="px-2 py-1 bg-[#F26532] text-white flex items-center rounded hover:cursor-pointer hover:opacity-50 transition-all"><Download size={18} className="mr-2" />Sertifikat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex justify-between my-2 items-center">
                            <h1 className="md:text-xl text-md font-bold text-[#F26532]">Riwayat Aduan</h1>
                            <Link href="/" className="px-2 py-1 rounded text-[#F26532] font-semibold hover:opacity-50 flex items-center transition-all">See More <ChevronRight /></Link>
                        </div>
                        <div className="flex flex-col space-y-1 mt-3 bg-white shadow p-3 rounded-lg">
                            <div className="flex justify-between">
                                <div className="text-left space-y-2">
                                    <h1 className="text-gray-700">14-08-2025</h1>
                                    <h1 className="text-gray-600">Infaq/Shadaqoh</h1>
                                    <button className="px-2 py-1 bg-[#F26532] text-white flex items-center hover:opacity-50 hover:cursor-pointer transition-all rounded"><Download size={18} className="mr-2" />Kwitansi</button>
                                </div>
                                <div className="flex flex-col items-end space-y-2">
                                    <h1 className="text-gray-500">Midtrans - Donol</h1>
                                    <h1 className="font-bold text-[#F26532]">Rp.10,000</h1>
                                    <button className="px-2 py-1 bg-[#F26532] text-white flex items-center rounded hover:cursor-pointer hover:opacity-50 transition-all"><Download size={18} className="mr-2" />Sertifikat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex justify-between my-2 items-center">
                            <h1 className="md:text-xl text-md font-bold text-[#F26532]">Daftar Anak Juara</h1>
                            <Link href="/" className="px-2 py-1 rounded text-[#F26532] font-semibold hover:opacity-50 flex items-center transition-all">See More <ChevronRight /></Link>
                        </div>
                        <div className="flex flex-col space-y-1 mt-3 bg-white shadow p-3 rounded-lg">
                            <div className="flex justify-between">
                                <div className="text-left space-y-2">
                                    <h1 className="text-gray-700 font-semibold">Muhammad Revy Rizqy P.</h1>
                                    <h1 className="text-[#F26532]">SD</h1>
                                </div>
                                <div className="flex flex-col items-end space-y-2">
                                    <h1 className="text-gray-500">Infaq Pendidikan Siswa SD Juara</h1>
                                    <h1 className="font-bold text-[#F26532]">Rp.333,000</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex justify-between my-2 items-center">
                            <h1 className="md:text-xl text-md font-bold text-[#F26532]">Laporan Beasiswa</h1>
                            <Link href="/" className="px-2 py-1 rounded text-[#F26532] font-semibold hover:opacity-50 flex items-center transition-all">See More <ChevronRight /></Link>
                        </div>
                        <div className="flex flex-col space-y-1 mt-3 bg-white shadow p-3 rounded-lg">
                            <div className="flex justify-between">
                                <div className="text-left space-y-2">
                                    <h1 className="text-gray-700">Muhammad Dzaky</h1>
                                    <h1 className="text-[#F26532]">SD</h1>
                                </div>
                                <div className="flex flex-col items-end space-y-2">
                                    <h1 className="text-gray-500">Januari - Juli 2025</h1>
                                    <button className="px-2 py-1 bg-[#F26532] text-white flex items-center hover:opacity-50 hover:cursor-pointer transition-all rounded"><Download size={18} className="mr-2" />Download</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
