// The events module provides an event-driven architecture within Node.js. It allows you to create
// custom event emitters and listeners, enabling loose coupling between different parts of your
// application. By defining events and associating actions with them, you can build applications
// that respond to various asynchronous events, such as user interactions, data changes, or network events

// Import the 'events' module
const EventEmitter = require("events");

// Create a custom event emitter class
class MyEmitter extends EventEmitter {}

// Create an instance of the custom emitter
const myEmitter = new MyEmitter();

// Subscribe to a custom event and define a callback function
myEmitter.on("customEvent", (arg) => {
  // Log a message when the event occurs
  console.log(`Custom event occurred with argument: ${arg}`);
});

// Emit the custom event with some data
myEmitter.emit("customEvent", "Some data");
