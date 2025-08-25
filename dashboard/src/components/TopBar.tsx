import { Bell, ShieldCheck, Link as LinkIcon } from "lucide-react";

export function TopBar() {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-charcoal text-mint-100 text-xs h-8 px-3 inline-flex items-center gap-2 shadow-hard">
          <span className="font-medium">Dukalamtandao</span>
          <span className="text-[10px] text-mint-200">https://kuzabusiness.com</span>
        </div>
        <div className="rounded-full bg-mint-700 text-mint-50 text-xs h-8 px-3 inline-flex items-center gap-2 shadow-soft">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>KUZAPRO-PAID</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-mint-300/60 grid place-items-center shadow-soft">
          <Bell className="h-4 w-4 text-charcoal" />
        </div>
        <div className="h-8 w-8 rounded-full bg-mint-300/60 grid place-items-center shadow-soft">
          <LinkIcon className="h-4 w-4 text-charcoal" />
        </div>
        <div className="rounded-full bg-charcoal text-mint-100 text-xs h-8 px-3 inline-flex items-center gap-2 shadow-hard">
          <span>Business name</span>
          <span className="text-[10px]">▼</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;

