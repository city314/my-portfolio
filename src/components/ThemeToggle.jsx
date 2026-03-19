import { Button } from "react-bootstrap";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <Button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === "light" ? "Dark mode" : "Light mode"}
    </Button>
  );
}

export default ThemeToggle;
