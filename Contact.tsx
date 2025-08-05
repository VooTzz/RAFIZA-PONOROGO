import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih, ${formData.name}! Pesanmu sudah dikirim.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Hubungi Kami</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Info Kontak */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Informasi Kontak</h2>
          <p><strong>Alamat:</strong> Jl. Fried Chicken No. 99, Jakarta</p>
          <p><strong>Telepon:</strong> 0812-3456-7890</p>
          <p><strong>Email:</strong> vootzz.chicken@gmail.com</p>
          <p><strong>Jam Operasional:</strong> 10.00 - 22.00 WIB</p>
        </div>

        {/* Form Kontak */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold">Pesan</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <button type="submit" className="btn w-full">Kirim Pesan</button>
        </form>
      </div>
    </div>
  );
}
