import React, { useState } from 'react';

export default function EventForm() {
  const [form, setForm] = useState({ name: '', category: '', capacity: 0 });
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
      const res = await fetch('http://54.206.27.79:4002/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, capacity: Number(form.capacity) }),
      });
      const data = await res.json();
      if (res.ok) setResult('Event created: ' + JSON.stringify(data));
      else setResult('Error: ' + (data.error || res.statusText));
    } catch (err) {
      setResult('Network error');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '32px 0', maxWidth: 400 }}>
      <h2>Create Event</h2>
      <input
        name="name"
        placeholder="Event Name"
        value={form.name}
        onChange={handleChange}
        required
        style={{ display: 'block', marginBottom: 12, width: '100%', padding: 8 }}
      />
      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        required
        style={{ display: 'block', marginBottom: 12, width: '100%', padding: 8 }}
      />
      <input
        name="capacity"
        placeholder="Capacity"
        type="number"
        value={form.capacity}
        onChange={handleChange}
        required
        min={1}
        style={{ display: 'block', marginBottom: 12, width: '100%', padding: 8 }}
      />
      <button type="submit" disabled={loading} style={{ padding: '8px 24px' }}>
        {loading ? 'Creating...' : 'Create Event'}
      </button>
      {result && <div style={{ marginTop: 16 }}>{result}</div>}
    </form>
  );
}
