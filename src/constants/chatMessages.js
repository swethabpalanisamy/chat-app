export const currentAccount = {
  id: "1",
  name: "Alice",
};

export const chatMessages = [
  {
    id: "2",
    contactName: "John",
    messages: [
      {
        sent: true,
        message: "Hey Alice, how are you?",
        timestamp: "2025-03-27T10:00:00Z",
      },
      {
        sent: false,
        message: "Doing great! Are we still on for lunch today?",
        timestamp: "2025-03-27T10:02:00Z",
      },
    ],
  },
  {
    id: "3",
    contactName: "Bob",
    messages: [
      {
        sent: true,
        message: "Hey John! I'm good, how about you?",
        timestamp: "2025-03-27T10:01:00Z",
      },
      {
        sent: false,
        message: "Yes! Let's meet at 12:30 PM at our usual spot.",
        timestamp: "2025-03-27T10:03:00Z",
      },
    ],
  },
];
