import { useState } from "react";

export default function Order() {
  const [formData, setFormData] = useState({
    name: "",
    menu: "",
    quantity: 1,
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih, ${formData.name}! Pesanan kamu: ${formData.quantity} ${formData.menu} akan dikirim ke ${formData.address}.`);
    // Reset form
    setFormData({
      name: "",
      menu: "",
      quantity: 1,
      address: "",
    });
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Pesan Sekarang</h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold">Nama Lengkap</label>
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
          <label htmlFor="menu" className="block font-semibold">Pilih Menu</label>
          <select
            id="menu"
            name="menu"
            required
            value={formData.menu}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">-- Pilih Menu --</option>
            <option value="Ayam Goreng Crispy">Ayam Goreng Crispy</option>
            <option value="Burger Ayam">Burger Ayam</option>
            <option value="Paket Hemat">Paket Hemat</option>
          </select>
        </div>

        <div>
          <label htmlFor="quantity" className="block font-semibold">Jumlah</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            required
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="address" className="block font-semibold">Alamat Pengiriman</label>
          <textarea
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button type="submit" className="btn w-full">
          Kirim Pesanan
        </button>
      </form>
    </div>
  );
}
