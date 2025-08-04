# Chartered Insights - Roshan Kumar & Associates

A modern, professional website for **Roshan Kumar & Associates (RKACA)**, a full-service Chartered Accountancy firm headquartered in Biratnagar, Nepal.

## 🏢 About RKACA

Roshan Kumar & Associates is a comprehensive CA firm delivering expert audit, taxation, risk advisory, and strategic business consulting services to businesses, not-for-profit organizations, and government entities across Nepal.

### Our Mission
Empowering businesses with financial clarity, robust compliance, and strategic insights that help them navigate challenges and seize opportunities in a competitive, evolving marketplace.

## 🎨 Brand Design System

### Core Colors
- **Deep Chartered Blue**: `#015A77` - Primary backgrounds, navigation, CTA buttons
- **Fresh Teal**: `#00BFB2` - Secondary CTAs, interactive elements, highlights
- **Crisp White**: `#FFFFFF` - Text on dark backgrounds, content card backgrounds
- **Report Black**: `#1E1E1E` - Body text and content on light backgrounds
- **Audit Grey**: `#F5F5F5` - Section backgrounds, form fields, subtle borders
- **Alert Red**: `#BE3232` - Error messages, critical alerts

### Typography
- **Headings**: Montserrat (Bold/Semi-Bold)
- **Body Text**: Lato (Regular)

## 🌟 Key Features

### ✅ **Professional Design**
- Modern, clean interface following Chartered Insights brand guidelines
- Responsive design optimized for all devices
- Professional color scheme and typography

### ✅ **Comprehensive Pages**
- **Home**: Hero section, services overview, client testimonials slider, industries served
- **About**: Company overview, core values, leadership team, expertise areas
- **Services**: Detailed service descriptions, industries served, why choose RKACA
- **Contact**: Contact form, office information, contact details
- **Industries**: Sector-specific expertise and solutions
- **Additional Pages**: Insights, Events, Offices, Careers, Blogs

### ✅ **Interactive Components**
- Client testimonials carousel with star ratings
- Hover effects and smooth animations
- Professional navigation with active state indicators
- Call-to-action buttons throughout the site

### ✅ **Technology Stack**
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui with Radix UI primitives
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Carousel**: Embla Carousel

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/komal0000/chartered-insights.git
   cd chartered-insights
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8082` (or the port shown in terminal)

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navigation.tsx  # Header navigation
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Homepage with slider
│   ├── About.tsx       # Company information
│   ├── Services.tsx    # Service offerings
│   ├── Contact.tsx     # Contact information
│   ├── Industries.tsx  # Industry expertise
│   ├── Insights.tsx    # Thought leadership
│   ├── Events.tsx      # Events and webinars
│   ├── Offices.tsx     # Office locations
│   ├── Careers.tsx     # Career opportunities
│   └── Blogs.tsx       # Blog posts
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── styles/             # CSS and styling
```

## 🎯 Core Services Highlighted

1. **Audit & Assurance** - Comprehensive audit services with international standards
2. **Taxation Services** - Expert tax planning and compliance for corporate and individual clients
3. **Risk Advisory** - Enterprise risk management and internal controls
4. **Business Consulting** - Strategic insights and operational efficiency solutions
5. **Accounting & Outsourcing** - Complete accounting solutions including offshore services
6. **Corporate Finance** - Financial advisory for strategic business decisions

## 🏭 Industries Served

- **Healthcare & Medical** - Hospitals, clinics, medical practices
- **Banking & Financial Services** - Comprehensive audit and risk management
- **Manufacturing & Trading** - Cost accounting and operational efficiency
- **Development Organizations** - NGOs, INGOs, and development agencies

## 🔧 Customization

### Brand Colors
Colors are defined in `src/index.css` using HSL values for consistency with the Chartered Insights brand system.

### Content Updates
- Update company information in respective page components
- Modify contact details in `Contact.tsx` and `Footer.tsx`
- Add new services or industries in the respective data arrays

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in main routing configuration
3. Update navigation menu in `Navigation.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following the brand guidelines
4. Test thoroughly across devices
5. Submit a pull request

## 📞 Support

For questions about this website or RKACA services:
- **Email**: info@rkaca.com.np
- **Phone**: +977-XXX-XXXX
- **Address**: Biratnagar, Province 1, Nepal

## 📄 License

© 2024 Roshan Kumar & Associates. All rights reserved.

---

**Built with ❤️ for professional chartered accountancy services in Nepal**
