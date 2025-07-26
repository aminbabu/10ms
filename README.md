# 10 Minute School Assessment

This is a production-ready [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), configured with [`next-intl`](https://next-intl-docs.vercel.app/) for localization, with English (`en`) set as the default locale.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (version 18 or higher recommended)
- npm, yarn, pnpm, or bun (package manager of your choice)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/aminbabu/10ms.git
cd 10-minute-school-assessment
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application. The page auto-updates as you edit files, such as `app/[locale]/page.tsx`.

### Localization with next-intl

This project uses [`next-intl`](https://next-intl-docs.vercel.app/) for internationalization, optimized for production. The default locale is English (`en`).

- **Locale Configuration**: Localization files are located in the `messages` directory, with `en.json` as the default.
- **Switching Locales**: The `next-intl` middleware handles locale routing (e.g., `/en`, `/bn`). Update `i18n.ts` or `next.config.js` to add more locales.
- **Usage**: Use `useTranslations` or `getTranslations` to access translated strings. See the [next-intl documentation](https://next-intl-docs.vercel.app/) for details.

## Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

The build output is generated in the `.next` directory, ready for deployment.

### Running in Production

Start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

The application will be available at [http://localhost:3000](http://localhost:3000) or the configured port.

### Environment Variables

Set the following environment variables for production:

- `i18n/routing.ts`: Update to `en` for English as the default locale.

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize and load [Inter, and Geist_Mono](https://vercel.com/font), font families designed for ensuring fast performance in production.

## Production Optimizations

- **Server Side Rendering**: SSR or Server Side Rendering is also known as dynamic rendering.
- **Static Generation**: Pages are pre-rendered at build time where possible for optimal performance.
- **Optimized Images**: Use Next.js's built-in `Image` component for optimized image delivery.
- **Middleware**: The `next-intl` middleware ensures efficient locale routing with minimal overhead.
- **Error Handling**: Production builds include error boundaries and logging for robust monitoring.

## Learn More

Explore these resources to learn more:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial.
- [next-intl Documentation](https://next-intl-docs.vercel.app/) - Guide to internationalization.
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - Contribute or provide feedback.

## Deploy on Vercel

Deploy this production-ready app using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), built by the Next.js team.

For detailed deployment instructions, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
