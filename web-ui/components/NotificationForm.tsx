import React, { useState } from 'react';

export default function NotificationForm() {
  const [form, setForm] = useState({ email: '', message: '' });
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
      const res = await fetch('http://54.206.27.79:4005/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) setResult('Notification sent: ' + JSON.stringify(data));
      else setResult('Error: ' + (data.error || res.statusText));
    } catch (err) {
      setResult('Network error');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '32px 0', maxWidth: 400 }}>
      <h2>Send Notification</h2>
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        style={{ display: 'block', marginBottom: 12, width: '100%', padding: 8 }}
      />
      <input
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        required
        style={{ display: 'block', marginBottom: 12, width: '100%', padding: 8 }}
      />
      <button type="submit" disabled={loading} style={{ padding: '8px 24px' }}>
        {loading ? 'Sending...' : 'Send Notification'}
      </button>
      {result && <div style={{ marginTop: 16 }}>{result}</div>}
    </form>
  );
}
