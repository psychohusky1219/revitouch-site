# ReviTouch website

Modern ReviTouch marketing website built with Next.js-compatible source for editing in VS Code and deployment through GitHub, Vercel, or OpenAI Sites.

## Local development

1. Install Node.js 22 or newer.
2. Open this folder in VS Code.
3. Run `npm install`, then `npm run dev`.
4. Copy `.env.example` to `.env.local` and add the integration values below.

## Formspree

Create a form at formspree.io, copy the endpoint shown for the form, and set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.env.local` and in Vercel project settings under Environment Variables.

## Sanity

Sanity is optional for the first release. When the client needs to edit treatments, prices, reviews, or staff without VS Code, create a Sanity project and set the project ID and dataset variables. The content model can then replace the local arrays in `app/page.tsx`.

## Trustindex

Create a Google Reviews widget in Trustindex, publish it, and add the provided widget ID/script. Keep the current curated review section as a reliable fallback.

## GitHub and Vercel

Create an empty GitHub repository, commit this folder, and push the `main` branch. In Vercel choose **Add New → Project**, import the repository, add the environment variables, and deploy. Vercel will automatically redeploy after future GitHub pushes.
