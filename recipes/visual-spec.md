# Recipe Page Visual Requirements
1. **Brand Header**
   - Maintain centered logo with icon + wordmark stack mirroring screenshot.
   - Reserve generous whitespace around header (≈30–40px top/bottom).

2. **Search Bar**
   - Full-width rounded rectangle within 960px max width container.
   - Left-align placeholder text “Find a recipe” (sentence case).
   - Search button styled as outlined square containing magnifier glyph.

3. **Recipe Card Structure**
   - Each recipe rendered inside a white card with subtle drop shadow and 16px corner radius.
   - Card content splits into media/media-info columns: image (left, 250×160 min) and meta (right).
   - Meta column order: category pill → recipe title in accent blue → star rating row → description paragraph.

4. **Typography**
   - Body copy uses a clean sans-serif (e.g., Lexend / Open Sans) at 16px.
   - Recipe title sized 24px, light weight, uppercase/lowercase per data.
   - Category pill uppercase, 12px, medium weight, gray background (#f4f4f4).

5. **Color Palette**
   - Background: ultra-light gray (#f8f8f8).
  - Card border: #b5b3af.
  - Accent blue for titles: #1f6fb2.
  - Footer/social icons outlined in black with white fill.

6. **Footer**
   - Caption acknowledging icon source left-aligned.
   - Three outlined square social buttons (Instagram, YouTube, Pinterest) aligned right, evenly spaced.

7. **Behavior**
   - Search input filters recipes client-side using data from `recipes.mjs`.
   - Rating stars rendered with filled/empty glyphs per recipe rating field (support halves by rounding down/up).

8. **Spacing**
   - Vertical rhythm: 24px between structural sections, 12px between intra-card elements.
   - Cards spaced by 32px vertically.