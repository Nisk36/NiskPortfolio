const Callout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="surface pixel-frame p-4 text-sm text-[var(--muted)]">
      {children}
    </div>
  );
};

export default Callout;
