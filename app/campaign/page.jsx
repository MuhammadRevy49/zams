"use client";

import { useState } from "react";
import { Search, X, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function CampaignPage() {
    const [search, setSearch] = useState("");

    const campaigns = [
        {
            title: "Zakat Penghasilan",
            description: "Tutup Akhir Tahun dengan Keberkahan Tunaikan Zakat Penghasilan 2,5% dari penghasilan bersihkan harta dan jiwamu",
            image: "/zakat.png", // ganti sesuai path gambar
            actions: ["Get Link", "Whatsapp"],
        },
        {
            title: "Dana NonHalal",
            description: "Dana Non Halal untuk program sosial yang bermanfaat",
            image: "/dana.png",
            actions: ["Get Link", "Whatsapp"],
        },
    ];

    const filtered = campaigns.filter(c =>
        c.title.toLowerCase().includes(search.toLowerCase())
    );

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
            <div className="flex gap-2 mb-6">
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
                <button className="bg-[#F26532] text-white px-6 py-2 rounded-lg shadow hover:opacity-80 hover:cursor-pointer transition">
                    Search
                </button>
            </div>

            {/* Campaign List */}
            <div className="space-y-4">
                {filtered.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-lg shadow p-4 flex gap-4 items-center"
                    >
                        <div className="w-40 h-28 relative rounded overflow-hidden flex-shrink-0">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-lg font-bold text-[#F26532]">
                                {item.title}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {item.description}
                            </p>
                            <div className="flex gap-4 mt-2 text-sm text-gray-700">
                                {item.actions.map((action, i) => (
                                    <button key={i} className="hover:underline">
                                        {action}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
