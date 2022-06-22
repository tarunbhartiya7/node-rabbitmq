# About

This is a POC for Nodejs with RabbitMQ

# Start

spin up a docker container of rabbitmq with port forwarding
`docker run -d -p 5672:5672 --name rabbitmq rabbitmq`

connect to this container and run producer and consumers

## RabbitMQ

- It is a type of messaging broker similar to Kafka
- It uses AMQP(Advanced Message Queue Protocol) which send data in the form of bytes just like HTTP sends data in text format.
