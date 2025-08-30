export default function CTAButtons() {
  return (
    <section className="py-4 text-center">
      <h2 className="text-2xl font-semibold mb-6">Choose Your Gift Card</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <a
          href="https://rewarduplevel.com/aff_c?offer_id=76&aff_id=24974"
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow text-lg font-medium"
        >
          Get Your Card (USA, Canada & UK)
        </a>
        <a
          href="https://rewarrdsgiant.com/aff_c?offer_id=1224&aff_id=24974"
          className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl shadow text-lg font-medium"
        >
          Get Your Gift Card (Australia)
        </a>
      </div>
    </section>
  );
}
