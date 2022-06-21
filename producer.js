const amqplib = require("amqplib");

const connect = async () => {
  const queue = "chats";
  const messages = [
    { name: "Sam", message: "Hi!" },
    { name: "Kim", message: "Hey!" },
  ];

  try {
    const conn = await amqplib.connect("amqp://localhost:5672");

    const channel = await conn.createChannel();
    await channel.assertQueue(queue);

    for (let msg of messages) {
      await channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
      console.log("Messages sent");
    }
  } catch (error) {
    console.log("Error occured: ", error);
  }
};

connect();
