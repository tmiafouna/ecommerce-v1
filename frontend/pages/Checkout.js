// src/pages/Checkout.jsx
import { useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [form, setForm] = useState({ address: "", productId: "", quantity: 1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:3001/api/orders", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Commande passée avec succès !");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la commande");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Finaliser la commande
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Adresse de livraison"
          className="w-full px-4 py-3 border rounded-lg"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="ID du produit"
          className="w-full px-4 py-3 border rounded-lg"
          value={form.productId}
          onChange={(e) => setForm({ ...form, productId: e.target.value })}
          required
        />
        <input
          type="number"
          min={1}
          className="w-full px-4 py-3 border rounded-lg"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
        >
          Valider la commande
        </button>
      </form>
    </div>
  );
};

export default Checkout;
