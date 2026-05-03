"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextAbout from '@/components/sections/about/TextAbout';
import { Calendar, Mountain } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmall"
        background="grid"
        cardStyle="layered-gradient"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Menu", id: "menu" },
        { name: "Reviews", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Emirhan"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitKpi
      background={{ variant: "radial-gradient" }}
      title="An Elevated Gastronomic Experience"
      description="Sophisticated flavors meet an unforgettable atmosphere with the best view in Samarkand."
      kpis={[
        { value: "4.8", label: "Guest Rating" },
        { value: "15:00", label: "Sunset Hours" },
        { value: "Premium", label: "Fine Dining" },
      ]}
      enableKpiAnimation={true}
      buttons={[{ text: "Reserve a Table", href: "#contact" }]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-colorful-sunset-sea-sun-shines-orange-sky_146671-18814.jpg?_wi=1"
      imageAlt="Luxurious veranda overlooking Samarkand"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Traditional Hospitality Meets Modern Luxury"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="blur-reveal"
      textboxLayout="split"
      gridVariant="bento-grid"
      title="Menu Highlights"
      description="A curated selection of authentic Uzbek delicacies, reimagined for the discerning palate."
      products={[
        { id: "1", brand: "Signature", name: "Slow-Cooked Plov", price: "$24", rating: 5, reviewCount: "120+", imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-plov-cooked-rice-meal-with-raisins-inside-pan-dark-surface-food-rice-eastern-dinner-meal_140725-101795.jpg?_wi=1" },
        { id: "2", brand: "Chef's Special", name: "Signature Jiz-Biz", price: "$32", rating: 5, reviewCount: "85", imageSrc: "http://img.b2bpic.net/free-photo/fried-chicken-with-onions-table_140725-2396.jpg?_wi=1" },
        { id: "3", brand: "Traditional", name: "Hand-Pulled Laghman", price: "$18", rating: 4, reviewCount: "210", imageSrc: "http://img.b2bpic.net/free-photo/vertical-high-angle-shot-bowl-noodles-meat-some-chopsticks-table_181624-19341.jpg?_wi=1" },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sam Mie", date: "2024", title: "Exceptional Experience", quote: "The fusion of luxury and authentic tradition is unmatched in Samarkand.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/close-up-people-spending-time-together_23-2149152906.jpg" },
        { id: "2", name: "David G.", date: "2024", title: "Stunning View", quote: "A breathtaking experience that stays with you long after the meal ends.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-with-arms-crossed_107420-12323.jpg" },
      ]}
      title="What Our Guests Say"
      description="Discover why refined palates prefer Emirhan for their special evenings."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <MetricCardTwo
      animationType="depth-3d"
      textboxLayout="split"
      gridVariant="bento-grid"
      metrics={[
        { id: "1", value: "5-Star", description: "Culinary Excellence Rating" },
        { id: "2", value: "15+", description: "Years of Heritage" },
        { id: "3", value: "100%", description: "Authentic Sourcing" },
      ]}
      title="The Essence of Luxury"
      description="An atmosphere meticulously crafted for comfort and grace."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "Is a reservation required?", content: "Reservations are strongly encouraged for our veranda seating to ensure a premium experience." },
        { id: "2", title: "What is the dress code?", content: "Smart-casual elegance is appreciated to match the sophisticated ambiance of our dining room." },
      ]}
      title="Common Questions"
      description="Your guide to a flawless visit."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "radial-gradient" }}
      tag="Exclusive Access"
      title="Experience Emirhan"
      description="Makhmudjanova 1/18, Samarkand. Join us for a journey of refined flavors."
      buttons={[{ text: "Call Now", href: "tel:+998888916000" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        { title: "Navigation", items: [{ label: "Home", href: "#home" }, { label: "About", href: "#about" }, { label: "Menu", href: "#menu" }] },
        { title: "Legal", items: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
      ]}
      logoText="Emirhan"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}