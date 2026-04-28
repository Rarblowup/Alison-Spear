export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-[#1a1a1a]/10 bg-[#fbfaf8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-gray-500">
        <div>
          <h4 className="font-serif italic text-black mb-4">Alison Spear AIA</h4>
          <p>Architecture and Design projects are concept-driven and client-based.</p>
        </div>
        <div className="space-y-2">
          <p>PO Box 360, Hughsonville, NY 12537</p>
          <p>Office: 845.298.0888</p>
          <p>alison@alisonspear.com</p>
        </div>
        <div className="text-right">
          <p>© 2026 Alison Spear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
