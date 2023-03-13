import { useLang } from '../context/LangContext';

function ChangeLang() {
  const { lang, setLang } = useLang();

  return (
    <div style={{ paddingTop: 40 }}>
      <div>Active Language: {lang}</div>
      <button
        onClick={() => setLang('en-US')}
        className={lang === 'en-US' ? 'active' : ''}
      >
        English
      </button>
      <button
        onClick={() => setLang('tr-TR')}
        className={lang === 'tr-TR' ? 'active' : ''}
      >
        Türkçe
      </button>
    </div>
  );
}

export default ChangeLang;