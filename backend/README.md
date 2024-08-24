## Getting Started

```bash
docker-compose up
docker-compose up --build migrate
docker-compose ps
```

### You can also check if migrations are applied or not by running below command.

```bash
npx prisma studio
```

### In case you added any new schema in schema.prisma
```bash
npx prisma generate
npx prisma migrate dev
docker-compose up --build migrate
docker-compose ps
```