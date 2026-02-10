# Week 2: UI/UX Design Mastery - Preventing "AI Vibe Code Slop"

## 🎯 Core Philosophy
Students will learn that **generic UIs are the death of user experience**. No more:
- Random emoji collections
- Gradient colors everywhere
- Generic card designs
- Inconsistent spacing/typography
- "Default AI aesthetic"

Instead, they'll learn to create **intentional, researched, brand-consistent design** using AI as a tool within a framework.

---

## 📚 Level 1: Research & Reference Collection

### Learning Objectives
- Understand the importance of design research
- Learn to find inspiration from real, well-designed products
- Screenshot and analyze what works
- Use reference collections to inform AI prompts

### Curriculum Content

**Lesson 1.1: Know Your Customer**
- Define customer persona (who are they?)
- Identify their pain points (what problems do they face?)
- Determine what they want to see (aesthetics they respond to)
- Create a simple customer profile document

**Lesson 1.2: Research Design Sites**
- **Mobbin** (https://mobbin.com) - Real app screenshots organized by category
  - Search your product category
  - Analyze successful apps
  - Take screenshots of UI patterns you like
- **21st.dev** (https://21st.dev) - AI-era design inspiration
  - Modern, post-AI aesthetic examples
  - Cutting-edge product design
  - Best practices for tech products
- **Other Resources:**
  - Dribbble (shots, not production)
  - Are.na (design collections)
  - UI Collective (curated examples)

**Lesson 1.3: Screenshot & Analyze**
- Screenshot 5-10 UI elements you like
- Annotate: What works? Why?
  - Color palette
  - Typography choices
  - Spacing/whitespace
  - Component patterns
  - Micro-interactions
- Build a "mood board" of visual references

**Lesson 1.4: Use Google's NotebookLM / Similar Tools**
- Upload screenshots/images to generative tools
- Ask: "What design principles does this use?"
- Extract design DNA from successful products
- Document: colors, spacing, typography patterns

**Lesson 1.5: Google Stitch (or Similar AI Design Generators)**
- Input: Customer persona + references + brief
- Output: Multiple UI concept variations
- Explore different styles:
  - Minimal & clean (Notion-like)
  - Modern & playful (Figma-like)
  - Professional & corporate (Stripe-like)
  - Bold & experimental (new wave)
- Compare outputs, pick direction that fits customer

### Activities & Exercises
1. **Persona Building Exercise:** Create customer profile with photo, name, pain points, goals
2. **Reference Collection:** Collect 10 screenshots of designs you admire
3. **Analysis Worksheet:** Break down 3 apps' design systems
4. **Stitch Exploration:** Generate 3 different UI concepts for your product
5. **Mood Board:** Consolidate findings into visual reference guide

### XP Breakdown
- Complete customer research: 50 XP
- Reference collection (10+ screenshots): 50 XP
- Analysis of 3 apps: 50 XP
- Stitch exploration (3+ variations): 50 XP
- Mood board creation: 50 XP
- **Level 1 Total: 250 XP**

---

## 📚 Level 2: Precision Prompting for UI/UX

### Learning Objectives
- Move beyond vague design prompts
- Learn to specify visual details explicitly
- Provide references and style guidance
- Know what to avoid (anti-patterns)

### Curriculum Content

**Lesson 2.1: The Anatomy of a Great Design Prompt**
- **WHAT:** Specific product/component (not "make it pretty")
- **WHO:** Customer archetype & their expectations
- **VISUAL STYLE:** Explicit aesthetic direction
- **REFERENCES:** Real examples they should emulate
- **CONSTRAINTS:** What NOT to do
- **DETAILS:** Colors, fonts, spacing, animations

**Lesson 2.2: From Vague to Specific**

**❌ VAGUE PROMPT (Bad):**
```
"Design a dashboard for a productivity app. Make it modern and clean."
```

**✅ SPECIFIC PROMPT (Good):**
```
"Design a productivity dashboard for busy executives (customers are 35-55, 
high-income professionals). 

VISUAL STYLE: Clean and minimal like Notion with lots of white space, 
light gray dividers, soft accent colors. Professional but not corporate.

REFERENCES: 
- Notion dashboard (organized, calm)
- Linear.app (typography and hierarchy)
- Stripe.com (spacious, premium feel)

AVOID:
- Bright gradients
- Too many colors
- Rounded corners everywhere
- Excessive shadows or 3D effects
- Cartoon-like icons

DETAILS:
- Color palette: White bg, light gray dividers (#F3F3F3), accent in soft blue (#2563EB), 
  text in dark gray (#1F2937)
- Typography: Inter or Helvetica Neue for clean aesthetic
- Spacing: 24px grid system, generous whitespace
- Components: Clean cards with subtle borders, not shadowed"
```

**Lesson 2.3: Visual Reference Integration**
- "Style this like [specific app]"
- "Use the color palette from [reference]"
- "Hierarchy similar to [product]"
- "Interactive patterns from [tool]"

**Lesson 2.4: Anti-Pattern Recognition**
Teach students what screams "AI-generated vibe code slop":
- ✗ Rainbow gradient backgrounds
- ✗ 50 different emojis in header
- ✗ Harsh shadows and 3D effects
- ✗ Too many rounded corners (50px+ border radius everywhere)
- ✗ Neon colors that hurt eyes
- ✗ Inconsistent spacing/alignment
- ✗ Comic Sans or unclear fonts
- ✗ Animations everywhere (bouncing, spinning)
- ✗ Accessibility ignored (low contrast, tiny text)

**Lesson 2.5: Component-Specific Prompting**
- Buttons: "Minimal, single pixel border, slightly larger padding"
- Cards: "Flat with light border, no shadow unless hover state"
- Forms: "Clear labels, proper spacing between fields, single column"
- Navigation: "Sticky header, subtle shadow on scroll"
- Modals: "Center of screen, semi-transparent backdrop, close button top-right"

### Activities & Exercises
1. **Prompt Refinement:** Take 5 vague design requests, make them specific
2. **Reference Mapping:** Link design elements to real products
3. **Anti-Pattern Hunt:** Identify what makes a design look like "AI slop"
4. **Component Prompting:** Write specific prompts for 5 UI components
5. **Comparison:** Side-by-side vague vs. specific prompt results

### XP Breakdown
- Understand prompt anatomy: 50 XP
- Refine 5 vague prompts to specific: 75 XP
- Create reference mapping: 50 XP
- Anti-pattern identification: 50 XP
- Component-specific prompts (5+): 75 XP
- **Level 2 Total: 300 XP**

---

## 📚 Level 3: Design System Mastery & AI Designer Agent

### Learning Objectives
- Create master design systems/guides
- Use AI as a consistent design enforcer
- Maintain brand consistency across product
- Build a "designer agent" prompt

### Curriculum Content

**Lesson 3.1: Understanding DESIGN_PROMPT.MD**
- Read the design prompt documentation
- Understand: colors, fonts, spacing rules, component patterns
- See how it enforces consistency
- Learn to create your own version

**Lesson 3.2: Create Your Design System**
Components to define:
- **Color Palette:** Primary, secondary, accent, error, warning, success (with hex codes)
- **Typography:** Font family, sizes (h1-h6, body, small), weights, line-height
- **Spacing:** Base unit (usually 8px or 4px grid), padding/margin standards
- **Components:** Buttons, cards, inputs, modals, alerts
- **Shadows & Elevation:** What shadows to use when
- **Border Radius:** Consistency in corner roundness
- **Animations:** Transition durations, easing functions

**Example Design System:**
```
COLOR PALETTE:
- Primary: #2563EB (blue)
- Secondary: #64748B (slate)
- Accent: #10B981 (emerald)
- Error: #EF4444 (red)
- Background: #FFFFFF
- Surface: #F9FAFB (light gray)
- Border: #E5E7EB (medium gray)
- Text: #1F2937 (dark gray)

TYPOGRAPHY:
- Font: Inter (Google Fonts)
- H1: 48px, weight 700, line-height 1.2
- H2: 36px, weight 700, line-height 1.3
- Body: 16px, weight 400, line-height 1.6
- Small: 14px, weight 400, line-height 1.5

SPACING:
- Base unit: 8px
- Standard padding: 16px, 24px, 32px
- Standard margin: 16px, 24px, 32px
- Grid: 24px columns, 16px gutters

COMPONENTS:
- Button: 16px padding, 8px border radius, 2px border
- Card: 24px padding, 12px border radius, light border
- Input: 12px padding, 8px border radius, border on focus
```

**Lesson 3.3: The AI Designer Agent Prompt**
Create a master prompt that becomes your "design enforcer":

```
You are a UI/UX design expert who ensures every design follows this system:

DESIGN SYSTEM: [Paste your design system here]

RULES:
1. Every color used MUST be from the palette above
2. Every font size MUST follow typography guidelines
3. Every component MUST follow spacing rules
4. No gradients unless specifically requested
5. No excessive shadows or effects
6. Maintain 8px alignment grid
7. Think mobile-first, then scale up
8. Accessibility first: sufficient contrast, readable text sizes

When designing, always:
- Start by describing the layout and hierarchy
- Map colors to the system
- List all typography choices
- Show spacing measurements
- Explain why this design works for the customer

If asked to deviate from the system, explain why and what changes
to the system would be needed. Don't just ignore the system.
```

**Lesson 3.4: Using the Designer Agent**
- Save this prompt in your AI tool (Claude, ChatGPT)
- Reference it for every design request
- AI becomes your design system enforcer
- Ensures consistency across entire product

**Lesson 3.5: Evolution & Updating System**
- Design systems grow over time
- When adding new components: update the system
- When changing colors: update everywhere systematically
- Version your design system (v1.0, v1.1, etc.)

### Activities & Exercises
1. **Build Your System:** Create complete design system for your product
2. **Document It:** Write DESIGN_PROMPT.MD for your project
3. **Create Agent Prompt:** Build master designer prompt
4. **Test Consistency:** Use agent to design 5 different components, check consistency
5. **Evolve System:** Practice updating system and re-applying

### XP Breakdown
- Understand design system principles: 50 XP
- Create color/typography/spacing system: 100 XP
- Write DESIGN_PROMPT.MD: 75 XP
- Build designer agent prompt: 75 XP
- Test consistency across 5 components: 100 XP
- **Level 3 Total: 400 XP**

---

## 📚 Level 4: Full Control with Figma & Wireframing

### Learning Objectives
- Design in Figma for full control
- Use AI to generate Figma concepts
- Learn wireframing principles
- Build pixel-perfect designs

### Curriculum Content

**Lesson 4.1: Wireframing Fundamentals**
- Low-fidelity sketches: boxes, lines, text
- Medium-fidelity: Add typography, spacing, hierarchy
- High-fidelity: Colors, real content, final components
- When to use each level

**Lesson 4.2: Creating Wireframes in Figma**
- Basic shapes (rectangles, lines, text)
- Creating layouts with grids
- Using components for consistency
- Naming conventions (Layer organization)
- Auto-layout for responsive design

**Lesson 4.3: Using AI to Generate Wireframe Concepts**
AI can help with:
- **Layout suggestions:** "Create 3 layouts for a dashboard: one grid, one list, one mixed"
- **Component specs:** "Design a card component: sizes, states, spacing"
- **Flow planning:** "Create wireframes for sign-up flow: landing > form > confirmation"
- **Responsive behavior:** "Show how this design adapts from mobile to desktop"

**Example Prompt for AI:**
```
I'm designing a project management dashboard. Create wireframes for:
1. Desktop view (1920px wide)
2. Tablet view (768px wide)
3. Mobile view (375px wide)

Include:
- Header with navigation
- Sidebar with projects
- Main content area showing tasks
- Each view should show how components reflow

Return ASCII or detailed description I can recreate in Figma.
```

**Lesson 4.4: From Wireframe to Design**
- Start with wireframes (structure)
- Apply design system (colors, fonts, spacing)
- Add interactions (hover, click states)
- Test accessibility
- Export for developers

**Lesson 4.5: Figma + AI Workflow**
1. Create wireframe in Figma (structure)
2. Ask AI: "Given this layout, what's the best component organization?"
3. Ask AI: "Generate CSS/Tailwind for this Figma design"
4. Ask AI: "Create responsive rules: mobile breakpoint 640px, tablet 1024px"
5. Implement with AI assistance

### Activities & Exercises
1. **Wireframe 3 Pages:** Create low/med/high-fi wireframes
2. **Figma Setup:** Build design system in Figma (components, colors, typography)
3. **AI Wireframe Generation:** Get AI to suggest 3 layout variations
4. **Responsive Design:** Create mobile + desktop versions
5. **Design to Code:** Export Figma design, ask AI to build it

### XP Breakdown
- Wireframing fundamentals: 75 XP
- Figma basics + components: 100 XP
- AI wireframe generation: 75 XP
- Create responsive designs: 100 XP
- Full design system in Figma: 100 XP
- **Level 4 Total: 450 XP**

---

## 🎓 Week 2 Total
- Level 1 (Research & References): 250 XP
- Level 2 (Precision Prompting): 300 XP
- Level 3 (Design Systems & AI Agent): 400 XP
- Level 4 (Figma & Wireframing): 450 XP

**Week 2 Total: 1,400 XP**

---

## 📋 Implementation Timeline (Iteration 3)
- **5 lessons per level** = 20 total lessons
- Each lesson: 30-45 minutes of content
- Include: video guides, interactive exercises, code examples
- Games: Design critique challenges, style guide enforcement challenges
- Capstone: Design complete product UI following all 4 levels

## 🎯 Student Outcomes
By end of Week 2, students will:
- ✅ Know how to research and gather design inspiration
- ✅ Write specific, actionable design prompts
- ✅ Create and maintain design systems
- ✅ Use AI as a design consistency tool
- ✅ Create wireframes and high-fidelity designs in Figma
- ✅ Prevent "AI vibe code slop" aesthetic
- ✅ Ship professional-looking products

**No more generic AI designs. Only intentional, researched, brand-consistent UX.**
