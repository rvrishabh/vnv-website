# V.N.V Engineers — Website

Marketing site for **V.N.V Engineers**, an IBBI-registered property valuation practice empanelled with leading banks and housing finance companies in India.

Built as a static React SPA — deployable on **Vercel**, **AWS Amplify**, or any static host with no backend server.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons
- [Web3Forms](https://web3forms.com/) for contact enquiries (frontend-only)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services overview, empanelled banks |
| `/about` | About the firm and lead valuer |
| `/services` | Valuation services with images |
| `/empanelled-banks` | Banks and HFCs empanelled |
| `/valupro` | ValuPro product |
| `/contact` | Enquiry form and office details |

## Getting started

### Prerequisites

- Node.js 18+ and npm

### Install

```bash
npm install
```

### Environment variables

Copy the example env file and add your Web3Forms access key:

```bash
cp .env.example .env
```

Edit `.env`:

```env
VITE_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key
```

**Web3Forms setup**

1. Sign up at [web3forms.com](https://web3forms.com)
2. Create a form with destination email: **info@vnvengineers.com**
3. Paste the Access Key into `.env`

The contact form posts directly to Web3Forms from the browser. No API server is required.

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production build

```bash
npm run build
npm run preview   # optional local preview of dist/
```

Output is in `dist/`.

## Deployment

### Vercel

1. Import the repository
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add environment variable:
   - `VITE_WEB3FORMS_ACCESS_KEY` = your Web3Forms access key
6. Deploy

### AWS Amplify

1. Connect the repo in Amplify Hosting
2. Build settings:
   - Build command: `npm run build`
   - Artifacts base directory: `dist`
3. Add the same env var under **Environment variables**:
   - `VITE_WEB3FORMS_ACCESS_KEY`
4. Save and deploy

For client-side routing, configure a rewrite so all paths serve `index.html` (Vercel and Amplify usually handle SPAs automatically when using the Vite preset).

## Project structure

```
├── components/       # Shared UI (Header, Footer, BankLogo, ServiceImage, …)
├── screens/          # Page-level views
├── lib/              # contactApi (Web3Forms integration)
├── public/
│   ├── images/services/   # Service card images
│   └── logos/banks/       # Empanelled bank logos
├── data.ts           # Banks, services, stats content
├── routes.tsx        # React Router routes
└── index.css         # Tailwind + brand tokens
```

## Contact form

Submissions are sent via [Web3Forms](https://web3forms.com/) to **info@vnvengineers.com**.

Email subject format: `{name} sent a message from website`

Fields included in each enquiry: name, organization, phone, email, property type, city, and message.

## Content updates

- **Banks / services / stats** — edit `data.ts`
- **Bank logos** — add files under `public/logos/banks/` and map them in `components/BankLogo.tsx`
- **Service images** — add files under `public/images/services/` and set `image` on each entry in `data.ts`
- **Contact email shown on site** — `components/Footer.tsx` and `screens/Contact.tsx`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Serve `dist/` locally |

## License

Private — © V.N.V Engineers.
