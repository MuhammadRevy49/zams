"use client";
import { Calendar, Users, UserCheck, Percent, UserPlus, ArrowLeft, ArrowDown } from "lucide-react";
import { useState } from "react";

export default function RaportSDM() {
  const [tabel, setTabel] = useState([
    {
      judul: "Dana",
      status: "Bahaya",
      target: "Target",
      jumlaht: "0",
      real: "Realisasi",
      jumlahre: "313000",
      persen1: "0%",
      st: "Sisa Target",
      jumlahst: "0",
      ctl: "Capaian Tahun Lalu",
      jumlahctl: "6333000",
      persen2: "-93%"
    },
    {
      judul: "Transaksi",
      status: "Bahaya",
      target: "Target",
      jumlaht: "0",
      real: "Realisasi",
      jumlahre: "313000",
      persen1: "0%",
      st: "Sisa Target",
      jumlahst: "0",
      ctl: "Capaian Tahun Lalu",
      jumlahctl: "6333000",
      persen2: "-93%"
    },
    {
      judul: "Donatur Baru",
      status: "Bahaya",
      target: "Target",
      jumlaht: "0",
      real: "Realisasi",
      jumlahre: "313000",
      persen1: "0%",
      st: "Sisa Target",
      jumlahst: "0",
      ctl: "Capaian Tahun Lalu",
      jumlahctl: "6333000",
      persen2: "-93%"
    },
    {
      judul: "Donatur Existing",
      status: "Bahaya",
      target: "Target",
      jumlaht: "0",
      real: "Realisasi",
      jumlahre: "313000",
      persen1: "0%",
      st: "Sisa Target",
      jumlahst: "0",
      ctl: "Capaian Tahun Lalu",
      jumlahctl: "6333000",
      persen2: "-93%"
    },
    {
      judul: "Prospek",
      status: "Bahaya",
      target: "Target",
      jumlaht: "0",
      real: "Realisasi",
      jumlahre: "313000",
      persen1: "0%",
      st: "Sisa Target",
      jumlahst: "0",
      ctl: "Capaian Tahun Lalu",
      jumlahctl: "6333000",
      persen2: "-93%"
    },
  ]);

  const data = {
    tanggal: "2025-08-05 - 2025-08-05",
    donaturAnda: 120,
    berdonasi: 85,
    persentase: 70,
    donaturTerprospek: 40,
    jumlahProspek: 60,
  };

  return (
    <div className="p-1 space-y-4">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 text-center border border-orange-200">
        <div className="flex content-center md:hidden">
          <a href="/" className="text-[#F26532] font-bold md:hidden">
            <ArrowLeft className="mr-3" />
          </a>
          <h1 className="text-xl font-bold text-[#F26532] mb-4">
            Raport
          </h1>
        </div>
        <div className="flex items-center justify-center mt-2 text-gray-600 gap-2">
          <Calendar size={18} />
          <span>{data.tanggal}</span>
        </div>
        <hr className="my-3 border-orange-300 w-1/2 mx-auto" />
        <p className="text-gray-500">
          Berhasil mencapai performance Fundraising pada masing-masing komponen
        </p>
      </div>

      <div>
        <p className="p-1 text-gray-600">Pilih Tanggal</p>
        <input type="date" className="w-full text-gray-700 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all" />
      </div>

      {/* Data Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <Users className="text-orange-500 mb-2" size={28} />
          <p className="text-sm text-gray-700">Donatur Anda</p>
          <p className="text-2xl font-bold text-gray-700">{data.donaturAnda}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <UserCheck className="text-green-500 mb-2" size={28} />
          <p className="text-sm text-gray-500">Berdonasi</p>
          <p className="text-2xl font-bold text-gray-700">{data.berdonasi}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <Percent className="text-blue-500 mb-2" size={28} />
          <p className="text-sm text-gray-500">Persentase</p>
          <p className="text-2xl font-bold text-gray-700">{data.persentase}%</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <UserCheck className="text-purple-500 mb-2" size={28} />
          <p className="text-sm text-gray-500">Donatur Terprospek</p>
          <p className="text-2xl font-bold text-gray-700">{data.donaturTerprospek}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <UserPlus className="text-pink-500 mb-2" size={28} />
          <p className="text-sm text-gray-500">Jumlah Prospek</p>
          <p className="text-2xl font-bold text-gray-700">{data.jumlahProspek}</p>
        </div>
      </div>

      {tabel.map((data, index) => (
        <div key={index} className="w-full flex flex-col bg-orange-50 rounded shadow p-2 space-y-1">
          <h1 className="text-center font-bold text-gray-700">{data.judul}</h1>
          <h2 className="text-center bg-red-500 rounded text-white font-semibold">{data.status}</h2>
          <div className="mt-2 text-gray-600 space-y-1">
            <div className="flex justify-between">
              <p>{data.target}</p>
              <p>{data.jumlaht}</p>
            </div>
            <div className="flex justify-between">
              <p>{data.real}</p>
              <p>{data.jumlahre}</p>
            </div>
            <div className="flex justify-between">
              <p>{data.persen1}</p>
              <p></p>
            </div>
            <div className="flex justify-between">
              <p>{data.st}</p>
              <p>{data.jumlahst}</p>
            </div>
            <div className="flex justify-between">
              <p>{data.ctl}</p>
              <p>{data.jumlahctl}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <ArrowDown size={20} className="text-red-500 mr-1" />
                <p>{data.persen2}</p>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
