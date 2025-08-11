import { useRouter } from "next/router";

export default function DetailProgram() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Detail Program</h1>
      <p>ID Program: {id}</p>

      {/* Nanti di sini kamu bisa fetch data dari API berdasarkan ID */}
    </div>
  );
}
