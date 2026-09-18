import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle, 
  Phone, 
  Coffee
} from 'lucide-react';

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '11:00 AM',
    guests: '2 Guests',
    seating: 'Indoor Cozy Lounge',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();
    if (!trimmedName || !trimmedPhone || !trimmedEmail) return;

    const code = 'SS-' + Math.floor(100000 + Math.random() * 900000);
    setReservationCode(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#120F0D] rounded-3xl max-w-lg w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-[#3D2D22] relative">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#1A1410] via-[#120F0D] to-[#0A0807] p-5 sm:p-6 text-white relative shrink-0 border-b border-[#2C221B]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF5F0] hover:text-[#F0C070] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-[#F0C070] text-xs font-semibold uppercase tracking-wider mb-1">
            <Coffee className="w-3.5 h-3.5 text-[#F0C070]" />
            <span>Social Sips Cafe & Bar • Clearwater</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
            {submitted ? 'Reservation Confirmed!' : 'Reserve a Table or Event'}
          </h3>
          <p className="text-xs text-[#B8ADA5] mt-1">
            {submitted ? 'We have saved your table in Clearwater, FL.' : 'Join us for coffee meetings, boba gatherings, or evening social lounge drinks.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 text-[#FAF5F0]">
          {submitted ? (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#B8ADA5] font-bold">Confirmation Code</span>
                <p className="text-2xl font-mono font-extrabold text-[#F0C070] tracking-wider mt-1">{reservationCode}</p>
              </div>

              <div className="bg-[#181310] rounded-2xl p-4 border border-[#2C221B] text-left text-xs space-y-2 text-[#D5C2B4]">
                <div className="flex justify-between border-b border-[#2C221B] pb-1.5">
                  <span className="text-[#8C7F75]">Name:</span>
                  <span className="font-semibold text-white">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#2C221B] pb-1.5">
                  <span className="text-[#8C7F75]">Party Size:</span>
                  <span className="font-semibold text-white">{formData.guests}</span>
                </div>
                <div className="flex justify-between border-b border-[#2C221B] pb-1.5">
                  <span className="text-[#8C7F75]">Date & Time:</span>
                  <span className="font-semibold text-white">{formData.date || 'Today'} at {formData.time}</span>
                </div>
                <div className="flex justify-between border-b border-[#2C221B] pb-1.5">
                  <span className="text-[#8C7F75]">Seating:</span>
                  <span className="font-semibold text-white">{formData.seating}</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-[#8C7F75]">Location:</span>
                  <span className="font-semibold text-white">Clearwater, FL (Social Sips)</span>
                </div>
              </div>

              <p className="text-xs text-[#8C7F75]">
                A confirmation text has been noted. Need to adjust your time? Give us a direct call at{' '}
                <a href="tel:+17272401811" className="text-[#F0C070] font-bold underline">
                  +1 (727) 240-1811
                </a>.
              </p>

              <button
                onClick={handleReset}
                className="w-full py-3.5 rounded-xl bg-[#F0C070] hover:bg-[#E5B058] text-[#050404] font-bold text-sm transition-all shadow-lg cursor-pointer"
              >
                Back to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#FAF5F0] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    maxLength={80}
                    placeholder="e.g. Jessica Taylor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181310] border border-[#33271F] text-sm focus:outline-none focus:border-[#F0C070] focus:ring-1 focus:ring-[#F0C070] text-white placeholder-[#7A6D63] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#FAF5F0] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    maxLength={25}
                    placeholder="+1 (727) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#181310] border border-[#33271F] text-sm focus:outline-none focus:border-[#F0C070] focus:ring-1 focus:ring-[#F0C070] text-white placeholder-[#7A6D63] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#FAF5F0] mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  maxLength={100}
                  placeholder="your.email@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#181310] border border-[#33271F] text-sm focus:outline-none focus:border-[#F0C070] focus:ring-1 focus:ring-[#F0C070] text-white placeholder-[#7A6D63] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#FAF5F0] mb-1">Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#181310] border border-[#33271F] text-xs focus:outline-none focus:border-[#F0C070] text-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#FAF5F0] mb-1">Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#181310] border border-[#33271F] text-xs focus:outline-none focus:border-[#F0C070] text-white transition-colors"
                  >
                    <option className="bg-[#181310] text-white">8:00 AM</option>
                    <option className="bg-[#181310] text-white">9:30 AM</option>
                    <option className="bg-[#181310] text-white">11:00 AM</option>
                    <option className="bg-[#181310] text-white">1:00 PM</option>
                    <option className="bg-[#181310] text-white">3:30 PM</option>
                    <option className="bg-[#181310] text-white">5:30 PM</option>
                    <option className="bg-[#181310] text-white">7:00 PM</option>
                    <option className="bg-[#181310] text-white">8:30 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#FAF5F0] mb-1">Party Size</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#181310] border border-[#33271F] text-xs focus:outline-none focus:border-[#F0C070] text-white transition-colors"
                  >
                    <option className="bg-[#181310] text-white">1 Guest</option>
                    <option className="bg-[#181310] text-white">2 Guests</option>
                    <option className="bg-[#181310] text-white">3-4 Guests</option>
                    <option className="bg-[#181310] text-white">5-8 Guests</option>
                    <option className="bg-[#181310] text-white">9+ (Private Group)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#FAF5F0] mb-1">Preferred Atmosphere</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Indoor Cozy Lounge',
                    'Breezy Sunshine Patio',
                    'Workstation / High Top',
                    'Evening Bar Seating',
                  ].map((seat) => (
                    <button
                      type="button"
                      key={seat}
                      onClick={() => setFormData({ ...formData, seating: seat })}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border text-left transition-colors cursor-pointer ${
                        formData.seating === seat
                          ? 'bg-[#F0C070] text-[#050404] font-bold border-[#F0C070]'
                          : 'bg-[#181310] text-[#D5C2B4] border-[#2C221B] hover:border-[#3D2D22] hover:text-white'
                      }`}
                    >
                      {seat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#FAF5F0] mb-1">Notes / Occasion (Optional)</label>
                <textarea
                  rows="2"
                  maxLength={500}
                  placeholder="e.g. Celebrating birthday, need high-chair, quiet corner..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#181310] border border-[#33271F] text-xs focus:outline-none focus:border-[#F0C070] focus:ring-1 focus:ring-[#F0C070] text-white placeholder-[#7A6D63] transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#F0C070] hover:bg-[#E5B058] text-[#050404] font-bold text-sm shadow-lg transition-all cursor-pointer"
                >
                  Confirm Table Reservation
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
