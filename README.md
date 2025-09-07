# **Next.js + Strapi Test Project**

A minimal **Next.js 15** project using **TypeScript** that integrates with the **Strapi v5 REST API** to display a list of attractions and dynamic detail pages.

This project demonstrates **clean code structure**, **incremental static regeneration (ISR)**, **API integration**, and proper error handling.

---

## **🚀 Tech Stack**

- **Next.js 15** (App Router + TypeScript)
- **Tailwind CSS** (UI Styling)
- **Strapi v5 REST API** (Public API)
- **Incremental Static Regeneration (ISR)**
- **Next Image Optimization**

---

## **📌 Features**

✅ Fetch attractions list from **Strapi REST API**  
✅ Dynamic attraction detail pages using **slug**  
✅ Uses **Incremental Static Regeneration (ISR)**  
✅ Handles **missing images** with a default fallback

---

## **⚙️ Installation & Setup**

### **1. Clone the Repository**

```bash
git clone https://github.com/kujerocoding/next15-strapi-test.git
cd next15-strapi-test
```

### **2. Install Dependencies**

```bash
npm install
```

or

```bash
yarn install
```

### **3. Create Environment File**

Inside the root folder, create a `.env.local` file:

```env
NEXT_PUBLIC_STRAPI_API_URL=https://api.expeditionlapland.com
```

This allows us to configure the base URL for Strapi dynamically.

---

## **▶️ Running the Project**

### **Development Mode**

```bash
npm run dev
```

The app will be available at:  
🔗 http://localhost:3000

### **Build for Production**

```bash
npm run build
npm start
```

## **🧪 Test Instructions**

This project was created as part of a coding test.

- **Homepage** → Displays a link to view all attractions
- **Attractions Page** → Lists all attractions fetched from Strapi
- **Detail Page** → Uses a dynamic `[slug]` route to fetch specific attraction data
- Handles missing fields gracefully
- Uses **Incremental Static Regeneration** for better performance

---
