export default function About() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Tentang Kami</h1>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src="https://raw.githubusercontent.com/VooTzz/MINO-AI/main/assets/images/about-us.jpg"
          alt="Tentang Kami"
          className="w-full md:w-1/2 rounded-lg shadow"
        />

        <div className="text-justify">
          <p className="mb-4">
            <strong>VooTzz Fried Chicken</strong> didirikan dengan cinta dan rasa peduli terhadap
            kualitas makanan cepat saji lokal. Kami menghadirkan ayam goreng renyah, lezat, dan
            berbumbu khas yang tidak hanya mengenyangkan, tapi juga menggugah selera.
          </p>
          <p className="mb-4">
            Berawal dari dapur kecil, kini VooTzz telah melayani ribuan pelanggan yang puas
            di seluruh Indonesia. Kami berkomitmen menjaga kualitas, kebersihan, dan pelayanan
            terbaik untuk setiap pelanggan yang datang.
          </p>
          <p>
            Ayam goreng kami dibuat dari bahan segar, tanpa pengawet, dan digoreng dengan teknik
            khusus agar menghasilkan kulit krispi dan daging juicy yang sempurna.
          </p>
        </div>
      </div>
    </div>
  );
}
