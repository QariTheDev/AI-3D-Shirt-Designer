# 👕 AI-Powered 3D Shirt Designer

An interactive web application that allows users to **design and customize 3D shirts** in real time with **AI-generated textures** and live previewing. Built with **Next.js**, **Three.js**, **React Three Fiber**, and styled using **Tailwind CSS** and **Framer Motion**, this project delivers a smooth and modern UI experience backed by a **MERN stack** backend.

![image](https://github.com/user-attachments/assets/ee57ca49-b583-4f53-bf31-c0936b12ce29)


---

## 🚀 Features

- 🧠 **AI Integration** – Generate logos and textures using AI (e.g. OpenAI or Replicate API)
- 🧥 **3D Model Interaction** – Rotate, zoom, and view shirts in real-time 3D
- 🎨 **Live Customization** – Pick shirt colors, upload images, or generate new designs
- 💾 **Persistent Storage** – Save and manage your designs using MongoDB
- 🖱️ **Drag-and-Drop Decals** – Place custom logos or full textures on the shirt
- ⚡ **Framer Motion** – Smooth UI transitions and animated layout
- 📱 **Responsive Design** – Optimized for mobile and desktop screens

---

## 🛠️ Tech Stack

| Category        | Tools Used                                                                 |
|----------------|-----------------------------------------------------------------------------|
| **Frontend**    | Next.js, React, Tailwind CSS, Framer Motion, Zustand                       |
| **3D Rendering**| Three.js, React Three Fiber, @react-three/drei                             |
| **Backend**     | Node.js, Express.js, MongoDB                                               |
| **AI/Tools**    | OpenAI or Replicate API (for image generation), Cloudinary (optional)      |
| **State**       | Zustand or Redux (your preference)                                         |

---

## 📦 Installation

1.  **Clone The Repository**
```bash
git clone https://github.com/your-username/ai-3d-shirt-designer.git
cd ai-3d-shirt-designer
```

2.  **Install frontend & backend dependencies**
  ```bash
  npm install
  Set up your .env file
  Create a .env.local file and add your environment variables:
  ```

3.  **Setup Env Files**
  ```
  OPENAI_API_KEY=your_openai_api_key
  MONGODB_URI=your_mongodb_uri
  NEXT_PUBLIC_CLOUDINARY_URL=your_cloudinary_upload_url (if using)
  Run the development server
  ```

4.  **Run the Project**
  ```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Visit http://localhost:3000 in your browser.
  ```

📸 Screenshots
![image](https://github.com/user-attachments/assets/32c83b3e-abbb-4cfb-be06-36e5c509c34d)
		

### 🔮 **Roadmap**
- 3D shirt viewer
- Color picker and texture uploader
- AI prompt-based image generation
- Real-time decal placement
- User authentication and profile management
- Design sharing & community gallery
- Export 3D design as .glb or image

---

### 🧠 **Inspiration**
This project was inspired by modern e-commerce platforms and tools like Figma, Zara's 3D preview, and AI-based generators to give users full creative freedom in clothing design.

---
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

---
