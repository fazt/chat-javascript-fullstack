# Javascript Full Stack
is a simple chat that was built with entire javascript technologies, for the frontend, backend and database. 

![](docs/screenshot.png)

# Used Technologies
- Nodejs
  - Express
  - Socket.io
- PostgreSQL

## Install Project

```bash
git clone https://github.com/fazt/chat-javascript-fullstack.git
cd chat-javascript-fullstack
npm install
```

## Create .env file

```bash
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/chat_app
```

Remember to replace the DATABASE_URL with your own PostgreSQL URI.

## Run the project

```bash
npm run dev
```

### Docker Compose

```bash
docker compose up -d

docker exec -it chatdb psql -U postgres -d chat_app
```

then in order to create the tables, paste the content of the database/db.sql file and run it.

# Links and Resources used in this project

- [Bootstrap4 CDN](http://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [Background Gradient Color](https://uigradients.com/#Lawrencium)
- [jQuery CDN](https://code.jquery.com/)
