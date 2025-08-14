"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Form() {
    const [showCampaignInput, setShowCampaignInput] = useState(true);

    return (
        <div className="w-full">
            <div className="flex items-center">
                <Link href="/prospek" className="hover:bg-orange-100 rounded-full p-1 transition-all">
                    <ArrowLeft className="text-[#F26532]" />
                </Link>
                <h1 className="p-2 font-bold text-[#F26532]">Muhammad Revy Rizqy P</h1>
            </div>
            <div className="bg-white p-3 rounded-lg shadow">
                <h1 className="text-[#F26532] font-bold md:text-xl text-md">Form</h1>
                <div className="flex flex-col mt-1 space-y-1">
                    <label className="text-gray-600">Tanggal Prospect</label>
                    <input type="date" className="border border-gray-200 p-2 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all" />
                </div>
                <div className="flex flex-col mt-1 space-y-1">
                    <label className="text-gray-600">Potensi</label>
                    <input type="text" className="border border-gray-200 p-2 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all" />
                </div>
                <div className="flex flex-col mt-1 space-y-1">
                    <label className="text-gray-600">Media<span className="text-red-500">*</span></label>
                    <select className="p-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all">
                        <option>Whatsapp</option>
                    </select>
                </div>
                <div className="flex flex-col mt-1 space-y-1">
                    <label className="text-gray-600">Respon<span className="text-red-500">*</span></label>
                    <select className="p-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all">
                        <option>Closing</option>
                    </select>
                </div>
                <div className="flex flex-col mt-1 space-y-1">
                    <label className="text-gray-600">Campaign Parent<span className="text-red-500">*</span></label>
                    <select className="p-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all">
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
                            className="border border-gray-200 p-2 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all"
                        />
                    )}
                </div>
                <div className="flex flex-col mt-1 space-y-1">
                    <label className="text-gray-600">Cross Selling</label>
                    <select className="p-2 border border-gray-200 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all">
                        <option>Infaq Shodaqoh Terikat</option>
                    </select>
                </div>
                <div className="flex flex-col mt-1 space-y-1">
                    <label className="text-gray-600">Deskripsi</label>
                    <input type="text" className="border border-gray-200 p-2 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all" />
                </div>
                <button className="flex p-2 bg-[#F26532] text-white font-semibold justify-center rounded-lg mt-2 w-full hover:cursor-pointer hover:opacity-50 transition-all">Save</button>
            </div>
        </div>
    );
}
