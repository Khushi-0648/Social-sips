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
    const code = 'SS-' + Math.floor(100000 + Math.random() * 900000);
    setReservationCode(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-cafe-200 relative">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-cafe-900 to-cafe-950 p-5 sm:p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-amberGold text-xs font-semibold uppercase tracking-wider mb-1">
            <Coffee className="w-3.5 h-3.5 text-amberGold" />
            <span>Social Sips Cafe & Bar • Clearwater</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold">
            {submitted ? 'Reservation Confirmed!' : 'Reserve a Table or Event'}
          </h3>
          <p className="text-xs text-cafe-300 mt-1">
            {submitted ? 'We have saved your table in Clearwater, FL.' : 'Join us for coffee meetings, boba gatherings, or evening social lounge drinks.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-cafe-500 font-bold">Confirmation Code</span>
                <p className="text-2xl font-mono font-extrabold text-cafe-900 tracking-wider mt-1">{reservationCode}</p>
              </div>

              <div className="bg-cafe-50 rounded-2xl p-4 border border-cafe-200 text-left text-xs space-y-2 text-cafe-800">
                <div className="flex justify-between border-b border-cafe-200/60 pb-1.5">
                  <span className="text-cafe-500">Name:</span>
                  <span className="font-semibold">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-cafe-200/60 pb-1.5">
                  <span className="text-cafe-500">Party Size:</span>
                  <span className="font-semibold">{formData.guests}</span>
                </div>
                <div className="flex justify-between border-b border-cafe-200/60 pb-1.5">
                  <span className="text-cafe-500">Date & Time:</span>
                  <span className="font-semibold">{formData.date || 'Today'} at {formData.time}</span>
                </div>
                <div className="flex justify-between border-b border-cafe-200/60 pb-1.5">
                  <span className="text-cafe-500">Seating:</span>
                  <span className="font-semibold">{formData.seating}</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-cafe-500">Location:</span>
                  <span className="font-semibold">Clearwater, FL (Social Sips)</span>
                </div>
              </div>

              <p className="text-xs text-cafe-500">
                A confirmation text has been noted. Need to adjust your time? Give us a direct call at{' '}
                <a href="tel:+17272401811" className="text-amberGold font-bold underline">
                  +1 (727) 240-1811
                </a>.
              </p>

              <button
                onClick={handleReset}
                className="w-full py-3.5 rounded-xl bg-cafe-900 hover:bg-cafe-800 text-white font-semibold text-sm transition-colors shadow-warm-sm"
              >
                Back to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-cafe-800 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jessica Taylor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cafe-50 border border-cafe-200 text-sm focus:outline-none focus:border-amberGold text-cafe-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-cafe-800 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (727) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cafe-50 border border-cafe-200 text-sm focus:outline-none focus:border-amberGold text-cafe-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-cafe-800 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="your.email@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-cafe-50 border border-cafe-200 text-sm focus:outline-none focus:border-amberGold text-cafe-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-cafe-800 mb-1">Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-cafe-50 border border-cafe-200 text-xs focus:outline-none focus:border-amberGold text-cafe-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-cafe-800 mb-1">Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-cafe-50 border border-cafe-200 text-xs focus:outline-none focus:border-amberGold text-cafe-900"
                  >
                    <option>8:00 AM</option>
                    <option>9:30 AM</option>
                    <option>11:00 AM</option>
                    <option>1:00 PM</option>
                    <option>3:30 PM</option>
                    <option>5:30 PM</option>
                    <option>7:00 PM</option>
                    <option>8:30 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-cafe-800 mb-1">Party Size</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-cafe-50 border border-cafe-200 text-xs focus:outline-none focus:border-amberGold text-cafe-900"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3-4 Guests</option>
                    <option>5-8 Guests</option>
                    <option>9+ (Private Group)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-cafe-800 mb-1">Preferred Atmosphere</label>
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
                          ? 'bg-cafe-900 text-white border-cafe-900'
                          : 'bg-cafe-50 text-cafe-800 border-cafe-200 hover:bg-cafe-100'
                      }`}
                    >
                      {seat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-cafe-800 mb-1">Notes / Occasion (Optional)</label>
                <textarea
                  rows="2"
                  placeholder="e.g. Celebrating birthday, need high-chair, quiet corner..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-cafe-50 border border-cafe-200 text-xs focus:outline-none focus:border-amberGold text-cafe-900"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amberGold to-amber-600 hover:from-amber-600 hover:to-amberGold text-cafe-950 font-bold text-sm shadow-warm-md transition-all cursor-pointer"
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
