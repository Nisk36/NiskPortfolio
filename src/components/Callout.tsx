const Callout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="surface hover-pixel p-4 text-sm text-[var(--muted)]">
      {children}
    </div>
  );
};

export default Callout;
