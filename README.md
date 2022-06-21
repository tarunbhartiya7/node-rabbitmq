# About

This is a POC for Nodejs with RabbitMQ

# Start

spin up a docker container of rabbitmq with port forwarding
`docker run -d -p 5672:5672 --name rabbitmq rabbitmq`

connect to this container and run producer and consumers
