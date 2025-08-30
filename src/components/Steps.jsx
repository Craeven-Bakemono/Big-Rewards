export default function Steps() {
  return (
    <section className="bg-gray-50 py-2 px-6">
      <h2 className="text-2xl font-semibold text-center mb-4">
        How to Claim Your Reward
      </h2>
      <div className="grid md:grid-cols-3 gap-2 max-w-5xl mx-auto">
        <div className="p-2 bg-white shadow rounded-2xl">
          <h3 className="font-bold text-xl mb-2">Step 1</h3>
          <p>Sign up and answer a quick flash poll.</p>
        </div>
        <div className="p-2 bg-white shadow rounded-2xl">
          <h3 className="font-bold text-xl mb-2">Step 2</h3>
          <p>Complete at least 4–5 deals on the offer page.</p>
        </div>
        <div className="p-2 bg-white shadow rounded-2xl">
          <h3 className="font-bold text-xl mb-2">Step 3</h3>
          <p>Confirm your email and enjoy your $750 Shein shopping spree.</p>
        </div>
      </div>
    </section>
  );
}
