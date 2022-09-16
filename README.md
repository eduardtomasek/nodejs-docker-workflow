# NodeJS Docker Workflow Blueprint

# Quick instructions
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
docker exec -it node-app bash
```

```bash
docker volume ps
```

```bash
# very risky

docker volume prune
```

```bash
docker-compose up -d
```

```bash
docker-compose down -v
```