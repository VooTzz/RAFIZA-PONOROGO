import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container py-16 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Halaman Tidak Ditemukan</h2>
      <p className="mb-6 text-gray-600">
        Sepertinya kamu nyasar ke halaman yang tidak tersedia. 😅
      </p>
      <Link to="/" className="btn">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
