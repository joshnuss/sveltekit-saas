# SvelteKit SaaS Demo

Code examples from the video course [Build a SaaS with SvelteKit](https://joshuanussbaum.podia.com/build-a-saas-with-sveltekit)
## Setup environment

Start by copying the example environment:

```sh
cp .env.example .env
```

Then, customize the `.env` file. You'll need to provide values for:

- `AUTH_SECRET`: The secret Auth.js uses. Can be generated using `openssl rand -base64 32`
- `GITHUB_ID`: The id of your GitHub OAuth client.
- `GITHUB_SECRET`: The secret of your GitHub OAuth client.
- `SECRET_STRIPE_KEY`: Your Stripe API secret key.
- `STRIPE_WEBHOOK_SECRET`: Your Stripe secret for webhooks.

## Setup

Install packages:

```sh
pnpm install
```

Create the database:

```sh
pnpm prisma db push
```

## Install the Stripe cli

To tunnel Stripe webhooks in development mode, install Stripe's CLI.

Follow instructions here:

https://stripe.com/cli

## Development mode

First, run the dev server

```sh
pnpm dev
```

Then, tunnel Stripe webhooks events to the local dev server:

```sh
stripe listen --forward-to localhost:5173/integrations/stripe
```

## Seed data

You can adjust the seed data in `prisma/seed.js` to use price ids from your Stripe account.

To load seed data, run:

```sh
prisma db seed
```

## License

MIT
