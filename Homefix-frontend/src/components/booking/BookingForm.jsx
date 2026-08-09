
import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

function BookingForm({ onSubmit }) {
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ date, address, notes });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <Input
        id="date"
        label="Preferred date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Input
        id="address"
        label="Service address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <div className="flex flex-col gap-1.5">
        <label htmlFor="notes" className="text-sm font-medium text-slate-700">
          Notes
        </label>
        <textarea
          id="notes"
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>
      <Button type="submit">Confirm booking</Button>
    </form>
  );
}

export default BookingForm;
