const amqplib = require("amqplib");

const connect = async () => {
  const queue = "chats";

  try {
    const conn = await amqplib.connect("amqp://localhost:5672");

    const channel = await conn.createChannel();
    await channel.assertQueue(queue);

    channel.consume(queue, (msg) => {
      console.log("Recieved:", JSON.parse(msg.content.toString()));
      channel.ack(msg);
    });
  } catch (error) {
    console.log("Error occured: ", error);
  }
};

connect();
