interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Apakah ayam goreng VooTzz halal?",
    answer: "Ya, semua bahan dan proses produksi kami dijamin 100% halal dan telah bersertifikat.",
  },
  {
    question: "Apakah tersedia layanan pesan antar?",
    answer: "Ya, kami menyediakan layanan pesan antar melalui aplikasi ojek online dan juga langsung melalui website kami.",
  },
  {
    question: "Apakah ada menu khusus untuk anak-anak?",
    answer: "Tentu! Kami menyediakan paket hemat dan mini burger yang cocok untuk anak-anak.",
  },
  {
    question: "Bagaimana cara membuka franchise VooTzz Chicken?",
    answer: "Silakan hubungi kami melalui halaman Kontak untuk informasi lengkap mengenai franchise.",
  },
];

export default function FAQ() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-center mb-6">❓ FAQ - Pertanyaan Umum</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">{faq.question}</h2>
            <p className="text-sm text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
