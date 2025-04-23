import React, { useState } from 'react';

export default function ScalingBot() {
  const [ads, setAds] = useState([
    {
      name: 'Ad Set A',
      platform: 'Meta',
      roas: 4.2,
      spend: '₹7,200',
      action: 'Scale by 30% ✅'
    },
    {
      name: 'Ad Set B',
      platform: 'TikTok',
      roas: 0.8,
      spend: '₹4,800',
      action: 'Paused ❌'
    },
    {
      name: 'Ad Set C',
      platform: 'Meta',
      roas: 2.6,
      spend: '₹9,300',
      action: 'Stable ✅'
    }
  ]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>📈 ScalingBot — Ad Performance Dashboard</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Ad Set</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Platform</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>ROAS</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Spend</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {ads.map((ad, idx) => (
            <tr key={idx}>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{ad.name}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{ad.platform}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{ad.roas}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{ad.spend}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{ad.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
