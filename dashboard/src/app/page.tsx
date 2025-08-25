import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import StatCard from "@/components/StatCard";
import SalesChart from "@/components/SalesChart";
import SalesTable from "@/components/SalesTable";
import KifurushiCard from "@/components/KifurushiCard";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-[240px_1fr]">
        <Sidebar />
        <main className="min-h-screen bg-mint-50/70">
          <TopBar />

          <div className="px-4 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard title="Mauzo" period="Mwaka" value={0} tone="sky" />
              <StatCard title="Matumizi" period="Mwaka" value={0} tone="pink" />
              <StatCard title="Bithaa" period="Mwaka" value={0} tone="mint" />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6">
              <SalesTable />
              <KifurushiCard />
            </div>

            <div className="mt-6">
              <SalesChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
