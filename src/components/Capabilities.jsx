const items = [
  'Strategy',
  'Digital marketing',
  'HR',
  'Finance',
  'Custom software',
  'Social media management',
  'GST',
  'Payroll',
];

export default function Capabilities() {
  return (
    <section className="capabilities" aria-label="What Panthak covers">
      <div className="marquee">
        {[0, 1].map((n) => (
          <ul className="track" key={n} aria-hidden={n === 1 ? 'true' : undefined}>
            {items.map((i) => <li key={i}>{i}</li>)}
          </ul>
        ))}
      </div>
    </section>
  );
}