MONG_API = mongodb+srv://root:<root>@cluster0.qkz3kxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
POSTGRE_API = https://lqqtpugtjmijredkxgql.supabase.co
POSTGRE_API_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxcXRwdWd0am1panJlZGt4Z3FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyOTc1MjUsImV4cCI6MjA2Nzg3MzUyNX0.GpX3AjCPJkSYbRTlWJa6ZIXcZnP2isjP57gBZlSmILU

# Tailwind CSS Setup (If Not Present)

If you do not see a `tailwind.config.js` or similar file in your project root, you need to set up Tailwind CSS:

1. **Install Tailwind CSS and dependencies:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
   This will create `tailwind.config.js` and `postcss.config.js` if missing.

2. **Configure your template paths:**
   In `tailwind.config.js`:
   ```js
   module.exports = {
     content: [
       "./app/**/*.{js,ts,jsx,tsx}",
       "./components/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. **Ensure Tailwind is imported in your CSS:**
   Your `app/globals.css` should start with:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
   (You may keep other custom imports as needed.)

4. **Restart your dev server** after making these changes.

---

If you already have Tailwind set up, you can ignore this section. If you need help, see https://tailwindcss.com/docs/guides/nextjs