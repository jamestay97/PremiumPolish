"use client";

import AnimatedSection from "./AnimatedSection";
import GlowCard from "./effects/GlowCard";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  MessageSquare,
} from "lucide-react";

const SERVICE_AREA =
  "Long Island, Brooklyn, Queens, and surrounding areas";

const CALL_NUMBERS = [
  { text: "(347) 757-1186", href: "tel:+13477571186" },
  { text: "(863) 521-7429", href: "tel:+18635217429" },
  { text: "(347) 261-6279", href: "tel:+13472616279" },
];

const TEXT_NUMBER = {
  text: "(407) 818-5098",
  href: "sms:+14078185098",
};

const EMAIL_LINKS = [
  {
    text: "prestigepolish42@gmail.com",
    href: "mailto:prestigepolish42@gmail.com",
    provider: "Gmail",
  },
  {
    text: "prestigepolish42@yahoo.com",
    href: "mailto:prestigepolish42@yahoo.com",
    provider: "Yahoo",
  },
] as const;

const contactItems = [
  {
    icon: MapPin,
    label: "Service Area",
    value: SERVICE_AREA,
  },
  {
    icon: Phone,
    label: "Call Us",
    description: "Phone calls welcome",
    links: CALL_NUMBERS,
  },
  {
    icon: MessageSquare,
    label: "Text Us",
    description: "Text messages only — this line does not accept calls",
    links: [TEXT_NUMBER],
    smsOnly: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-sky-200 to-sky-100" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-[#9333ea]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <AnimatedSection className="text-center mb-10 sm:mb-16" variant="fade">
          <p className="text-[#9333ea] text-sm font-medium tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Book Your <span className="text-neon-gradient">Service</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Serving {SERVICE_AREA.toLowerCase()}. Call, text, or email — we respond
            fast. <span className="text-gray-900 font-medium">English &amp; Español.</span>
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactItems.map((item, index) => (
            <AnimatedSection key={item.label} delay={index * 0.1} variant="scale">
              <GlowCard className="rounded-2xl p-6 sm:p-8 h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#9333ea]/10 border border-[#9333ea]/20 mb-5">
                  <item.icon className="h-7 w-7 text-[#9333ea]" />
                </div>
                <p className="text-xs text-[#9333ea] uppercase tracking-widest mb-2">
                  {item.label}
                </p>

                {"description" in item && item.description && (
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.links ? (
                  <div className="space-y-3">
                    {item.links.map((link) => (
                      <div key={link.href}>
                        <a
                          href={link.href}
                          className="block text-gray-800 hover:text-[#9333ea] transition-colors font-medium leading-relaxed text-sm sm:text-base break-all"
                        >
                          {link.text}
                        </a>
                        {"smsOnly" in item && item.smsOnly && (
                          <a
                            href={link.href}
                            className="inline-block mt-1 text-xs text-gray-600 hover:text-[#9333ea] transition-colors"
                          >
                            Send a text →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                    {item.value}
                  </p>
                )}
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} variant="scale" className="mt-6">
          <GlowCard className="rounded-2xl p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-10">
              <div className="flex items-start gap-4 lg:flex-col lg:gap-5 lg:justify-center lg:border-r lg:border-[rgba(147,51,234,0.12)] lg:pr-10 lg:max-w-xs shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#9333ea]/10 border border-[#9333ea]/20 shrink-0">
                  <Mail className="h-7 w-7 text-[#9333ea]" />
                </div>
                <div>
                  <p className="text-xs text-[#9333ea] uppercase tracking-widest mb-1.5">
                    Email
                  </p>
                  <h3 className="font-[family-name:var(--font-orbitron)] text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Prefer email? Reach us on either address — we typically respond within 24 hours.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 flex-1 min-w-0">
                {EMAIL_LINKS.map(({ text, href, provider }) => (
                  <a
                    key={href}
                    href={href}
                    className="group flex flex-col justify-between rounded-xl border border-[rgba(147,51,234,0.18)] bg-white/60 px-5 py-4 sm:px-6 sm:py-5 transition-all duration-200 hover:border-[#9333ea]/45 hover:bg-[#9333ea]/5 hover:shadow-[0_0_24px_rgba(147,51,234,0.1)] min-w-0"
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="inline-flex items-center rounded-full bg-[#9333ea]/10 px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#9333ea]">
                        {provider}
                      </span>
                      <Mail className="h-4 w-4 text-[#9333ea]/40 group-hover:text-[#9333ea] transition-colors shrink-0" aria-hidden />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-[#9333ea] transition-colors break-all leading-snug">
                      {text}
                    </span>
                    <span className="mt-3 text-xs text-gray-500 group-hover:text-[#9333ea]/80 transition-colors">
                      Open in {provider} →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </GlowCard>
        </AnimatedSection>

        <AnimatedSection delay={0.35} variant="slide" className="mt-12 text-center">
          <GlowCard className="rounded-2xl p-8 sm:p-10 inline-block w-full max-w-2xl">
            <MessageCircle className="h-10 w-10 text-[#9333ea] mx-auto mb-4" />
            <p className="text-gray-700 mb-6">
              Call one of our phone lines, text us, or email to schedule pressure
              washing or a mobile carwash at your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <a
                href="tel:+13477571186"
                className="btn-glow rounded-full px-8 py-3.5 w-full sm:w-auto text-center"
              >
                Call (347) 757-1186
              </a>
              <a
                href="sms:+14078185098"
                className="btn-outline rounded-full px-8 py-3.5 w-full sm:w-auto text-center"
              >
                Text (407) 818-5098
              </a>
            </div>
          </GlowCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
