"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
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
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Emirhan"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient",
      }}
      title="The Best View in Samarkand, The Best Flavors in Uzbekistan."
      description="Authentic cuisine meets an unforgettable atmosphere."
      kpis={[
        {
          value: "4.6",
          label: "Guest Rating",
        },
        {
          value: "23:00",
          label: "Open Daily",
        },
        {
          value: "1/18",
          label: "Makhmudjanova",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Book a Table",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-colorful-sunset-sea-sun-shines-orange-sky_146671-18814.jpg"
      imageAlt="View of Samarkand from Emirhan veranda"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/friends-eating-pizza-side-view_23-2149872410.jpg",
          alt: "Happy dining guest 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-friends-eating-restaurant_23-2150491782.jpg",
          alt: "Happy dining guest 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-woman-enjoying-dining-table-while-communicating-with-her-husband_637285-3516.jpg",
          alt: "Happy dining guest 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/having-lunch-spacious-restaurant_52683-117480.jpg",
          alt: "Happy dining guest 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-young-man-holding-glass-whisky-bar_23-2147861976.jpg",
          alt: "Happy dining guest 5",
        },
      ]}
      avatarText="Join 5,000+ happy guests"
      marqueeItems={[
        {
          type: "text",
          text: "Authentic Uzbek Cuisine",
        },
        {
          type: "text-icon",
          text: "Stunning Veranda View",
          icon: Mountain,
        },
        {
          type: "text",
          text: "Open Daily 11:00 - 23:00",
        },
        {
          type: "text-icon",
          text: "Reservations Recommended",
          icon: Calendar,
        },
        {
          type: "text",
          text: "Traditional Hospitality",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Traditional Hospitality Meets Modern Dining"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Traditional Plov",
          price: "$12",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-plov-cooked-rice-meal-with-raisins-inside-pan-dark-surface-food-rice-eastern-dinner-meal_140725-101795.jpg",
        },
        {
          id: "2",
          name: "Jiz-Biz",
          price: "$15",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-chicken-with-onions-table_140725-2396.jpg",
        },
        {
          id: "3",
          name: "Laghman",
          price: "$10",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-high-angle-shot-bowl-noodles-meat-some-chopsticks-table_181624-19341.jpg",
        },
        {
          id: "4",
          name: "Crispy Eggplant Salad",
          price: "$9",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-topped-with-sesame_140725-4321.jpg",
        },
        {
          id: "5",
          name: "Napoleon Cake",
          price: "$7",
          imageSrc: "http://img.b2bpic.net/free-photo/slice-honey-cake-rustic-platter_114579-14638.jpg",
        },
        {
          id: "6",
          name: "Baklava",
          price: "$6",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-azerbaijani-pakhlava-served-with-tea_141793-1405.jpg",
        },
      ]}
      title="Menu Highlights"
      description="Exquisite dishes crafted with passion."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sam Mie",
          date: "2024",
          title: "Great View",
          quote: "Excellent service and truly authentic flavors.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-people-spending-time-together_23-2149152906.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-colorful-sunset-sea-sun-shines-orange-sky_146671-18814.jpg",
          imageAlt: "portrait happy customer restaurant",
        },
        {
          id: "2",
          name: "David Geraghty",
          date: "2024",
          title: "Stunning",
          quote: "The veranda view at sunset is breathtaking.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-with-arms-crossed_107420-12323.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-plov-cooked-rice-meal-with-raisins-inside-pan-dark-surface-food-rice-eastern-dinner-meal_140725-101795.jpg",
          imageAlt: "portrait happy customer restaurant",
        },
        {
          id: "3",
          name: "Ali Uzb",
          date: "2024",
          title: "Authentic",
          quote: "The best Plov in Samarkand, hands down.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/adults-enjoying-mexican-food_23-2149663851.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-chicken-with-onions-table_140725-2396.jpg",
          imageAlt: "portrait happy customer restaurant",
        },
        {
          id: "4",
          name: "Lena K",
          date: "2024",
          title: "Lovely",
          quote: "Warm atmosphere and professional staff.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-senior-man-luxurious-restaurant_23-2150517397.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-high-angle-shot-bowl-noodles-meat-some-chopsticks-table_181624-19341.jpg",
          imageAlt: "portrait happy customer restaurant",
        },
        {
          id: "5",
          name: "Marco P",
          date: "2024",
          title: "Excellent",
          quote: "Flavorful and beautifully presented dishes.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-woman-taking-selfie_23-2149333777.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-topped-with-sesame_140725-4321.jpg",
          imageAlt: "portrait happy customer restaurant",
        },
      ]}
      title="What Our Guests Say"
      description="See why our guests return to Emirhan time and again."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <MetricCardTwo
      animationType="scale-rotate"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "100+",
          description: "Sunset views shared by guests annually.",
        },
        {
          id: "2",
          value: "4.6★",
          description: "Consistently rated by food lovers globally.",
        },
        {
          id: "3",
          value: "15+",
          description: "Years of authentic hospitality excellence.",
        },
      ]}
      title="The Atmosfera"
      description="Capturing golden hour moments on our terrace."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Do I need a reservation?",
          content: "We highly recommend booking in advance, especially for veranda tables.",
        },
        {
          id: "2",
          title: "Are you open for lunch?",
          content: "Yes, we are open daily from 11:00 until 23:00.",
        },
        {
          id: "3",
          title: "Do you offer vegan options?",
          content: "We have several vegetable-based dishes and can accommodate dietary requests.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about your visit."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Visit Us"
      title="Experience Emirhan"
      description="Makhmudjanova 1/18, Samarkand. Open until 23:00. Call +998 88 891 60 00 to reserve."
      buttons={[
        {
          text: "Call Now",
          href: "tel:+998888916000",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Home",
              href: "#home",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Emirhan"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
