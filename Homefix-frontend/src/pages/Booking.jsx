import BookingForm from "../components/booking/BookingForm";
import { createBooking } from "../services/bookingService";

function Booking() {
  const handleBooking = async (data) => {
    await createBooking(data);
  };

  return (
    <section className="mx-auto max-w-md px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Book a service
      </h1>
      <div className="mt-8">
        <BookingForm onSubmit={handleBooking} />
      </div>
    </section>
  );
}

export default Booking;
