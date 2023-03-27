# SvelteKit SaaS Demo

Code examples from the video course [Build a SaaS with SvelteKit](https://joshuanussbaum.podia.com/build-a-saas-with-sveltekit)

## Features

- Authentication with Auth.js
- Database with Prisma
- Plans & pricing page
- Payments with Stripe Checkout
- Syncing Stripe webhook events with account

## Setup

Start by copying the example environment:

```sh
cp .env.example .env
```

Then customize the `.env` file. You'll need to provide values for:

- `DATABASE_URL`: The url to you database.
- `AUTH_SECRET`: The secret Auth.js uses. Can be generated using `openssl rand -base64 32`
- `GITHUB_ID`: The id of your GitHub OAuth client.
- `GITHUB_SECRET`: The secret of your GitHub OAuth client.
- `SECRET_STRIPE_KEY`: Your Stripe API secret key.
- `STRIPE_WEBHOOK_SECRET`: Your Stripe secret for webhooks.

Install all packages:

```sh
pnpm install
```

Create the database:

```sh
pnpm prisma db push
```

## Install the Stripe CLI

To tunnel Stripe webhooks in development mode, install Stripe's CLI.

Follow instructions here:

https://stripe.com/cli

## Development mode

First, run the dev server

```sh
pnpm dev
```

Then, tell Stripe to tunnel webhooks to the local dev server:

```sh
stripe listen --forward-to localhost:5173/integrations/stripe
```

## Seed data

You can adjust the seed data in `prisma/seed.js` to use price ids from your Stripe account.

To load seed data, run:

```sh
prisma db seed
```

## Video course

If you'd like to learn more, check out the full video here:
https://joshuanussbaum.podia.com/build-a-saas-with-sveltekit

## License

MIT
