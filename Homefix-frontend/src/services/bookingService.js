export async function createBooking(bookingData) {
  return { id: Date.now(), status: "pending", ...bookingData };
}

export async function getBookingsForUser(userId) {
  return [];
}