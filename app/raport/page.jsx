"use client";
import { Calendar, Users, UserCheck, Percent, UserPlus } from "lucide-react";

export default function RaportSDM() {
  const data = {
    tanggal: "2025-08-05 - 2025-08-05",
    donaturAnda: 120,
    berdonasi: 85,
    persentase: 70,
    donaturTerprospek: 40,
    jumlahProspek: 60,
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-orange-200">
        <h1 className="text-2xl font-bold text-orange-600">Raport SDM</h1>
        <div className="flex items-center justify-center mt-2 text-gray-600 gap-2">
          <Calendar size={18} />
          <span>{data.tanggal}</span>
        </div>
        <hr className="my-3 border-orange-300 w-1/2 mx-auto" />
        <p className="text-gray-500">
          Berhasil mencapai performance Fundraising pada masing-masing komponen
        </p>
      </div>

      {/* Data Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <Users className="text-orange-500 mb-2" size={28} />
          <p className="text-sm text-gray-500">Donatur Anda</p>
          <p className="text-2xl font-bold">{data.donaturAnda}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <UserCheck className="text-green-500 mb-2" size={28} />
          <p className="text-sm text-gray-500">Berdonasi</p>
          <p className="text-2xl font-bold">{data.berdonasi}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <Percent className="text-blue-500 mb-2" size={28} />
          <p className="text-sm text-gray-500">Persentase</p>
          <p className="text-2xl font-bold">{data.persentase}%</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <UserCheck className="text-purple-500 mb-2" size={28} />
          <p className="text-sm text-gray-500">Donatur Terprospek</p>
          <p className="text-2xl font-bold">{data.donaturTerprospek}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <UserPlus className="text-pink-500 mb-2" size={28} />
          <p className="text-sm text-gray-500">Jumlah Prospek</p>
          <p className="text-2xl font-bold">{data.jumlahProspek}</p>
        </div>
      </div>
    </div>
  );
}
