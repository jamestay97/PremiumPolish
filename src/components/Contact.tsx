"use client";

import AnimatedSection from "./AnimatedSection";
import GlowCard from "./effects/GlowCard";
import MorphingButton from "./effects/MorphingButton";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    value: "2701 Waterbury Ave, Bronx, NY 10461",
    href: "https://maps.google.com/?q=2701+Waterbury+Ave+Bronx+NY+10461",
  },
  {
    icon: Phone,
    label: "Phone",
    links: [
      { text: "(347) 757-1186", href: "tel:+13477571186" },
      { text: "(863) 521-7429", href: "tel:+18635217429" },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    links: [
      {
        text: "prestigepolish42@gmail.com",
        href: "mailto:prestigepolish42@gmail.com",
      },
      {
        text: "prestigepolish42@yahoo.com",
        href: "mailto:prestigepolish42@yahoo.com",
      },
    ],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] to-[#050508]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-[#00f0ff]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimatedSection className="text-center mb-10 sm:mb-16" variant="fade">
          <p className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Book Your <span className="text-neon-gradient">Service</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Ready for a spotless finish? Reach out by phone or email — we respond fast.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {contactItems.map((item, index) => (
            <AnimatedSection key={item.label} delay={index * 0.1} variant="scale">
              <GlowCard className="rounded-2xl p-6 sm:p-8 h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/20 mb-5">
                  <item.icon className="h-7 w-7 text-[#00f0ff]" />
                </div>
                <p className="text-xs text-[#00f0ff] uppercase tracking-widest mb-2">
                  {item.label}
                </p>

                {item.links ? (
                  <div className="space-y-2">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block text-slate-200 hover:text-[#00f0ff] transition-colors text-sm sm:text-base font-medium break-all"
                        data-cursor="pointer"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-[#00f0ff] transition-colors text-sm sm:text-base font-medium leading-relaxed"
                    data-cursor="pointer"
                  >
                    {item.value}
                  </a>
                )}
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.35} variant="slide" className="mt-12 text-center">
          <GlowCard className="rounded-2xl p-8 sm:p-10 inline-block w-full max-w-2xl">
            <MessageCircle className="h-10 w-10 text-[#00f0ff] mx-auto mb-4" />
            <p className="text-slate-300 mb-6">
              Call or email us to schedule pressure washing or a mobile carwash at your
              location.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <a
                href="tel:+13477571186"
                className="btn-glow rounded-full px-8 py-3.5 w-full sm:w-auto text-center"
              >
                Call (347) 757-1186
              </a>
              <MorphingButton
                href="mailto:prestigepolish42@gmail.com"
                className="btn-outline rounded-full px-8 py-3.5 w-full sm:w-auto text-center justify-center"
              >
                Send Email
              </MorphingButton>
            </div>
          </GlowCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
