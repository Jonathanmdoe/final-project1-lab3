export function KifurushiCard() {
  return (
    <div className="rounded-3xl bg-mint-200 p-4 relative overflow-hidden">
      <div className="absolute inset-0 translate-x-3 translate-y-4 rounded-3xl bg-charcoal -z-10"></div>
      <div className="text-sm text-charcoal/70">Kifurushi</div>
      <p className="mt-2 text-[12px] leading-5 text-charcoal/80 max-w-xs">
        Umebakiza siku 6 za kutumia kuza business lipia kifurushi uendelee kukuza
        biashara yako
      </p>
      <div className="mt-3 flex items-center gap-2">
        <button className="rounded-full bg-charcoal text-mint-100 text-xs h-7 px-4">
          Lipia
        </button>
        <button className="rounded-full bg-mint-300 text-charcoal text-xs h-7 px-2">
          ▼
        </button>
      </div>
    </div>
  );
}

export default KifurushiCard;

