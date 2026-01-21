import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Replace this with your actual Google Form URL
const GOOGLE_FORM_URL = 'https://forms.gle/REPLACE_WITH_YOUR_FORM_ID';

const Recruitments = () => {
  return (
    <div className="relative pt-24">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 hero-bg" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-effect glow-border rounded-2xl p-6 sm:p-10"
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="heading-font text-3xl sm:text-4xl font-bold glow-text">
                Recruitments
              </h1>
              <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">
                We’re looking for driven builders—engineering, design, operations, and research.
                If you want to help shape next-gen autonomous defense systems, apply below.
              </p>
            </div>

            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-accent/20 bg-black/20 p-5">
              <h2 className="heading-font text-lg font-semibold">What to expect</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Quick application (Google Form)</li>
                <li>• Short screening call</li>
                <li>• Relevant task / discussion</li>
                <li>• Final decision</li>
              </ul>
            </div>

            <div className="rounded-xl border border-accent/20 bg-black/20 p-5">
              <h2 className="heading-font text-lg font-semibold">Open roles</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                If you don’t see your role listed, apply anyway—tell us how you can contribute.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'Autonomy / CV',
                  'Embedded / Firmware',
                  'Mechanical / CAD',
                  'Full‑stack',
                  'Ops / Partnerships'
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-accent/20 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              className="glow-border"
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')}
            >
              Apply via Google Form
            </Button>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors self-center"
            >
              Or open the form in a new tab
            </a>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Tip: keep your portfolio / GitHub / LinkedIn handy.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Recruitments;
