# Design System & Portfolio Guidelines (DESIGN.md)

This document establishes the official visual design principles, color palette, typography system, component guidelines, and layout standards for the CV portfolio.

---

## 1. Core Principles & Navigation

- **Language Requirement**: All portfolio content is strictly written in **English (US)**.
- **Text-Only Header Tabs**: Top navigation bar contains pure text labels without icons (`About`, `Education`, `Researches`, `Projects`, `Publications`, `Etc.`).
- **Top-Level Category Structure**: `Researches` and `Projects` exist as independent, standalone top-level categories at the exact same hierarchy as `Education`, `Publications`, and `Etc.`.
- **Standardized Container Width**: All sections are locked to **`960px`** max-width for seamless vertical alignment across the entire site.

---

## 2. Unified White-Blue Palette

```css
:root {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAFC;
  --bg-tertiary: #EFF6FF;

  --primary-blue: #2563EB;       /* Royal Blue accent */
  --primary-blue-hover: #1D4ED8;
  --primary-blue-tint: #DBEAFE;

  --border-light: #E2E8F0;
  --border-subtle: #F1F5F9;

  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-muted: #94A3B8;
}
```

---

## 3. Top Navigation Tab Bar

The header navigation contains 6 text-only tabs:

1. **About**: Biography, profile photo, research objective, contact links (`email`, `github`, `linkedin`, `cv`).
2. **Education**: Academic timeline (ETH Zürich, SNU, GSA).
3. **Researches**: Laboratory & academic research experiences (SNU INRL RORA, Neuromeka AI Team, ETH B2W Quadruped, SNU Bio Robotics) with 4:3 media previews.
4. **Projects**: Undergraduate course & mechatronics competition projects.
5. **Publications**: Academic papers & preprints.
6. **Etc.**: Scholarships, Patents, Activities, and Volunteer work.
