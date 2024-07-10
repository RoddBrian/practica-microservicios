# Microservices Project

This project consists of three microservices: a restaurant reservation service, a billing service, and a product management service. The microservices are developed in Node.js without using any frameworks or libraries and are deployed on an AWS EC2 instance using Docker and Docker Compose.

## Project Structure

/microservices
├── product-service
│ ├── app.js
│ ├── Dockerfile
├── reservation-service
│ ├── app.js
│ ├── Dockerfile
├── billing-service
│ ├── app.js
│ ├── Dockerfile
├── docker-compose.yml

## Prerequisites

- An AWS EC2 instance configured.
- Docker and Docker Compose installed on the EC2 instance.

## Installation and Deployment

### Clone the Repository

1. Connect to your EC2 instance via SSH.

2. Clone the repository:

   ```bash
   git clone https://github.com/your-username/practica-microservicios.git
   cd practica-microservicios

### Build and Run the Containers

 1. Navigate to the project directory:

    ```bash
    cd /home/ec2-user/microservices

2. Build and start the Docker containers:

    ```bash
    docker-compose up --build

3. The microservices will be available at the following ports:

    - Reservation Service: http://<EC2_PUBLIC_IP>:3000

    - Billing Service: http://<EC2_PUBLIC_IP>:3001
    
    - Product Service: http://<EC2_PUBLIC_IP>:3002

## Microservices Overview

### Reservation Service

- Path: /reservation-service
- Description: Manages restaurant reservations.
- API Endpoints:
    - GET /reservations: Retrieve all reservations.
    - POST /reservations: Create a new reservation.
    - DELETE /reservations/:id: Delete a reservation by ID.

Example Requests

- GET /reservations

    ```bash
    curl -X GET http://<EC2_PUBLIC_IP>:3000/reservations

- POST /reservations

    ```bash
    curl -X POST http://<EC2_PUBLIC_IP>:3000/reservations -H "Content-Type: application/json" -d '{"name": "John Doe", "date": "2024-07-10", "time": "19:00"}'

- DELETE /reservations/

    ```bash
    curl -X DELETE http://<EC2_PUBLIC_IP>:3000/reservations/1

### Billing Service
- Path: /billing-service
- Description: Manages billing and invoicing.
- API Endpoints:
    - GET /bills: Retrieve all bills.
    - POST /bills: Create a new bill.
    - DELETE /bills/:id: Delete a bill by ID.

Example Requests

- GET /bills

    ```bash
    curl -X GET http://<EC2_PUBLIC_IP>:3003/bills

- POST /bills

    ```bash
    curl -X POST http://<EC2_PUBLIC_IP>:3003/bills -H "Content-Type: application/json" -d '{"amount": 250, "description": "Dinner"}'

- DELETE /bills/

    ```bash
    curl -X DELETE http://<EC2_PUBLIC_IP>:3003/bills/1

### Product Service

- Path: /product-service
- Description: Manages product information.
- API Endpoints:
    - GET /products: Retrieve all products.
    - POST /products: Create a new product.
    - DELETE /products/:id: Delete a product by ID.

Example Requests

- GET /products

    ```bash
    curl -X GET http://<EC2_PUBLIC_IP>:3002/products

- POST /products

    ```bash
    curl -X POST http://<EC2_PUBLIC_IP>:3002/products -H "Content-Type: application/json" -d '{"name": "Product1", "price": 100}'

- DELETE /products/

    ```bash
    curl -X DELETE http://<EC2_PUBLIC_IP>:3002/products/1

## Docker Configuration

### Dockerfile

Each microservice has its own `Dockerfile`.

### docker-compose.yml

The `docker-compose.yml` file defines how to build and run the containers for all microservices

## Contribution

Contributions are welcome. Please fork the repository, make your changes, and submit a pull request.
