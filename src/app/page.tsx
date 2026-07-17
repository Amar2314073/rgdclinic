import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, GraduationCap, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 bg-slate-50 text-slate-800">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.15),transparent)] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-300">
                <ShieldCheck className="h-4 w-4" /> Multi-Generational Medical Care
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Your Health is Our <span className="text-teal-400">Family Legacy</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-xl">
                Experience the perfect blend of veteran clinical instincts and modern diagnostic innovation. Our father-son specialist team offers trusted family and cardiac care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#appointment"
                  className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-md transition-all hover:bg-teal-400 hover:shadow-lg text-center"
                >
                  Book Your Visit
                </Link>
                <Link
                  href="#doctors"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-750 bg-slate-800/40 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-slate-800 hover:border-slate-600 text-center"
                >
                  Meet Our Doctors
                </Link>
              </div>
            </div>

            {/* Hero Stats Card */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-6">Why Patients Choose Us</h3>
              <div className="space-y-6">
                {[
                  { title: "45+ Years of Combined OPD Care", desc: "Decades of deep diagnostic expertise and clinical understanding." },
                  { title: "Non-Invasive Specialties", desc: "Focusing purely on precise diagnoses, lifestyle modification, and medication." },
                  { title: "Patient-First Approach", desc: "Dedicated time for each consultation to understand your health history in detail." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-teal-400 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 lg:py-32 scroll-mt-20 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Meet Our Medical Specialists</h2>
            <div className="h-1 w-12 bg-teal-600 mx-auto mt-4" />
            <p className="mt-4 text-lg text-slate-600">
              A legacy of clinical wisdom paired with advanced modern medical diagnostics.
            </p>
          </div>

          <div className="space-y-24 md:space-y-32">
            
            {/* 1. Father (Dr. Ramdev Gupta): Image LEFT, Text RIGHT */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              
              {/* Left Side: Circular Image */}
              <div className="w-full md:w-2/5 flex justify-center shrink-0">
                <div className="relative group">
                  {/* Decorative Outer Border */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-slate-300 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500" />
                  
                  {/* Image Container (Perfect Circle) */}
                  <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-white shadow-xl bg-slate-100">
                    <Image
                      src="/images/rdg.png"
                      alt="Dr. Ramdev Gupta"
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-w-768px) 100vw, 30vw"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Right Side: Details Text */}
              <div className="w-full md:w-3/5 space-y-6">
                <div>
                  <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 mb-3 border border-teal-200">
                    Senior Consultant & Founder
                  </span>
                  <h3 className="text-3xl font-extrabold text-slate-950 tracking-tight">Dr. Ramdev Gupta</h3>
                  <p className="text-teal-600 font-semibold text-base mt-1">Senior Consultant Physician & General Specialist</p>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  Dr. Ramdev Gupta has diagnosed and managed chronic illnesses for generations of local families. He is highly revered for his clinical diagnostic skills, patient counseling, and conservative, highly effective medicine management.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 shrink-0 shadow-sm">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Clinical Experience</h4>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">35+ Years of Dedicated OPD Practice</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 shrink-0 shadow-sm">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Education & Training</h4>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">M.D. / Physician in General Medicine</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Son (Dr. Ajeet Gupta): Text LEFT, Image RIGHT (On desktop) */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
              
              {/* Left Side: Details Text */}
              <div className="w-full md:w-3/5 space-y-6">
                <div>
                  <span className="inline-flex items-center rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white mb-3 shadow-sm">
                    Cardiac Specialist
                  </span>
                  <h3 className="text-3xl font-extrabold text-slate-950 tracking-tight">Dr. Ajeet Gupta</h3>
                  <p className="text-teal-600 font-semibold text-base mt-1">Consultant Physician & Non-Invasive Cardiologist</p>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  Dr. Ajeet Gupta specializes in modern non-invasive cardiology, preventive heart care, and lifestyle therapies. He focuses on early-stage cardiac diagnosis, post-stroke recovery, and medically managing complex heart conditions without surgical interventions.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 shrink-0 shadow-sm">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Clinical Experience</h4>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">10+ Years of Specialization & Practice</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 shrink-0 shadow-sm">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Education & Credentials</h4>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">MD (Medicine), DM / Fellowship in Cardiology</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Circular Image */}
              <div className="w-full md:w-2/5 flex justify-center shrink-0">
                <div className="relative group">
                  {/* Decorative Outer Border */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-500 to-slate-300 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500" />
                  
                  {/* Image Container (Perfect Circle) */}
                  <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-white shadow-xl bg-slate-100">
                    <Image
                      src="/images/ajg.png"
                      alt="Dr. Ajeet Gupta"
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-w-768px) 100vw, 30vw"
                      priority
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-100 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Our Medical Services</h2>
            <div className="h-1 w-12 bg-teal-600 mx-auto mt-4" />
            <p className="mt-4 text-lg text-slate-600">
              We offer comprehensive preventative diagnostics and expert medical consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "General OPD & Family Medicine", body: "Routine wellness checkups, diagnostic testing, general health management, and accurate primary treatment overseen by Dr. Ramdev Gupta." },
              { title: "Non-Invasive Cardiac Screenings", body: "Comprehensive ECG, lipid profiles, hypertension checkups, and early detection of heart issues without surgical procedures." },
              { title: "Chronic Disease Management", body: "Expert ongoing medical care plans and customized prescriptions for diabetes, asthma, thyroid disorders, and lifestyle-related ailments." }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-sm transition-all hover:translate-y-[-4px] hover:shadow-md">
                <div className="h-10 w-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-6 font-bold text-lg">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Appointment CTA */}
      <section id="appointment" className="py-20 lg:py-32 bg-slate-900 text-white scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to Prioritize Your Wellness?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Schedule a medical consultation with our experts today. Select general practice or specialized cardiac consultation according to your current clinical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/40 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-slate-800 hover:border-slate-500 text-center"
            >
              Call Clinic: +91 8948426003
            </a>
            <button className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-md transition-all hover:bg-teal-400 hover:shadow-lg">
              Book Appointment Online
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}