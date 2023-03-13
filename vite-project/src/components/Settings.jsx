import { useLang } from '../context/LangContext';
import { useTheme } from '../context/ThemeContext';

function Settings() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLang();

  return (
    <div style={{ paddingBottom: 40 }}>
      <div>Settings</div>
      <div>Active Theme: {theme}</div>
      <div>Active Language: {lang}</div>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default Settings;