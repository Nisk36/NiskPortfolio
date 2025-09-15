export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: '1px solid currentColor', padding: 12, borderRadius: 8, opacity: 0.9 }}>
      {children}
    </div>
  );
}