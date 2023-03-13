import { useTheme } from '../context/ThemeContext';

function ChangeTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <div>Active Theme: {theme} </div>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default ChangeTheme;