export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-serif font-light mb-12 text-center italic">Contact</h2>
      <div className="grid md:grid-cols-2 gap-12 text-sm text-gray-600">
        <div className="space-y-4">
          <p>PO Box 360, Hughsonville, NY 12537</p>
          <p>Office: 845.298.0888</p>
          <p>Cell: 917.583.3783</p>
          <p>alison@alisonspear.com</p>
        </div>
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('pay-rar-event')); }}>
          <input type="text" placeholder="Name" className="w-full p-3 border-b border-gray-300 focus:border-black outline-none transition"/>
          <input type="email" placeholder="Email" className="w-full p-3 border-b border-gray-300 focus:border-black outline-none transition"/>
          <textarea placeholder="Message" className="w-full p-3 border-b border-gray-300 focus:border-black outline-none transition h-32" />
          <button type="submit" className="px-8 py-3 bg-black text-white uppercase text-[11px] tracking-[0.2em] hover:bg-gray-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
