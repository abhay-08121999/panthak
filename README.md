# PBS Business Consulting Homepage

A responsive React + Vite homepage inspired by the provided PBS consulting website reference. Includes a polished corporate layout, services, consulting process, impact section, leadership note, insights, contact form demo, and footer.

## Requirements
- Node.js 18+ (recommended: current LTS)
- npm

## Run locally

1. Extract the ZIP file.
2. Open a terminal in the `pbs-consulting-homepage` folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Notes
- Images are loaded from Unsplash URLs, so an internet connection is needed for those photographs and Google Fonts.
- The contact form is currently a front-end demo. Connect it to your API, email service, or form provider to receive submissions.
- Replace the sample contact email in `src/main.jsx` with the company's real contact address before publishing.
- Navigation links and the responsive mobile menu are included. Service, insight, and CTA links currently scroll to sections or the contact section until real routes are connected.
