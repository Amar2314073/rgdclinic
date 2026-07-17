import React from "react";
import Link from "next/link";
import { Stethoscope, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500 text-slate-900">
                <Stethoscope className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Gupta<span className="text-teal-400">Clinic</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Providing compassionate, multi-generational medical care for you and your family. Your wellness is our lifelong commitment.
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/" className="text-sm hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#doctors" className="text-sm hover:text-white transition-colors">Our Specialists</Link></li>
              <li><Link href="#services" className="text-sm hover:text-white transition-colors">Services Offered</Link></li>
              <li><Link href="#appointment" className="text-sm hover:text-white transition-colors">Book an Appointment</Link></li>
            </ul>
          </div>

          {/* Timings Col */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Clinic Hours</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-teal-400 shrink-0" />
                <span>Mon – Fri: 8:00 AM – 7:00 PM</span>
              </li>
              <li className="flex items-center gap-2 pl-6">
                <span>Saturday: 9:00 AM – 2:00 PM</span>
              </li>
              <li className="flex items-center gap-2 pl-6 text-red-400">
                <span>Sunday: Closed (Emergencies Only)</span>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-teal-400 shrink-0 mt-0.5" />
                <span>Ragarganj Market Belsar Gonda UP 271401</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-teal-400 shrink-0" />
                <span>+91 8948426003</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-teal-400 shrink-0" />
                <span>info@guptaclinic.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Gupta Clinic. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}