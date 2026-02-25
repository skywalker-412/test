import React, { useState } from 'react';

export default function ReviewForm() {
  const [form, setForm] = useState({ eventId: '', userId: '', rating: 5, comment: '' });
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('http://54.206.27.79:4006/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, rating: Number(form.rating) }),
      });
      const data = await res.json();
      if (res.ok) setResult('Review submitted: ' + JSON.stringify(data));
      else setResult('Error: ' + (data.error || res.statusText));
    } catch (err) {
      setResult('Network error');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '32px 0', maxWidth: 400 }}>
      <h2>Submit Review</h2>
      <input
        name="eventId"
        placeholder="Event ID"
        value={form.eventId}
        onChange={handleChange}
        required
        style={{ display: 'block', marginBottom: 12, width: '100%', padding: 8 }}
      />
      <input
        name="userId"
        placeholder="User ID"
        value={form.userId}
        onChange={handleChange}
        required
        style={{ display: 'block', marginBottom: 12, width: '100%', padding: 8 }}
      />
      <input
        name="rating"
        placeholder="Rating (1-5)"
        type="number"
        min={1}
        max={5}
        value={form.rating}
        onChange={handleChange}
        required
        style={{ display: 'block', marginBottom: 12, width: '100%', padding: 8 }}
      />
      <textarea
        name="comment"
        placeholder="Comment"
        value={form.comment}
        onChange={handleChange}
        required
        style={{ display: 'block', marginBottom: 12, width: '100%', padding: 8 }}
      />
      <button type="submit" disabled={loading} style={{ padding: '8px 24px' }}>
        {loading ? 'Submitting...' : 'Submit Review'}
      </button>
      {result && <div style={{ marginTop: 16 }}>{result}</div>}
    </form>
  );
}
