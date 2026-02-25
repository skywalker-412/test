# Smart Event Booking Platform

A scalable microservices-based platform for event creation, booking, payments, notifications, and reviews.

## Microservices
- **User Service**: User registration, login, profiles, roles (PostgreSQL)
- **Event Service**: Event management, categories, capacity (PostgreSQL)
- **Booking Service**: Ticket booking, status, overbooking prevention (MySQL)
- **Payment Service**: Payment processing, transactions (PostgreSQL)
- **Notification Service**: Email notifications, reminders (MongoDB)
- **Review Service**: Event reviews, ratings (MongoDB)
- **API Gateway**: Central entry point for all services

## Tech Stack
- Node.js (Express, TypeScript)
- PostgreSQL, MySQL, MongoDB
- Docker, docker-compose
- Kubernetes-ready structure

## Quick Start
1. Clone the repo
2. Run `docker-compose up --build`
3. Access services on ports 4000-4006

## Folder Structure
- `/user-service`
- `/event-service`
- `/booking-service`
- `/payment-service`
- `/notification-service`
- `/review-service`
- `/api-gateway`

## Each Service Includes
- Dockerfile
- `src/` (controllers, models, routes, config)
- Database config

## API Gateway
- Routes requests to microservices

## To Do
- Implement business logic in each service
- Add Kubernetes manifests
- Enhance API Gateway

---
Replace placeholder code with your own business logic as needed.

docker build -t user-service ./user-service && \
docker build -t event-service ./event-service && \
docker build -t booking-service ./booking-service && \
docker build -t payment-service ./payment-service && \
docker build -t notification-service ./notification-service && \
docker build -t review-service ./review-service && \
docker build -t api-gateway ./api-gateway

docker run -d --name main-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 postgres:15 && \
docker run -d --name main-mongo -p 27017:27017 mongo:6 && \
docker run -d --name main-mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 mysql:8 && \
docker build -t user-service ./user-service && \
docker run -d --name user-service --link main-postgres -e DB_HOST=main-postgres -e DB_PORT=5432 -e DB_USER=postgres -e DB_PASSWORD=postgres -e DB_NAME=users -p 4001:4001 user-service && \
docker build -t event-service ./event-service && \
docker run -d --name event-service --link main-postgres -e DB_HOST=main-postgres -e DB_PORT=5432 -e DB_USER=postgres -e DB_PASSWORD=postgres -e DB_NAME=events -p 4002:4002 event-service && \
docker build -t payment-service ./payment-service && \
docker run -d --name payment-service --link main-postgres -e DB_HOST=main-postgres -e DB_PORT=5432 -e DB_USER=postgres -e DB_PASSWORD=postgres -e DB_NAME=payments -p 4004:4004 payment-service && \
docker build -t notification-service ./notification-service && \
docker run -d --name notification-service --link main-mongo -e DB_HOST=main-mongo -e DB_PORT=27017 -e DB_NAME=notifications -p 4005:4005 notification-service && \
docker build -t review-service ./review-service && \
docker run -d --name review-service --link main-mongo -e DB_HOST=main-mongo -e DB_PORT=27017 -e DB_NAME=reviews -p 4006:4006 review-service && \
docker build -t booking-service ./booking-service && \
docker run -d --name booking-service --link main-mysql -e DB_HOST=main-mysql -e DB_PORT=3306 -e DB_USER=root -e DB_PASSWORD=root -e DB_NAME=bookings -p 4003:4003 booking-service && \
docker build -t api-gateway ./api-gateway && \
docker run -d --name api-gateway -p 4000:4000 api-gateway


cd user-service && npm install && cd ../event-service && npm install && cd ../booking-service && npm install && cd ../payment-service && npm install && cd ../notification-service && npm install && cd ../review-service && npm install && cd ../api-gateway && npm install && cd ..