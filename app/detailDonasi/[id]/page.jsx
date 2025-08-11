"use client";

import { useParams } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

export default function DetailDonasi() {
    const { id } = useParams();

    return (
        <div className="p-1">
            <div className="flex items-center mb-6">
                <Link href="/" className="hover:bg-orange-200 p-1 rounded-full mr-1 transition-all"><ArrowLeft className="text-[#F26532] hover:cursor-pointer" /></Link>
                <div className="flex flex-row items-center justify-between w-full">
                    <h1 className="md:text-2xl text-xl text-[#F26532] font-bold p-1 mr-3">List Donatur</h1>
                    <div className="flex items-center">
                        <p className="mr-3 text-gray-500 select-none text-sm">Download : </p>
                        <button className="p-2 bg-green-600 text-white hover:bg-green-700 hover:cursor-pointer transition-all rounded-full"><Download /></button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="bg-white p-5 w-full flex-1 shadow rounded-lg justify-between">
                    <div className="mb-4 flex flex-row justify-between">
                        <div>
                            <p className="font-bold text-gray-600 md:text-lg text-sm">Wakaf Tunai Produktif</p>
                            <p className="text-xs text-gray-600 md:text-sm">Wakaf Tunai Produktif</p>
                        </div>
                        <div className="flex flex-col text-right">
                            <p className="font-bold text-gray-600">Muhammad Revy</p>
                            <p className="text-[#F26532] font-bold">Rp. 10.000</p>
                        </div>
                    </div>
                    <div className="flex flex-row md:justify-start space-x-2">
                        <button className="flex flex-row items-center p-2 rounded font-bold text-[#F26532] bg-white border border-[#F26532] md:text-md text-sm hover:opacity-50 hover:cursor-pointer transition-all"><Download className="mr-2 text-[#F26532]" />Kwitansi</button>
                        <button className="flex flex-row items-center p-2 rounded font-bold text-white bg-[#F26532] md:text-md text-sm hover:opacity-80 hover:cursor-pointer transition-all"><Download className="mr-2 text-white" />Sertifikat</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
