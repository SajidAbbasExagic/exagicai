export default function LabChartCard({ title, subtitle, children, className = "" }) {
  return (
    <div
      className={`my-10 border border-zinc-200 rounded-2xl p-6 md:p-8 bg-white not-prose shadow-sm ${className}`}
    >
      {title && (
        <h3 className="text-lg font-bold text-zinc-900 mb-2">{title}</h3>
      )}
      {subtitle && (
        <p className="text-sm text-zinc-500 mb-6">{subtitle}</p>
      )}
      {children}
    </div>
  );
}
