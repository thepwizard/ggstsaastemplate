This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Build the docker image
```bash
docker build -t ggtsaastemplate .
docker run -p 3000:3000 ggstsaastemplate
You can now see container running in Docker Desktop and you should be able to 
aceess the app on http://localhost:3000
docker images (this command showcase the images in your local desktop)
```

## Push your image to docker hub 
```bash
docker login (this would login to docker hub where our docker image will be stored)
docker tag 691a586093be ratewar/ggtsaastemplate (you can replace this with your imagecode by running docker images and your user/name for docker hub)
docker push ratewar/ggtsaastemplate
```

## Deploying on kubernetes 
```bash
change the image path in deployment.yml in k82 folder
containers:
  - name: ggtsaastemplate
    image: ratewar/ggtsaastemplate:latest (replace this with your user and imagename)
kubectl apply -f ./db-credentials.yaml
kubectl apply -f ./db-migrate-job.yaml

Wait for this to finish before next steps

kubectl apply -f ./deployment.yaml 
kubectl apply -f ./service.yaml 
You should now be able to access website on http://localhost:30000 (not 3000)
Go to docker desktop and you can see your two pods 
```

## How To Check Logs 

```bash

~/Downloads/ggtsaastemplate/frontend/k8s $>kubectl get jobs
NAME             STATUS   COMPLETIONS   DURATION   AGE
db-migrate-job   Failed   0/1           2m5s       2m5s

~/Downloads/ggtsaastemplate/frontend/k8s $>kubectl delete jobs db-migrate-job
job.batch "db-migrate-job" deleted

~/Downloads/ggtsaastemplate/frontend/k8s $>kubectl get secret db-credentials -o yaml

~/Downloads/ggtsaastemplate/frontend/k8s $>kubectl logs job/db-migrate-job
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "prisma_db", schema "public" at "postgres:5432"

3 migrations found in prisma/migrations

Applying migration `20240224122304_initialsetup`
Applying migration `20240824135447_addeduser`
Applying migration `20240824135938_addedposts`

The following migration(s) have been applied:

migrations/
  └─ 20240224122304_initialsetup/
    └─ migration.sql
  └─ 20240824135447_addeduser/
    └─ migration.sql
  └─ 20240824135938_addedposts/
    └─ migration.sql
      
All migrations have been successfully applied.

~/Downloads/ggtsaastemplate/frontend/k8s $>kubectl exec -it postgres-7d554995f8-xfpgb -- /bin/sh
# psql -U prisma_user -d prisma_db
psql (16.4 (Debian 16.4-1.pgdg120+1))
Type "help" for help.

prisma_db=# \dt
                 List of relations
 Schema |        Name        | Type  |    Owner    
--------+--------------------+-------+-------------
 public | Post               | table | prisma_user
 public | ProductLaunch      | table | prisma_user
 public | _prisma_migrations | table | prisma_user
 public | users              | table | prisma_user
(4 rows)

prisma_db=# \q
# exit
```
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
