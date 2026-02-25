import React from 'react';

const services = [
  { name: 'API Gateway', port: 4000 },
  { name: 'User Service', port: 4001 },
  { name: 'Event Service', port: 4002 },
  { name: 'Booking Service', port: 4003 },
  { name: 'Payment Service', port: 4004 },
  { name: 'Notification Service', port: 4005 },
  { name: 'Review Service', port: 4006 },
];

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 32 }}>
      <h1>Smart Event Booking Platform</h1>
      <p>Microservices Status Dashboard</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {services.map((svc) => (
          <li key={svc.port} style={{ margin: '16px 0' }}>
            <a
              href={`http://localhost:${svc.port}/`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 20,
                color: '#0070f3',
                textDecoration: 'none',
                border: '1px solid #eee',
                borderRadius: 8,
                padding: '12px 24px',
                display: 'inline-block',
                background: '#fafbfc',
                boxShadow: '0 2px 8px #eee',
              }}
            >
              {svc.name} (:{svc.port})
            </a>
          </li>
        ))}
      </ul>
      <p style={{ color: '#888', marginTop: 40 }}>
        Click a service to open its endpoint in a new tab.
      </p>
    </div>
  );
}
