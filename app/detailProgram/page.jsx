"use client";

import { useParams, useSearchParams } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

export default function DetailProgram() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const dataProgram = [
        {
            id: 1,
            nama: "Muhammad Revy",
            jenis: "Zakat Penghasilan",
            kode: "01100830123",
            tanggal: "08/08/2025",
            jumlah: "Rp. 3,800,000"
        },
        {
            id: 2,
            nama: "Muhammad Dzaky",
            jenis: "Zakat Penghasilan",
            kode: "01100830124",
            tanggal: "09/08/2025",
            jumlah: "Rp. 5,000,000"
        }
    ];

    // Cari data berdasarkan id dari URL
    const program = dataProgram.find((item) => item.id === parseInt(id));

    if (!program) {
        return (
            <div className="p-4 text-center text-gray-500">
                Data tidak ditemukan.
            </div>
        );
    }

    return (
        <div className="p-1">
            <div className="flex items-center mb-6">
                <Link href="/" className="hover:bg-orange-200 p-1 rounded-full mr-1 transition-all">
                    <ArrowLeft className="text-[#F26532] hover:cursor-pointer" />
                </Link>
                <div className="flex flex-row items-center justify-between w-full">
                    <h1 className="md:text-2xl text-xl text-[#F26532] font-bold p-1 mr-3">
                        Detail Program
                    </h1>
                    <div className="flex items-center">
                        <p className="mr-3 text-gray-500 select-none">Download : </p>
                        <button className="p-2 bg-green-600 text-white hover:bg-green-700 hover:cursor-pointer transition-all rounded-full">
                            <Download />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="bg-white p-5 w-full flex-1 shadow rounded-lg justify-between">
                    <div className="mb-4 flex flex-row justify-between">
                        <div>
                            <p className="font-bold text-gray-600 md:text-lg text-sm">
                                {program.nama}
                            </p>
                            <p className="text-xs text-gray-600 md:text-sm">{program.jenis}</p>
                        </div>
                        <div className="flex flex-col text-right">
                            <p className="font-bold text-gray-600">{program.kode}</p>
                            <p className="text-xs text-gray-500">{program.tanggal}</p>
                            <p className="text-[#F26532] font-bold">{program.jumlah}</p>
                        </div>
                    </div>

                    <div className="flex flex-row md:justify-start space-x-2">
                        <button className="flex flex-row items-center p-2 rounded font-bold text-white bg-[#F26532] hover:opacity-80 hover:cursor-pointer transition-all">
                            <Download className="mr-3 text-white" />Kwitansi
                        </button>
                        <button className="flex flex-row items-center p-2 rounded font-bold text-white bg-[#F26532] hover:opacity-80 hover:cursor-pointer transition-all">
                            <Download className="mr-3 text-white" />Sertifikat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
