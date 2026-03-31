# Image Replacement Guide — LEO Lab Website

This guide documents all placeholder images currently used on the website that should be replaced with actual LEO 2025 conference photos once they become available.

## Source Location

The LEO 2025 conference photos are expected to be placed in:
```
/Users/sher/Downloads/OneDrive_1_3-31-2026/LEO 2025 photos/
```
This folder is currently **empty**.

Once photos are available, copy them into:
```
/Users/sher/project/website/public/
```

---

## Placeholder Images Currently In Use

### Home Page Carousel (`app/page.tsx`)

| File | Alt Text | Used For | Replace With |
|------|----------|----------|--------------|
| `h4.JPG` | LEO Lab Research Activities 1 | Hero carousel slide 1 | LEO 2025 conference wide-angle / keynote shot |
| `2.jpeg` | LEO Lab Workshop Session | Hero carousel slide 2 | LEO 2025 group photo / audience shot |
| `h1.JPG` | LEO Lab Team | Hero carousel slide 3 | LEO 2025 team photo |
| `h2.JPG` | LEO Lab Conference Session | Hero carousel slide 4 | LEO 2025 panel discussion photo |
| `h3.JPG` | LEO Lab Panel Discussion | Hero carousel slide 5 | LEO 2025 networking / event photo |

### Workshop Page Gallery (`app/workshop/page.tsx`)

Used in the **LEO 2025 Previous Conference** photo gallery carousel:

| File | Alt Text | Used For | Replace With |
|------|----------|----------|--------------|
| `p2.JPG` | LEO Conference 2025 Session | Gallery slide 1 | LEO 2025 paper presentation photo |
| `p1.JPG` | LEO Conference 2025 Panel | Gallery slide 2 | LEO 2025 panel discussion photo |
| `p3.JPG` | LEO Conference 2025 Keynote | Gallery slide 3 | LEO 2025 keynote speaker photo |
| `p4.JPG` | LEO Conference 2025 Audience | Gallery slide 4 | LEO 2025 audience / networking shot |
| `p5.JPG` | LEO Conference 2025 Networking | Gallery slide 5 | LEO 2025 networking / social event photo |

### About Page (`app/about/page.tsx`)

| File | Alt Text | Used For | Replace With |
|------|----------|----------|--------------|
| `leo.png` | LEO Lab Logo | LEO Lab logo | ✅ Keep as-is (actual logo) |
| `pu.png` | Plaksha Logo | Plaksha University logo | ✅ Keep as-is (actual logo) |

### Workshop Page Partners Section

| File | Alt Text | Used For | Replace With |
|------|----------|----------|--------------|
| `leo.png` | LEO Lab Logo | Partner logo | ✅ Keep as-is (actual logo) |
| `tef.jpeg` | TEF Logo | Partner logo | ✅ Keep as-is (actual logo) |

---

## How to Replace Images

1. **Get the photos** from the OneDrive folder (or wherever they are shared)
2. **Copy photos** to `/Users/sher/project/website/public/`
3. **Rename photos** to match the filenames in the table above (e.g., rename a conference photo to `h1.JPG`)
   
   **OR** update the filenames in the code:
   - Home page: Edit `app/page.tsx` — update the `carouselImages` array
   - Workshop page: Edit `app/workshop/page.tsx` — update the `carouselImages` array

4. **Rebuild** the site: `npm run build`

---

## Additional Assets Already Copied

These were copied from the OneDrive folder and are ready to use:

| Source File | Destination | Used On |
|------------|-------------|---------|
| `LEO POSTER.png` | `public/leo_poster_2026.png` | Home page — Conference 2026 section |
| `The LEO Economics Conference Schedule (2).pdf` | `public/Conf_Schedule_2026.pdf` | Workshop page — Download button |
| `Leo Magazine 2026.pdf` | `public/magazine_2026.pdf` | Magazine page — 2026 edition download |
| `linkedin-video (1).mp4` | `public/videos/leo_2025_1.mp4` | Workshop page — 2025 conference videos |
| `linkedin-video (2).mp4` | `public/videos/leo_2025_2.mp4` | Workshop page — 2025 conference videos |
| `linkedin-video (3).mp4` | `public/videos/leo_2025_3.mp4` | Workshop page — 2025 conference videos |
| `linkedin-video (4).mp4` | `public/videos/leo_2025_4.mp4` | Workshop page — 2025 conference videos |

---

## Video Files

The 4 videos from the LEO 2025 conference are embedded on the workshop page under the "LEO Economics Conference 2025" section. They are served as static `<video>` elements with controls.

> **Note:** These video files are ~4-6 MB each. When deploying to GitHub Pages with `output: "export"`, they will be included in the static output. If file size is a concern, consider hosting them externally (e.g., YouTube embeds) and linking instead.
