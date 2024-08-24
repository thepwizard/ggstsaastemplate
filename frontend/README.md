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

## Build teh docker image More
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
kubectl apply -f ./deployment.yml 
kubectl apply -f ./service.yml 
You should now be able to access website on http://localhost:30000 (not 3000)
Go to docker desktop and you can see your two pods 
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
