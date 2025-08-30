export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-8 px-6">
      <h2 className="text-2xl font-semibold text-center mb-8">
        What Our Winners Say
      </h2>
      <div className="max-w-md mx-auto bg-white shadow rounded-2xl p-6 text-center">
        <img
          src="/src/assets/testimonial1.jpg"
          alt="Testimonial"
        //   className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <p className="italic text-lg">
          “I thought it was a scam but I actually received my $750 Shein card.
          So worth it!”
        </p>
        <h3 className="mt-4 font-semibold">— Janet Onwell</h3>
      </div>
    </section>
  );
}
