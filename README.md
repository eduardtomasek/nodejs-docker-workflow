# NodeJS Docker Workflow Blueprint

## Quick instructions
```bash
docker build -t node-app-image .
```

```bash
# WINDOWS %cd%
# POWERSHELL ${pwd}
# MAC, LINUX $(pwd)

# --env PORT=4000
# --env-file ./.env

docker run -p 3000:4000 -d --name node-app --env-file ./.env -v %cd%:/app:ro -v /app/node_modules node-app-image
```

```bash
docker logs node-app
```

```bash
docker ps
```

```bash
docker ps -a
```

```bash
# remove container with attached volumes

docker rm node-app -fv
```

```bash
docker image rm node-app-image
```

```bash
# enter into container with bash

docker exec -it node-app bash
```

```bash
docker volume ps
```

```bash
# very risky, remove all volumes

docker volume prune
```

```bash
docker-compose up -d
```

```bash
# on up rebuild image

docker-compose up -d --build
```

```bash
# delete all with attached volumes

docker-compose down -v
```

```bash
# dev

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```

```bash
# prod

docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
```