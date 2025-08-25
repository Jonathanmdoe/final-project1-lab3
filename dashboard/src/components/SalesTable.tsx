type Row = {
  time: string;
  product: string;
  qty: number;
  amount: number;
  supplier: string;
};

const rows: Row[] = [
  { time: "12:01", product: "BITHAA", qty: 2, amount: 12000, supplier: "Amina" },
  { time: "12:10", product: "IDADI", qty: 1, amount: 5000, supplier: "John" },
  { time: "12:22", product: "THAMANI", qty: 4, amount: 18000, supplier: "Wema" },
  { time: "12:45", product: "MUUZAJI", qty: 1, amount: 2500, supplier: "Kelvin" },
];

export function SalesTable() {
  return (
    <div className="relative">
      <div className="absolute inset-0 translate-x-3 translate-y-4 rounded-3xl bg-charcoal"></div>
      <div className="relative rounded-3xl bg-white/70 p-4 min-h-[300px]">
        <div className="flex items-center justify-between text-sm text-charcoal/70">
          <span>Mauzo kwa bidhaa</span>
          <button className="rounded-full bg-charcoal text-mint-100 text-xs h-7 px-3">Leo</button>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-charcoal/60">
                <th className="py-2 pr-4">MUDA</th>
                <th className="py-2 pr-4">BITHAA</th>
                <th className="py-2 pr-4">IDADI</th>
                <th className="py-2 pr-4">THAMANI</th>
                <th className="py-2 pr-4">MUUZAJI</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-black/10">
                  <td className="py-2 pr-4 whitespace-nowrap">{r.time}</td>
                  <td className="py-2 pr-4">{r.product}</td>
                  <td className="py-2 pr-4">{r.qty}</td>
                  <td className="py-2 pr-4">{r.amount.toLocaleString()}</td>
                  <td className="py-2 pr-4">{r.supplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SalesTable;

