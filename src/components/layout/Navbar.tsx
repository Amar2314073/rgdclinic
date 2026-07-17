"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Stethoscope, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600 text-white transition-transform group-hover:scale-105">
              <Stethoscope className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Gupta<span className="text-teal-600">Clinic</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600">Home</Link>
            <Link href="#doctors" className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600">Our Doctors</Link>
            <Link href="#services" className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600">Services</Link>
            <Link href="#contact" className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600">Contact</Link>
          </div>

          {/* Contact / CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-teal-600">
              <Phone className="h-4 w-4 text-teal-600" />
              <span>+91 8948426003</span>
            </a>
            <Link
              href="#appointment"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-700 hover:shadow-md"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-3">
          <Link href="/" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-600">Home</Link>
          <Link href="#doctors" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-600">Our Doctors</Link>
          <Link href="#services" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-600">Services</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-600">Contact</Link>
          <hr className="border-slate-100" />
          <div className="pt-2 flex flex-col gap-3">
            <a href="tel:+1234567890" className="flex items-center gap-2 px-3 text-base font-medium text-slate-700">
              <Phone className="h-5 w-5 text-teal-600" />
              <span>+1 (234) 567-890</span>
            </a>
            <Link
              href="#appointment"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center rounded-lg bg-teal-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}