import React, { useState } from 'react';

export default function BookingForm() {
  const [form, setForm] = useState({ userId: '', eventId: '', tickets: 1 });
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
      const res = await fetch('http://54.206.27.79:4003/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, tickets: Number(form.tickets) }),
      });
      const data = await res.json();
      if (res.ok) setResult('Booking created: ' + JSON.stringify(data));
      else setResult('Error: ' + (data.error || res.statusText));
    } catch (err) {
      setResult('Network error');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '32px 0', maxWidth: 400 }}>
      <h2>Create Booking</h2>
      <input
        name="userId"
        placeholder="User ID"
        value={form.userId}
        onChange={handleChange}
        required
        style={{ display: 'block', marginBottom: 12, width: '100%', padding: 8 }}
      />
      <input
        name="eventId"
        placeholder="Event ID"
        value={form.eventId}
        onChange={handleChange}
        required
        style={{ display: 'block', marginBottom: 12, width: '100%', padding: 8 }}
      />
      <input
        name="tickets"
        placeholder="Tickets"
        type="number"
        value={form.tickets}
        onChange={handleChange}
        required
        min={1}
        style={{ display: 'block', marginBottom: 12, width: '100%', padding: 8 }}
      />
      <button type="submit" disabled={loading} style={{ padding: '8px 24px' }}>
        {loading ? 'Booking...' : 'Create Booking'}
      </button>
      {result && <div style={{ marginTop: 16 }}>{result}</div>}
    </form>
  );
}
