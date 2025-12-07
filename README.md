# 🏛️ SMVDU Hostel Management Website

> A frontend prototype for Shri Mata Vaishno Devi University's Hostel Management Department

## 📋 Overview

This is a **frontend prototype** created for the Hostel Management Department of **Shri Mata Vaishno Devi University (SMVDU)**. It serves as a comprehensive portal for hostel-related information, administrative details, and grievance redressal. The project demonstrates frontend capabilities using **vanilla HTML, CSS, and JavaScript**.

🔗 **HMS Portal**: [View Portal](https://smvdu-hostels.netlify.app/)

## ✨ Features

- 🖥️ **Strictly desktop-only layout** (viewport width=1200px)
- 🧩 **Dynamic component loading** (header, navbar, sidebar, footer) loaded via JavaScript.
- 🖼️ **AI-Generated Imagery**: Custom AI-generated exterior views for each hostel.
- 🔄 **Auto-updating components**: Footer social icons and header details dynamically populate based on common scripts.
- ⚡ **Interactive Elements**:
  - Blinking "Official Website" indicator in the footer.
  - Homepage image slideshow with 8 hostel feature images.
  - Dropdown navigation menus.
- 📰 **Sidebar Widget**: Reusable sidebar component for announcements (search removed for cleaner UI).
- 📂 **Robust Layout**:
  - Consistent header/footer across all pages.
  - Standardized "About Us", "Hostels", and "Fees" page layouts.
- 📱 **Responsive-aware**: While desktop-focused, includes basic touch detection for dropdowns on touch devices.

## 🏗️ Project Structure

```
/
├── index.html              # Homepage
├── README.md               # Project documentation
├── components/             # Reusable HTML components
│   ├── footer.html         # Footer with blinking text & social icons
│   ├── header.html         # Header with SMVDU logo & right-aligned content
│   ├── navbar.html         # Main navigation with dropdowns
│   ├── sidebar-widget.html # Sidebar for recent posts
│   └── slideshow.html      # Slideshow component template
├── documents/              # Downloadable documents/forms
├── images/                 # Image assets
│   ├── hostels/            # AI-generated hostel exterior images
│   ├── smvdu-logo.png      # University logo
│   ├── vc.png              # Vice Chancellor's image
│   └── ...                 # Social icons and other assets
├── pages/                  # Website content pages
│   ├── about-us/           # VC Message, Wardens Council, Anti-Ragging, etc.
│   ├── fees/               # Fee structure, payment procedures
│   ├── hostels/            # Individual pages for Boys' and Girls' hostels
│   ├── utility/            # Contact, feedback, and portals
│   └── xyz-portal.html     # Legacy portal page
├── scripts/                # JavaScript files
│   ├── script.js           # Main logic (path handling, component loading)
│   ├── header-loader.js    # Logic for dynamic header/footer icon loading
│   └── ...                 # Helper scripts
└── styles/
    └── style.css           # Main stylesheet including animations
```

## 🛠️ Development Tools

The project includes custom scripts for maintenance:

| Script               | Purpose                                                 |
| -------------------- | ------------------------------------------------------- |
| `script.js`          | Core logic for path resolution and component injection. |
| `header-loader.js`   | Dynamically loads and fixes paths for header/footer icons. |

## 🌐 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Edge (Latest)
- ✅ Safari (Latest)

> **Note:** The site is designed as a **desktop-first experience**. Mobile users will see the full desktop layout scaled down.

## 🖥️ Layout & Design

- **Viewport**: Fixed width of `1200px`.
- **Navigation**: Top-bar with official links, primary navbar with specific categories.
- **Footer**: Compact 2-column layout with essential links and university contact info.
- **Images**: High-quality assets located in `images/` directory.

## 👨‍💻 Author

**Parag Kumar**

## 📄 License

This project is for educational and demonstration purposes.

---

<div align="center">
  <sub>Built with ❤️ for SMVDU Hostel Management Department</sub>
</div>
