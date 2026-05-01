import React from "react";

export default function About() {
  return (
      <section id="about" className="scroll-mt-10 mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.12)]">
          <div className="mb-5 flex items-center rounded-2xl bg-slate-100 px-4 py-2">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-600">ABOUT ME</p>
          </div>

          <div className="flex justify-center">
            <div>
              <div className="mx-auto h-[23rem] w-full max-w-xs overflow-hidden rounded-2xl border-2 border-slate-200 shadow-sm">
                <img
                  src="/jehoon_image.jpeg"
                  alt="Jehoon Park"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-xl font-semibold text-[#1B1F3B]">Jehoon(James) Park</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-slate-700">
            <p className="mb-2">
              I&apos;m a Computer Science major at the University of Minnesota - Twin Cities, focused
              on building reliable software that creates practical impact.
            </p>
            <p>
              This portfolio highlights projects and experiences that reflect both technical depth
              and thoughtful problem solving.
            </p>
          </div>
        </div>
      </section>
  );
}