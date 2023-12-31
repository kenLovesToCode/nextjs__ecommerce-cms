# Next.js 13.4 | Clerk | ShadcnUI | Tailwind | Prisma

```sh
# create app
$ npx create-next-app@latest nextjs_ecommerce-cms --typescript -tailwind --eslint

# install prisma
# initialize prisma
$ npx prisma init

# connect db on planetscale

# generate migration
$ npx prisma generate

# push to planetscale
$ npx prisma db push

# reset db
$ npx prisma migrate reset
#re-generate and push again after reset

# Stripe payment test
$ stripe login # open cmd with the admin project path
# and copy the key

$ stripe listen --forward-to localhost:3001/api/webhook

#open separate cmd
$ stripe trigger payment_intent.succeeded
#use test card number by country

```

##### Websites used

- [Cloudinary](https://cloundinary.com)
- [Next Cloudinary](https://next.cloudinary.dev)
- [shadcn/ui](https://ui.shadcn.com)
- [PlanetScale](https://planetscale.com)
- [clerk](https://clerk.com)
