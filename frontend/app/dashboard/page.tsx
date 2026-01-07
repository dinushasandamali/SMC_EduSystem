"use client";
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import VisionMission from "@/components/VisionMission";
import Achievements from "@/components/Achievements";
import ContactInfo from "@/components/ContactInfo";
import styles from "@/styles/dashboard.module.css";

export default function DashboardPage() {
  useEffect(() => {
    // Smooth scroll behavior
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.fadeIn);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll(`.${styles.section}, .${styles.sectionAlt}`);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <HeroSection />
      <VisionMission />
      <Achievements />
    </div>
  );
}
