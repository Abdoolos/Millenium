# ضع البرومبت هنا



    Build a complete professional React.js website (using Vite + React + TailwindCSS) for a Norwegian local services company called Millenium Servicesenter AS. The design should be inspired by the Lixi HTML template style: clean, modern, professional, with smooth sections and a service-company feel.

    Design Style & Colors:

        Primary color: Deep Blue (#1A3C6E)

        Accent color: Orange (#F97316)

        Background: White (#FFFFFF) and light gray (#F8F9FA)

        Dark sections background: Navy (#0D1B2A)

        Text color: Dark (#1F2937)

        Font: Inter or Poppins (Google Fonts)

        Rounded corners on cards (rounded-2xl)

        Subtle box shadows on cards and sections

        Smooth scroll behavior

        Fully responsive (mobile first)

    Website Structure — Build these sections in order:

    1. Navbar (sticky top):

        Logo placeholder (left side) with text "Millenium Servicesenter AS"

        Navigation links: Hjem | Tjenester | Om oss | Kontakt

        Phone number button (top right): 944 46 425 with a phone icon

        Mobile hamburger menu

        White background with subtle bottom border shadow

    2. Hero Section (full screen):

        Large background image placeholder (1920x1080) with dark blue overlay

        Main headline (large, white, bold): "Vi hjelper deg med hverdagen – i Oslo og omegn"

        Subheadline (white, lighter weight): "Praktisk hjelp og fleksible hverdagstjenester du kan stole på"

        Two buttons: "Kontakt oss" (orange, primary) and "Se våre tjenester" (white outline)

        Small trust bar below buttons: icons showing "Pålitelig", "Rask", "Lokal"

    3. Services Section (light gray background):

        Section title: "Våre tjenester" with orange underline accent

        5 service cards in a responsive grid (2 columns on tablet, 3 on desktop):

            Icon + Title + Short description for each:

            Renhold og vedlikehold — Vi holder hjemmet og arbeidsplassen din ren og velstelt

            Mindre reparasjoner og vaktmestertjenester — Raske og pålitelige fikseoppgaver

            Transport og levering — Vi henter og leverer det du trenger

            Hagearbeid og plenklipping — Vi tar vare på utearealet ditt hele sesongen

            Avfallshåndtering og bortkjøring — Rask og miljøvennlig rydding

        Each card: white background, icon (use Heroicons or Lucide React), hover effect with blue border

    4. Stats/Counter Section (dark navy background):

        4 animated number counters in a row:

            500+ Fornøyde kunder

            5+ Års erfaring

            10+ Ansatte

            Oslo og omegn

        White text, orange accent numbers

    5. About Section (white background, two columns):

        Left: image placeholder (600x500) with slight border radius and shadow

        Right: text block:

            Title: "Om oss"

            Text: "Millenium Servicesenter AS er et lokalt serviceselskap som tilbyr praktisk hjelp og fleksible hverdagstjenester i Oslo og omkringliggende områder. Vi er tilgjengelige, pålitelige og alltid klare til å hjelpe."

            3 bullet checkpoints with orange checkmarks: Rask respons, Lokalt selskap, Fleksible løsninger

            Button: "Kontakt oss" (orange)

    6. Why Choose Us Section (light gray background):

        3 feature cards with icon, title, and text:

            Lokal ekspertise — Vi kjenner Oslo og nærområdene godt

            Fleksible tider — Vi tilpasser oss din timeplan

            Trygg og pålitelig — Alle ansatte er grundig sjekket

    7. Testimonials Section (white background):

        Section title: "Hva kundene sier"

        3 testimonial cards with: star rating (5 stars, orange), quote text, customer name

        Use placeholder names and short positive Norwegian quotes

    8. Contact Section (dark navy background):

        Left column: contact info

            Phone: 944 46 425 (with icon)

            Area: Oslo og omkringliggende områder (with map pin icon)

            Working hours: Man–Fre: 08:00–18:00, Lør: 09:00–15:00

        Right column: contact form with fields:

            Navn (text input)

            Telefon (tel input)

            Tjeneste (dropdown with the 5 services)

            Melding (textarea)

            Send button (orange)

        All inputs: white background, rounded, clean styling

    9. Footer (deep navy background):

        Left: Logo + short company description

        Middle: Quick links (Hjem, Tjenester, Om oss, Kontakt)

        Right: Contact info (phone, area)

        Bottom bar: "© 2026 Millenium Servicesenter AS — Org.nr. 935 282 136"

        White text, orange accent links on hover

    Technical requirements:

        Use React functional components with hooks

        TailwindCSS for all styling (no separate CSS files)

        Use Lucide React for all icons

        Smooth scroll on nav links

        Fade-in animation on sections when scrolling (use Intersection Observer or framer-motion)

        All image slots should use clearly labeled placeholder divs with gray background and centered text describing what the image should be

        No external backend needed — contact form is frontend only (show success message on submit)




    Please update the existing React website for Millenium Servicesenter AS with the following improvements. No code explanations needed — just apply all changes directly.

    1. Navbar — Remove phone number:

        Remove the phone number button from the header/navbar completely

        Keep only: Logo (left) + Navigation links (center/right) + hamburger menu on mobile

        Navbar should remain sticky, clean, white background with subtle shadow

    2. Hero Section — Full redesign with UX expert eye:

    Redesign the Hero section to feel premium, modern and trustworthy. Apply these changes:

        Background: Pure white (#FFFFFF) — no dark overlay, no full-screen image background

        Layout: Two-column layout (50/50) on desktop, stacked on mobile:

            Left column: text content

            Right column: main hero image placeholder (rounded corners, soft shadow)

        Left column content:

            Small label badge above headline (orange background, white text, rounded pill): "Oslo og omegn"

            Main headline (very large, bold, dark navy #0D1B2A): "Vi hjelper deg med hverdagen"

            Subheadline (medium, gray): "Praktisk hjelp og fleksible hverdagstjenester du kan stole på"

            Two buttons side by side: "Kontakt oss" (solid orange, rounded) and "Se tjenester" (outline orange, rounded)

            Trust row below buttons: 3 small items with orange checkmark icons: "Pålitelig", "Lokal", "Rask respons"

        Right column: large image placeholder (600x500px), light gray background, rounded-2xl, soft drop shadow, centered label "Hero Image"

        Overall Hero background: white with a very subtle light orange/peach radial gradient on the right side for warmth

        Add gentle fade-in animation on load for text (left) and slide-in from right for image

        Make sure Hero looks perfectly balanced and professional on all screen sizes

    3. Services Section — Add image support to cards:

    Update each service card to support an image at the top:

        Each card structure from top to bottom:

            Image area (top): rectangular placeholder (full card width, height 200px), light gray background, rounded top corners, centered label showing the service name — ready to be replaced with a real image

            Icon + Service title (below image, inside card body)

            Short description text

            Small "Les mer →" link in orange at the bottom

        Cards: white background, rounded-2xl, subtle shadow, hover effect (slight scale + deeper shadow)

        Grid: 1 column on mobile, 2 on tablet, 3 on desktop (last 2 centered if 5 cards)

    4. Mobile layout — Fix and polish all sections:

    Go through every section and make sure mobile display is perfect:

        Navbar: logo left, hamburger right, no overflow

        Hero: single column stacked (text on top, image below), buttons full width, font sizes reduced appropriately

        Services: 1 card per row, full width cards

        Stats: 2x2 grid on mobile instead of 4 in a row

        About: image on top, text below on mobile

        Contact form: full width inputs, no side-by-side columns on mobile

        Footer: stacked single column on mobile, centered text

        Add enough vertical padding between sections on mobile (py-12 minimum)

        Test that no text overflows or gets cut off on screen width 375px

    5. First 3 image placeholders — Specs for replacement:

    Keep the placeholder divs but add clear labels with exact dimensions so images can be dropped in later:

        Hero Image (right column): 600×500px — label: "Hero Image: Professional cleaning/handyman team in Oslo — bright, friendly, high quality"

        About Section Image: 600×500px — label: "About Image: Friendly worker or small team, professional uniform, outdoor or indoor Oslo setting"

        Service Card Image (first card — Renhold og vedlikehold): full card width × 200px — label: "Service Image: Clean bright room or person cleaning"

    All placeholders: light gray (#F3F4F6) background, centered dark gray label text, same rounded corners as their container.

