// Two logos alternate: each zooms out to settle, holds, then zooms in as it exits.
const frames = [
  { src: '/images/panthak-logo.png', alt: 'Panthak logo' },
  { src: '/images/pbs-logo.png', alt: 'PBS logo' },
];

export default function LogoCycle() {
  return (
    <span className="logo-cycle" role="img" aria-label="Panthak">
      {frames.map((f, i) => (
        <span key={i} className="logo-frame" style={{ '--i': i }} aria-hidden="true">
          <img src={f.src} alt="" />
        </span>
      ))}
    </span>
  );
}