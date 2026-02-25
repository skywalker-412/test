import React, { useState } from 'react';

export default function PaymentForm() {
  const [form, setForm] = useState({ bookingId: '', amount: 0 });
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('http://54.206.27.79:4004/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, amount: Number(form.amount) }),
      });
      const data = await res.json();
      if (res.ok) setResult('Payment created: ' + JSON.stringify(data));
      else setResult('Error: ' + (data.error || res.statusText));
    } catch (err) {
      setResult('Network error');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '32px 0', maxWidth: 400 }}>
      <h2>Create Payment</h2>
      <input
        name="bookingId"
        placeholder="Booking ID"
        value={form.bookingId}
        onChange={handleChange}
        required
        style={{ display: 'block', marginBottom: 12, width: '100%', padding: 8 }}
      />
      <input
        name="amount"
        placeholder="Amount"
        type="number"
        value={form.amount}
        onChange={handleChange}
        required
        min={1}
        style={{ display: 'block', marginBottom: 12, width: '100%', padding: 8 }}
      />
      <button type="submit" disabled={loading} style={{ padding: '8px 24px' }}>
        {loading ? 'Processing...' : 'Create Payment'}
      </button>
      {result && <div style={{ marginTop: 16 }}>{result}</div>}
    </form>
  );
}
