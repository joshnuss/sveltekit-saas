# SvelteKit SaaS Demo

Code examples from the video course [Build a SaaS with SvelteKit](https://joshuanussbaum.podia.com/build-a-saas-with-sveltekit)
## Setup environment

Copy example environment:

```sh
cp .env.example .env
```

Then, customize the `.env` file.

- `AUTH_SECRET`: secret for Auth.js. Can be generated using `openssl rand -base64 32`
- `GITHUB_ID`: id for GitHub OAuth client
- `GITHUB_SECRET`: secret for GitHub OAuth client
- `SECRET_STRIPE_KEY`: Stripe API secret key
- `STRIPE_WEBHOOK_SECRET`: Stripe secret for webhooks

## Install the Stripe cli

Follow instructures for setting up the Stripe CLI:

https://stripe.com/cli

## Development mode

Run the dev server

```sh
pnpm dev
```

Tunnel Stripe webhooks events to the local dev server:

```sh
stripe listen --forward-to localhost:5173/integrations/stripe
```

## License

MIT
