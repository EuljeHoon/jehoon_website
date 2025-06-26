"use client";
import React, { useEffect, useRef, useState } from "react";
import { experiences } from "@/data/experiences";
import ExperienceItem from "@/components/experience/ExperienceItem";

export default function Experiences() {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = parseInt(entry.target.getAttribute('data-index') || '0');
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => [...new Set([...prev, index])]);
                    } else {
                        setVisibleItems((prev) => prev.filter((i) => i !== index));
                    }
                });
            },
            { threshold: 0.3 }
        );

        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    const formatDate = (dateString: string) => {
        if (dateString === "Present") return "Present";
        try {
            const [year, month, day] = dateString.split('-').map(Number);
            const date = new Date(Date.UTC(year, month - 1, day));

            if (isNaN(date.getTime())) return dateString;

            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                timeZone: 'UTC'
            });
        } catch (error) {
            return dateString;
        }
    };

    const calculateDuration = (startDateStr: string, endDateStr: string) => {
        if (endDateStr === "Present") {
            const start = new Date(startDateStr);
            const now = new Date();
            let months = (now.getFullYear() - start.getFullYear()) * 12;
            months -= start.getMonth();
            months += now.getMonth();
            if (now.getDate() < start.getDate()) {
                months--;
            }
            return months <= 0 ? "Ongoing" : `${months} month${months > 1 ? 's' : ''}`;
        }
        
        const [s_year, s_month, s_day] = startDateStr.split('-').map(Number);
        const start = new Date(Date.UTC(s_year, s_month - 1, s_day));
        
        const [e_year, e_month, e_day] = endDateStr.split('-').map(Number);
        const end = new Date(Date.UTC(e_year, e_month, e_day, 23, 59, 59));
        
        const now = new Date();
        if (start > now) {
            return "Planned";
        }
        
        let months = (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
        months -= start.getUTCMonth();
        months += end.getUTCMonth();

        if(end.getUTCDate() < start.getUTCDate() -1 ){
            months--;
        }
        
        months = months <= 0 ? 1 : months;

        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;

        if (years > 0) {
            if (remainingMonths > 0) {
                return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
            }
            return `${years} year${years > 1 ? 's' : ''}`;
        }
        return `${months} month${months > 1 ? 's' : ''}`;
    };

    return (
        <section id="experiences" className="scroll-mt-10 max-w-6xl mx-auto py-20 px-4">
            <div className="text-black">
                <h2 className="text-2xl font-semibold mb-12 text-center">Experiences</h2>
            </div>
            
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-black transform md:-translate-x-1/2"></div>
                {experiences.map((exp, index) => (
                    <ExperienceItem
                        key={exp.id}
                        experience={exp}
                        index={index}
                        visible={visibleItems.includes(index)}
                        formatDate={formatDate}
                        calculateDuration={calculateDuration}
                    />
                ))}
            </div>
        </section>
    );
}