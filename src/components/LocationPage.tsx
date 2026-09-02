import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Car, 
  Bus, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Navigation,
  MessageSquare
} from 'lucide-react';

export const LocationPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.35em] font-bold">
          VISIT & CONTACT
        </span>
        <h1 className="font-serif-artistic text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Hours & <span className="italic text-[#c5a059]">Location</span>
        </h1>
        <div className="w-16 h-px bg-[#c5a059] mx-auto my-2"></div>
        <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
          Located in the heart of Victoria's vibrant Quadra Village. Stop by for lunch specials, an intimate dinner, or take out your favorite sushi.
        </p>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Address Card */}
        <div className="p-8 bg-[#141414] border border-white/10 space-y-6 flex flex-col justify-between shadow-lg">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-[#1a1a1a] text-[#c5a059] flex items-center justify-center border border-white/10">
              <MapPin className="w-5 h-5 text-[#c5a059]" />
            </div>
            <div>
              <h3 className="font-serif-artistic text-2xl font-bold text-white">Address</h3>
              <p className="text-[#c5a059] font-medium text-xs uppercase tracking-wider mt-1">Quadra Village (near Hillside)</p>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              2630 Quadra Street<br />
              Victoria, BC V8T 4E4<br />
              Canada
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/10">
            <a
              id="google-maps-link"
              href={RESTAURANT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-[#c5a059] hover:bg-[#d6b26c] text-black font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Google Maps Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Operating Hours Card */}
        <div className="p-8 bg-[#141414] border border-white/10 space-y-6 flex flex-col justify-between shadow-lg">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-[#1a1a1a] text-[#c5a059] flex items-center justify-center border border-white/10">
              <Clock className="w-5 h-5 text-[#c5a059]" />
            </div>
            <h3 className="font-serif-artistic text-2xl font-bold text-white">Service Hours</h3>

            <div className="space-y-3 text-sm font-light">
              <div className="p-3.5 bg-[#0d0d0d] border border-white/10 space-y-1">
                <div className="flex justify-between font-medium text-white">
                  <span>Wednesday – Friday</span>
                  <span className="text-[#c5a059] text-xs uppercase font-mono tracking-wider">Lunch</span>
                </div>
                <div className="text-neutral-400 text-xs font-mono">11:30 AM – 2:00 PM</div>
              </div>

              <div className="p-3.5 bg-[#0d0d0d] border border-white/10 space-y-1">
                <div className="flex justify-between font-medium text-white">
                  <span>Monday – Friday</span>
                  <span className="text-[#c5a059] text-xs uppercase font-mono tracking-wider">Dinner</span>
                </div>
                <div className="text-neutral-400 text-xs font-mono">4:30 PM – 9:00 PM</div>
              </div>

              <div className="p-3.5 bg-[#0d0d0d] border border-white/10 space-y-1">
                <div className="flex justify-between font-medium text-white">
                  <span>Saturday – Sunday</span>
                  <span className="text-[#c5a059] text-xs uppercase font-mono tracking-wider">Dinner</span>
                </div>
                <div className="text-neutral-400 text-xs font-mono">4:00 PM – 9:30 PM</div>
              </div>
            </div>
          </div>

          <p className="text-[10px] uppercase tracking-wider text-neutral-500 pt-2 border-t border-white/10">
            * Last food orders accepted 30 minutes prior to closing.
          </p>
        </div>

        {/* Telephone & Ordering Card */}
        <div className="p-8 bg-[#141414] border border-white/10 space-y-6 flex flex-col justify-between shadow-lg">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-[#1a1a1a] text-[#c5a059] flex items-center justify-center border border-white/10">
              <Phone className="w-5 h-5 text-[#c5a059]" />
            </div>
            <div>
              <h3 className="font-serif-artistic text-2xl font-bold text-white">Direct Phone</h3>
              <p className="text-neutral-400 text-xs mt-1 font-light">For pickup orders, reservations & inquiries</p>
            </div>

            <div className="p-4 bg-[#0d0d0d] border border-white/10 space-y-1">
              <span className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-mono">Restaurant Line</span>
              <a 
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="text-2xl font-bold font-mono text-[#c5a059] hover:text-[#d6b26c] block tracking-wide"
              >
                (250) 383-9886
              </a>
            </div>

            <div className="space-y-2 text-xs text-neutral-300 font-light">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Free street parking on Quadra & adjacent side streets</span>
              </div>
              <div className="flex items-center gap-2">
                <Bus className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>BC Transit Bus #6 stops directly in Quadra Village</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="w-full py-3 px-4 border border-white/20 hover:bg-white hover:text-black text-white font-medium text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Map Preview & Contact Form Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Map Preview */}
        <div className="lg:col-span-7 bg-[#141414] border border-white/10 flex flex-col justify-between shadow-xl">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#c5a059]" />
              <span className="font-serif-artistic text-lg font-bold text-white">Quadra Village Location</span>
            </div>
            <span className="text-[11px] text-neutral-400 font-mono">2630 Quadra St</span>
          </div>

          {/* Styled Map Container */}
          <div className="relative h-96 w-full bg-[#0d0d0d] overflow-hidden">
            {/* Embedded Google Map iframe */}
            <iframe
              title="Chiba Sushi Victoria Location"
              src="https://maps.google.com/maps?q=2630+Quadra+Street,+Victoria,+BC+V8T+4E4&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full filter invert-[90%] hue-rotate-180 contrast-[1.1] opacity-75"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>

            {/* Floating Location Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#0d0d0d]/90 backdrop-blur-md p-4 border border-white/10 flex items-center justify-between shadow-2xl">
              <div>
                <h4 className="font-bold text-sm text-white font-serif-artistic">Chiba Sushi</h4>
                <p className="text-xs text-neutral-400 font-light">2630 Quadra St, Victoria, BC V8T 4E4</p>
              </div>
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-[#c5a059] hover:bg-[#d6b26c] text-black text-[10px] uppercase tracking-[0.15em] font-bold transition-all shrink-0"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>

        {/* Direct Contact Form */}
        <div className="lg:col-span-5 bg-[#141414] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-2 text-[#c5a059] mb-2">
              <MessageSquare className="w-4 h-4 text-[#c5a059]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em]">DROP A MESSAGE</span>
            </div>
            <h3 className="font-serif-artistic text-2xl sm:text-3xl font-bold text-white mb-2">
              Get in <span className="italic text-[#c5a059]">Touch</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light mb-6">
              Have questions about catering, group events, or dietary preparations? Send us a note below.
            </p>

            {formSubmitted ? (
              <div className="p-8 bg-[#0d0d0d] border border-[#c5a059]/30 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#c5a059] mx-auto" />
                <h4 className="font-serif-artistic text-xl font-bold text-white">Thank You!</h4>
                <p className="text-xs text-neutral-300 font-light">
                  Your message has been received. Our team will get back to you shortly at {formData.email || 'your email'}.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-5 py-2.5 bg-[#1a1a1a] border border-white/20 text-[10px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-medium text-neutral-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 bg-[#0d0d0d] border border-white/10 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-medium text-neutral-300 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#0d0d0d] border border-white/10 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-medium text-neutral-300 mb-1">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(250) 000-0000"
                      className="w-full px-3.5 py-2.5 bg-[#0d0d0d] border border-white/10 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-medium text-neutral-300 mb-1">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0d0d0d] border border-white/10 text-white text-xs focus:outline-none focus:border-[#c5a059]"
                  >
                    <option>General Inquiry</option>
                    <option>Catering & Large Platters</option>
                    <option>Special Event / Private Party</option>
                    <option>Feedback & Compliments</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-medium text-neutral-300 mb-1">Your Message</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist you?"
                    className="w-full px-3.5 py-2.5 bg-[#0d0d0d] border border-white/10 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#c5a059] hover:bg-[#d6b26c] text-black font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
