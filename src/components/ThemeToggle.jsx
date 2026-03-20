import { Button } from "react-bootstrap";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <Button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === "light" ? "Chế độ tối" : "Chế độ sáng"}
    </Button>
  );
}

export default ThemeToggle;
