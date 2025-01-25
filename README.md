# Votify

**"Engage. Vote. Decide — All in Real-Time!"**

![Votify Banner](./Banner.png) <!-- Add your banner image here -->

## Overview

Votify is an easy-to-use online polling system designed for college events, competitions, and audience engagement. It empowers event organizers to create polls effortlessly, enabling participants to vote on various options in real-time.

---

## Key Features

- **Instant Voting:** Users can cast their votes quickly via phones or computers.
- **Real-Time Results:** Poll results are updated live as votes come in, keeping the experience engaging.
- **Simple Poll Creation:** Organizers can create and manage polls seamlessly.
- **Anti-Cheating Measures:** One vote per user through cookies or basic login ensures fairness.
- **Mobile-Friendly:** Optimized for any device, ideal for on-the-go events.

---

## Building Requirements (MVP)

### Core Features

1. **User Voting:**
   - Allow one vote per poll per user.
   - Use cookies or email sign-up to track votes.

2. **Poll Creation:**
   - Enable organizers to set up polls with a question and multiple options.
   - Add a timer (e.g., 5 minutes per poll).

3. **Live Results:**
   - Real-time result updates using JavaScript.

4. **Poll Management:**
   - Admin dashboard to start/stop polls.

5. **Anti-Cheating:**
   - Limit multiple votes through cookies or login.

---

## Tech Stack

- **Frontend:**
  - HTML, CSS, and vanilla JavaScript.
- **Backend:**
  - Node.js with Express for real-time updates using WebSockets.
- **Database:**
  - MongoDB or JSON files for storing poll data.
- **Real-Time Updates:**
  - Socket.io for live updates.
- **Authentication:**
  - Basic cookies or email-based login.

---

## Design

- **UI/UX:**
  - Clean and simple interface. Figma designs for core pages: Home, Poll, Results.
- **Charts:**
  - Display results using Chart.js (bar or pie charts).
- **Animations:**
  - Smooth transitions for voting and result updates.

---

## Installation and Setup

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Somil2104/Votify.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Votify/votify
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Access the application:
   Open `http://localhost:3000` in your browser.

---

## Design

Find the Figma design file here: [Votify Figma Designs](https://www.figma.com/design/RlhrjSkortr6FLQDRyF68k/Votify?node-id=0-1&t=QuPx6rbVaSGWdx2M-1)

### Notes:
- If working on a page, refer to comments in the Figma file.
- Make edits in your own copy of the file.

---

## Contributing

We welcome contributions to Votify! Please follow these steps to contribute:

### How to Contribute

1. Fork the repository and create a new branch for your changes.
2. Make your changes and ensure your code is clean and follows the project's coding standards.
3. Write clear and concise commit messages.
4. Submit a pull request with a detailed description of your changes.

### Reporting Issues

If you find a bug or have a feature request, please open an issue in the [Issues](https://github.com/your-username/votify/issues) section. Include:
- A clear description of the problem.
- Steps to reproduce the issue (if applicable).
- Any relevant screenshots or logs.

### Code Standards

- Follow [JavaScript Standard Style](https://standardjs.com/).
- Write meaningful commit messages (e.g., "Fix typo in README").
- Ensure all new features are tested before submitting.

### Licensing

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

## License

This project is licensed under the [MIT License](./votify/LICENSE).
