# Luxury Charter Travel Landing Page - Design Guidelines

## Design Approach

**Reference-Based Approach: Luxury Hospitality & Premium Automotive**

Drawing inspiration from high-end travel platforms (Airbnb Luxe, Four Seasons, Peninsula Hotels) and premium automotive brands (Mercedes-Benz, Rolls-Royce), combined with sophisticated Asian luxury aesthetics. The design emphasizes exclusivity, elegance, and personalized VIP service.

**Core Design Principles:**
- Refined Minimalism: Generous whitespace conveys luxury and exclusivity
- Premium Materials: Rich textures, subtle gradients, and elegant metallics
- Sophisticated Hierarchy: Clear visual flow guiding users through premium offerings
- Bilingual Excellence: Seamless Chinese-English integration with equal prominence

## Typography

**Font Families (via Google Fonts):**
- Primary (English): 'Playfair Display' - Elegant serif for headlines conveying prestige
- Secondary (English): 'Inter' - Clean, modern sans-serif for body text and UI
- Chinese: 'Noto Serif TC' - Sophisticated serif complementing Playfair Display

**Type Scale:**
- Hero Headline: text-5xl to text-7xl (responsive), font-bold
- Section Headers: text-4xl to text-5xl, font-semibold
- Subsection Titles: text-2xl to text-3xl, font-medium
- Body Text: text-base to text-lg, font-normal, leading-relaxed
- Fine Print: text-sm, font-light

**Bilingual Typography:**
- Stack Chinese and English text vertically in hero with consistent spacing (gap-4)
- For inline bilingual content, use slash separator with subtle opacity difference
- Maintain hierarchy: Chinese primary, English secondary (or vice versa based on target market)

## Layout System

**Spacing Units (Tailwind):**
- Micro spacing: 2, 4 units (gaps, padding within components)
- Component spacing: 6, 8, 12 units (card padding, button spacing)
- Section padding: 16, 20, 24, 32 units (vertical rhythm between major sections)
- Large breathing room: 40, 48 units (hero section, featured content)

**Grid System:**
- Container max-width: max-w-7xl for content sections
- Multi-column: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for fleet/service cards
- Asymmetric layouts: 60/40 splits for text-image combinations conveying premium quality

**Viewport Strategy:**
- Hero: 90vh to 100vh with centered content overlay on full-bleed luxury vehicle image
- Content sections: Natural height with py-24 to py-32 desktop, py-16 mobile
- No forced viewport heights beyond hero - let premium content breathe naturally

## Component Library

**Navigation:**
- Floating/transparent navbar over hero, transitions to solid on scroll
- Logo left, bilingual navigation center, CTA button (gold accent) right
- Mobile: Elegant slide-in drawer with smooth transitions

**Hero Section:**
- Full-screen luxury vehicle image backdrop (Mercedes S-Class or similar in premium setting)
- Centered overlay with dark gradient vignette for text legibility
- Stacked bilingual headline with elegant spacing
- Two-button CTA group: Primary "立即預訂/Book Now" with gold accent, Secondary "查看車隊/View Fleet" with border-only treatment
- Buttons with backdrop-blur-md for premium glass effect over image

**Service Showcase (3-4 columns):**
- Icon-driven cards with refined iconography (Heroicons or Font Awesome)
- Services: VIP專屬服務 (VIP Service), 頂級車隊 (Premium Fleet), 彈性行程 (Flexible Itinerary), 專業司機 (Professional Chauffeurs)
- Subtle hover lift effect (translate-y-1) with shadow increase
- Each card: icon top, title, 2-3 line description

**Fleet Gallery:**
- Masonry-style or standard grid showcasing luxury vehicles
- High-quality vehicle photography with studio lighting aesthetic
- Overlay: Vehicle name, capacity, subtle gold accent line
- Hover: Smooth zoom-in on image (scale-105), reveal "查看詳情" overlay

**Service Packages (2-3 columns):**
- Tiered pricing cards: 半日包車 (Half-Day), 全日包車 (Full-Day), 多日行程 (Multi-Day)
- Visual hierarchy: Featured package elevated with subtle gold border or shadow
- Includes: Duration, vehicle type, price range, key features list
- Elegant "選擇方案/Select Plan" button at bottom

**Booking Form:**
- Two-column layout on desktop (form left, contact info/map right)
- Form fields: Name, Phone, Email, Date/Time pickers, Passenger count, Special requests textarea
- Elegant input styling with subtle borders, focus states with gold accent
- Submit button: Full-width gold gradient with sophisticated hover state

**Testimonials:**
- Two-column layout with customer photo (circular), quote, name/title
- Elegant quotation marks as design element
- Subtle background treatment to separate from main content

**Footer:**
- Three-column layout: Company info (logo, tagline), Quick links (Services, Fleet, About, Contact), Contact details
- Social media icons (WeChat, LINE, Facebook, Instagram) with hover gold accent
- Business license/certifications for trust
- Newsletter signup: "訂閱最新優惠" with elegant inline form

## Images

**Hero Image:**
- Large, full-screen (1920x1080 minimum) luxury vehicle image
- Setting: Premium sedan (Mercedes S-Class, BMW 7-Series, or Tesla Model S) in sophisticated environment
- Composition: Vehicle prominently featured, clean background (modern architecture, scenic vista, or premium hotel entrance)
- Lighting: Professional, warm tones conveying luxury
- Treatment: Subtle dark vignette overlay for text contrast

**Fleet Gallery Images (6-8 vehicles):**
- Consistent studio-quality photography
- Each image: 800x600 minimum, showcasing vehicle exterior in 3/4 view
- Variety: Sedans, SUVs, luxury vans for different passenger counts
- Background: Clean, consistent across all images (white/light gray or natural elegant setting)

**Service Section Background (Optional decorative):**
- Subtle, elegant texture or pattern as section background
- Low opacity (10-20%) to add visual interest without distraction

**Testimonial Images:**
- Circular headshots (200x200) of satisfied customers
- Professional quality with natural expressions
- Diverse representation of clientele

## Animations

Use sparingly for sophisticated enhancement:
- Smooth scroll-triggered fade-in for sections (opacity and slight translate-y)
- Parallax effect on hero image (subtle, slow scroll rate)
- Hover states: Gentle transitions (duration-300), subtle scale/shadow changes
- Page load: Elegant staggered entrance for hero content elements
- No distracting or excessive motion - maintain refined aesthetic

**Critical Note:** All animations should enhance luxury feel, not distract. Prioritize smoothness and subtlety over flashiness.