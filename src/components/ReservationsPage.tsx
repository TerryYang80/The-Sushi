import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationRequest } from '../types';
import { 
  Calendar, 
  Clock, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Utensils, 
  ShieldCheck,
  CalendarCheck,
  Download
} from 'lucide-react';

export const ReservationsPage: React.FC = () => {
  const [formData, setFormData] = useState<ReservationRequest>({
    fullName: '',
    email: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow default
    time: '6:00 PM',
    guests: 2,
    seatingArea: 'Dining Table',
    notes: ''
  });

  const [confirmedBooking, setConfirmedBooking] = useState<{
    reference: string;
    details: ReservationRequest;
  } | null>(null);

  const timeSlots = [
    // Lunch Slots
    { label: "11:30 AM", period: "Lunch" },
    { label: "12:00 PM", period: "Lunch" },
    { label: "12:30 PM", period: "Lunch" },
    { label: "1:00 PM", period: "Lunch" },
    { label: "1:30 PM", period: "Lunch" },
    // Dinner Slots
    { label: "4:30 PM", period: "Dinner" },
    { label: "5:00 PM", period: "Dinner" },
    { label: "5:30 PM", period: "Dinner" },
    { label: "6:00 PM", period: "Dinner" },
    { label: "6:30 PM", period: "Dinner" },
    { label: "7:00 PM", period: "Dinner" },
    { label: "7:30 PM", period: "Dinner" },
    { label: "8:00 PM", period: "Dinner" },
    { label: "8:30 PM", period: "Dinner" }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `CHIBA-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedBooking({
      reference: refCode,
      details: { ...formData }
    });
  };

  const handleDownloadIcs = () => {
    if (!confirmedBooking) return;
    const { details, reference } = confirmedBooking;
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:Dinner Reservation at Chiba Sushi (${reference})`,
      `DESCRIPTION:Table for ${details.guests} guests in ${details.seatingArea}. Notes: ${details.notes || 'None'}. Phone: (250) 383-9886`,
      `LOCATION:2630 Quadra Street, Victoria, BC V8T 4E4`,
      `DTSTART:${details.date.replace(/-/g, '')}T180000Z`,
      `DTEND:${details.date.replace(/-/g, '')}T200000Z`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `ChibaSushi-Reservation-${reference}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.35em] font-bold">
          TABLE RESERVATIONS
        </span>
        <h1 className="font-serif-artistic text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Book Your <span className="italic text-[#c5a059]">Experience</span>
        </h1>
        <div className="w-16 h-px bg-[#c5a059] mx-auto my-2"></div>
        <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
          Reserve a table at our Quadra Village dining room. For parties larger than 8 or same-day immediate bookings, please call us directly at <strong className="text-[#c5a059] font-mono">(250) 383-9886</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Container */}
        <div className="lg:col-span-8 bg-[#141414] border border-white/10 p-6 sm:p-10 shadow-2xl">
          {confirmedBooking ? (
            <div className="text-center py-8 space-y-6 animate-in fade-in">
              <div className="w-16 h-16 bg-[#1a1a1a] border border-[#c5a059]/30 text-[#c5a059] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c5a059]">
                  RESERVATION CONFIRMED
                </span>
                <h2 className="font-serif-artistic text-2xl sm:text-3xl font-bold text-white">
                  We Look Forward to Welcoming You
                </h2>
                <p className="text-sm text-neutral-400 font-light max-w-md mx-auto">
                  A confirmation summary has been registered for reference code{' '}
                  <strong className="text-[#c5a059] font-mono">{confirmedBooking.reference}</strong>.
                </p>
              </div>

              {/* Receipt Box */}
              <div className="max-w-md mx-auto bg-[#0d0d0d] border border-white/10 p-6 text-left space-y-3.5 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-500 font-light">Guest Name:</span>
                  <span className="font-bold text-white">{confirmedBooking.details.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-500 font-light">Date & Time:</span>
                  <span className="font-bold text-[#c5a059]">
                    {confirmedBooking.details.date} at {confirmedBooking.details.time}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-500 font-light">Party Size:</span>
                  <span className="font-bold text-white">{confirmedBooking.details.guests} Guests</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-500 font-light">Seating Area:</span>
                  <span className="font-bold text-white">{confirmedBooking.details.seatingArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-light">Location:</span>
                  <span className="text-neutral-300">2630 Quadra St, Victoria, BC</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <button
                  onClick={handleDownloadIcs}
                  className="px-6 py-3 bg-[#c5a059] hover:bg-[#d6b26c] text-black font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Calendar Event (.ics)</span>
                </button>
                <button
                  onClick={() => setConfirmedBooking(null)}
                  className="px-6 py-3 border border-white/20 hover:bg-white hover:text-black text-neutral-200 text-[10px] uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
                >
                  Make Another Reservation
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-6">
              {/* Step 1: Party Size */}
              <div className="space-y-2">
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-300">
                  Number of Guests
                </label>
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFormData({ ...formData, guests: num })}
                      className={`h-10 w-10 text-xs font-mono font-bold flex items-center justify-center transition-all shrink-0 cursor-pointer border ${
                        formData.guests === num
                          ? 'bg-[#c5a059] text-black border-[#c5a059] shadow-md'
                          : 'bg-[#0d0d0d] text-neutral-300 hover:bg-neutral-800 border-white/10'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                  <span className="text-[11px] text-neutral-500 ml-2 font-light">For 9+ please call directly</span>
                </div>
              </div>

              {/* Step 2: Date & Seating Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-300">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0d0d0d] border border-white/10 text-white text-xs focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-300">
                    Seating Preference
                  </label>
                  <select
                    value={formData.seatingArea}
                    onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value as any })}
                    className="w-full px-4 py-2.5 bg-[#0d0d0d] border border-white/10 text-white text-xs focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="Dining Table">Dining Table (Main Room)</option>
                    <option value="Sushi Bar Counter">Sushi Bar Counter (Watch Chefs)</option>
                    <option value="Booth">Cozy Booth</option>
                    <option value="Patio (Seasonal)">Patio (Seasonal)</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Time Slot */}
              <div className="space-y-2">
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-300">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.label}
                      type="button"
                      onClick={() => setFormData({ ...formData, time: slot.label })}
                      className={`py-2 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                        formData.time === slot.label
                          ? 'bg-[#c5a059] text-black border-[#c5a059] font-bold shadow-md'
                          : 'bg-[#0d0d0d] text-neutral-300 hover:text-white border-white/10 hover:border-white/20'
                      }`}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact Details */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <span className="block text-[11px] uppercase tracking-wider font-semibold text-neutral-300">
                  Guest Contact Details
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 bg-[#0d0d0d] border border-white/10 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#0d0d0d] border border-white/10 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(250) 555-0199"
                      className="w-full px-3.5 py-2.5 bg-[#0d0d0d] border border-white/10 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">Special Occasion or Dietary Notes (Optional)</label>
                  <input
                    type="text"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Celebrating anniversary, gluten-sensitive, high chair needed"
                    className="w-full px-3.5 py-2.5 bg-[#0d0d0d] border border-white/10 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  id="confirm-reservation-btn"
                  className="w-full py-4 bg-[#c5a059] hover:bg-[#d6b26c] text-black font-bold text-[11px] uppercase tracking-[0.25em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Confirm Table Reservation</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Side Guidance & Policies */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 bg-[#141414] border border-white/10 space-y-4">
            <h3 className="font-serif-artistic text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#c5a059]" />
              <span>Reservation Policies</span>
            </h3>
            <ul className="text-xs text-neutral-300 font-light space-y-2.5 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#c5a059]">•</span>
                <span>We hold reserved tables for 15 minutes past reservation time.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c5a059]">•</span>
                <span>If you need to adjust your party size or arrival time, please call us in advance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c5a059]">•</span>
                <span>Sushi Bar Counter seats offer a front-row view of our sushi masters at work.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-[#141414] border border-[#c5a059]/40 space-y-3">
            <div className="flex items-center gap-2 text-[#c5a059] font-medium text-[10px] uppercase tracking-[0.2em]">
              <Phone className="w-3.5 h-3.5" />
              <span>NEED A TABLE RIGHT NOW?</span>
            </div>
            <h4 className="font-serif-artistic text-xl font-bold text-white">Call Us Directly</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Our front host team can provide immediate real-time availability for lunch or dinner.
            </p>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="inline-block pt-1 font-mono text-2xl font-bold text-[#c5a059] hover:text-[#d6b26c]"
            >
              (250) 383-9886
            </a>
          </div>

          <div className="overflow-hidden border border-white/10">
            <img
              src="/images/gallery/07_IMG_8346.jpg"
              alt="Chiba Sushi Dining Room"
              className="w-full h-48 object-cover filter brightness-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
