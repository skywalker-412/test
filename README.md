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