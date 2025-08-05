interface Outlet {
  id: string;
  city: string;
  address: string;
  mapsUrl?: string;
}

const outlets: Outlet[] = [
  {
    id: "1",
    city: "Jakarta",
    address: "Jl. Sudirman No. 45, Jakarta Pusat",
    mapsUrl: "https://maps.google.com/?q=Jl.+Sudirman+No.+45,+Jakarta+Pusat",
  },
  {
    id: "2",
    city: "Bandung",
    address: "Jl. Asia Afrika No. 23, Bandung",
    mapsUrl: "https://maps.google.com/?q=Jl.+Asia+Afrika+No.+23,+Bandung",
  },
  {
    id: "3",
    city: "Surabaya",
    address: "Jl. Basuki Rahmat No. 12, Surabaya",
    mapsUrl: "https://maps.google.com/?q=Jl.+Basuki+Rahmat+No.+12,+Surabaya",
  },
];

export default function Outlet() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-center mb-6">📍 Lokasi Outlet Kami</h1>

      <div className="space-y-6">
        {outlets.map((outlet) => (
          <div key={outlet.id} className="p-4 border rounded shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-red-700">{outlet.city}</h2>
            <p className="text-sm text-gray-700 mb-1">{outlet.address}</p>
            {outlet.mapsUrl && (
              <a
                href={outlet.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm"
              >
                Lihat di Google Maps
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
