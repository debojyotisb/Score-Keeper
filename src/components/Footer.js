const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 flex justify-between items-center px-10">
      <p>
        © 2024 Card Scorekeeper. Made by{" "}
        <a
          href="https://www.linkedin.com/in/debojyoti-suklabaidya-696a86219"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          MrD 😉
        </a>
      </p>
      {/* Profile Image */}
      <a
        href="https://www.linkedin.com/in/debojyoti-suklabaidya-696a86219"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <img
          src="https://avatars.githubusercontent.com/u/106902232?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ1MjU2MDAsIm5iZiI6MTczNDUyNDQwMCwicGF0aCI6Ii91LzEwNjkwMjIzMiJ9.e4kbJiLoBOR7E7yJysgJS0CiLrEHcwcKYCw5oIzd5KM&u=3d519a2c704b23d93c6b69e1e8397c0d339122e5&v=4" // Replace with your actual LinkedIn image link
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-blue-400 hover:border-white transition-all duration-300"
        /> */}
      </a>
    </footer>
  );
};

export default Footer;
