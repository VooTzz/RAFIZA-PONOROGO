interface Promo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const promoList: Promo[] = [
  {
    id: "promo1",
    title: "Paket Hemat Ayam + Nasi",
    description: "Nikmati ayam goreng + nasi hanya Rp 19.000!",
    imageUrl: "https://raw.githubusercontent.com/VooTzz/MINO-AI/main/assets/images/promo1.jpg",
  },
  {
    id: "promo2",
    title: "Beli 1 Gratis 1",
    description: "Beli 1 ayam crispy, gratis 1 untuk temanmu 🍗👬",
    imageUrl: "https://raw.githubusercontent.com/VooTzz/MINO-AI/main/assets/images/promo2.jpg",
  },
];

export default function Promo() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-center mb-6">🔥 Promo Spesial</h1>

      <div className="grid">
        {promoList.map((promo) => (
          <div key={promo.id} className="product-card">
            <img src={promo.imageUrl} alt={promo.title} />
            <h3 className="mt-2 text-lg font-semibold">{promo.title}</h3>
            <p className="text-sm text-gray-600">{promo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
