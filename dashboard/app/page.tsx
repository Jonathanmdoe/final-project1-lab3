export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] min-h-screen">
      <aside className="p-4 md:p-5">
        <div className="flex items-center gap-2 mb-5 ml-2">
          <div className="text-xl">🏬</div>
          <div className="font-bold">Business name</div>
        </div>
        <nav className="flex flex-col gap-1">
          <div className="text-xs text-emerald-900/70 px-3 pt-2 pb-1">MENU</div>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-emerald-950 text-white" href="#">🏠 <span>Dashboard</span></a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-emerald-50 text-gray-700" href="#">🛒 <span>Mauzo</span></a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-emerald-50 text-gray-700" href="#">📦 <span>Bidhaa</span></a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-emerald-50 text-gray-700" href="#">💸 <span>Matumizi</span></a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-emerald-50 text-gray-700" href="#">🧑 <span>Wateja</span></a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-emerald-50 text-gray-700" href="#">🧾 <span>Madeni</span></a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-emerald-50 text-gray-700" href="#">📝 <span>Notes</span></a>
          <div className="text-xs text-emerald-900/70 px-3 pt-4 pb-1">MORE</div>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-emerald-50 text-gray-700" href="#">🛍️ <span>Online Shop</span></a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-emerald-50 text-gray-700" href="#">📈 <span>Analytics</span></a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-emerald-50 text-gray-700" href="#">📑 <span>Report</span></a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-emerald-50 text-gray-700" href="#">👥 <span>Employees</span></a>
        </nav>
      </aside>

      <main className="p-4 md:p-6">
        <header className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <button className="bg-black text-white rounded-full px-3 py-2 text-sm font-semibold">Business name ▾</button>
            <button className="bg-emerald-700 text-white rounded-full px-3 py-2 text-sm font-semibold">Dukalamtandao</button>
            <a className="bg-cyan-50 rounded-full px-3 py-2 text-sm text-cyan-900" href="https://kuzabusiness.com" target="_blank">https://kuzabusiness.com</a>
            <button className="bg-black text-white rounded-full px-3 py-2 text-sm font-semibold">KUZAPRO-PAID</button>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-cyan-50 rounded-lg p-2">🔔</button>
            <button className="bg-cyan-50 rounded-lg p-2">❔</button>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          <div className="bg-card rounded-3xl p-5 deep-shadow">
            <div className="font-semibold">Mauzo</div>
            <div className="text-sm text-gray-700 mt-0.5">Mwaka</div>
            <div className="font-bold mt-6">Tsh. 0</div>
          </div>
          <div className="bg-card2 rounded-3xl p-5 deep-shadow">
            <div className="font-semibold">Matumizi</div>
            <div className="text-sm text-gray-700 mt-0.5">Mwaka</div>
            <div className="font-bold mt-6">Tsh. 0</div>
          </div>
          <div className="bg-card3 rounded-3xl p-5 deep-shadow">
            <div className="font-semibold">Bidhaa</div>
            <div className="text-sm text-gray-700 mt-0.5">Mwaka</div>
            <div className="font-bold mt-6">0</div>
          </div>
          <div className="rounded-3xl p-5 bg-lime-200 panel-shadow">
            <div className="font-bold">Kifurushi</div>
            <p className="text-xs text-lime-900 mt-1 mb-3 leading-relaxed">Umebakiza siku 6 za kutumia kuza business lipia kifurushi uendelee kukuza biashara yako</p>
            <button className="bg-emerald-900 text-white rounded-full text-sm font-semibold px-3 py-1.5">Lipia ▾</button>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-300 rounded-2xl p-4 panel-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">Mauzo kwa bidhaa</div>
              <div className="bg-black text-white rounded-full p-1">
                <button className="px-3 py-1 text-sm bg-emerald-600 rounded-full">Leo</button>
              </div>
            </div>
            <div className="overflow-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-700">
                    <th className="py-2 pr-2">MUDA</th>
                    <th className="py-2 pr-2">BITHAA</th>
                    <th className="py-2 pr-2">IDADI</th>
                    <th className="py-2 pr-2">THAMANI</th>
                    <th className="py-2 pr-2">JUMLA</th>
                    <th className="py-2 pr-2">MUUZAJI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-6 text-center text-gray-600" colSpan={6}>Hakuna data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-300 rounded-2xl p-4 panel-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">Mauzo</div>
              <div className="bg-black text-white rounded-full p-1">
                <button className="px-3 py-1 text-sm bg-emerald-600 rounded-full">Wiki hii</button>
              </div>
            </div>
            <div className="h-48 grid place-items-center text-sm text-gray-700">Chart placeholder</div>
          </div>
        </section>
      </main>
    </div>
  );
}

