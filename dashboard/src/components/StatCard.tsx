type StatCardProps = {
  title: string;
  period: string;
  value: string | number;
  tone?: "sky" | "pink" | "mint";
};

export function StatCard({ title, period, value, tone = "sky" }: StatCardProps) {
  const bg =
    tone === "sky"
      ? "bg-sky-200"
      : tone === "pink"
      ? "bg-pink-200"
      : "bg-mint-200";

  return (
    <div className="relative">
      <div className="absolute inset-0 translate-x-2 translate-y-3 rounded-3xl bg-charcoal"></div>
      <div className={`relative ${bg} rounded-3xl p-4 min-h-[146px] shadow-card`}>
        <div className="flex items-center justify-between text-sm text-charcoal/70">
          <span>{title}</span>
          <span>{period}</span>
        </div>
        <div className="mt-6 text-charcoal text-sm">Tsh. {value}</div>
      </div>
    </div>
  );
}

export default StatCard;

