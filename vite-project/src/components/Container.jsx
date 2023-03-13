import { useTheme } from '../context/ThemeContext';
import ChangeLang from './ChangeLang';
import ChangeTheme from './ChangeTheme';
import Settings from './Settings';

function Container() {
  const { theme } = useTheme();

  return (
    <div className={`container ${theme}`}>
      <Settings />
      <ChangeTheme />
      <ChangeLang />
    </div>
  );
}

export default Container;