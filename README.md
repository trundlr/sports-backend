# Sports Backend
This repository serves as a backend for the s&box game [Sports](https://github.com/trundler-dev/sbox-sports).

The goal is to provide functionality to players that can't be handled with s&box alone, such as persistence.

### Running
You need to have Docker and docker-compose installed.

Then, run the following command:
```bash
docker-compose up -d --build
```

You can monitor the logs of the server:
```bash
docker logs --follow sports-backend
```