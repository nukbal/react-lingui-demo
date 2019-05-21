import React, { useState, useCallback, useEffect } from 'react';
// @ts-ignore
import { I18nProvider, useLingui } from '@lingui/react';
// @ts-ignore
import { t, Trans, Plural, defineMessage } from '@lingui/macro';
import { defaultLocale, i18n } from './i18n';

import './styles.css';

function Root() {
  const { i18n } = useLingui()
  const [locale, setLocale] = useState(defaultLocale);
  const [text, setText] = useState('');
  const [random, setRandom] = useState('');
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (i18n.locale !== locale) i18n.activate(locale);
  }, [i18n, locale]);

  const toEnglish = useCallback(() => setLocale('en'), []);
  const toKorean = useCallback(() => setLocale('ko-kr'), []);
  const toJapanese = useCallback(() => setLocale('ja'), []);

  const handleTextChange = useCallback(({ target }: any) => setText(target.value), []);
  const generateRandomText = useCallback(() => {
    const randomArray = [
      defineMessage({ id: 'rand.0', message: 'ランダム' }),
      defineMessage({ id: 'rand.1', message: 'では' }),
      defineMessage({ id: 'rand.2', message: 'ありません' }),
    ];
    setRandom(i18n._(randomArray[Math.floor(Math.random() * randomArray.length)]));
  }, [i18n]);

  const increase = useCallback(() => setNum(n => n + 1), []);
  const decrease = useCallback(() => setNum(n => n !== 0 ? n - 1 : n), []);

  return (
    <>
      <nav>
        <button className={locale === 'en' ? 'disabled' : undefined} onClick={toEnglish}>
          English
        </button>
        <button className={locale === 'ko-kr' ? 'disabled' : undefined} onClick={toKorean}>
          한국어
        </button>
        <button className={locale === 'ja' ? 'disabled' : undefined} onClick={toJapanese}>
          日本語
        </button>
      </nav>
      <main>
        <h1><Trans>LinguiJS デモ</Trans></h1>
        <section>
          <Trans>
            このプロジェクトは
            国際化のライブラリの<a href="https://lingui.js.org/" target="_blank" rel="noopener noreferrer">LinguiJS</a>の
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>デモです。
          </Trans>
        </section>
        <section>
          <h3><Trans>JSX対応</Trans></h3>
            <input
              type="text"
              name="text"
              placeholder={i18n._(t`名前を書いてください`)}
              value={text}
              onChange={handleTextChange}
            />
          <br />
          <Trans id="input-text">おはようございます。{text}さん</Trans>
        </section>
        <section>
          <h3><Trans>javascript側</Trans></h3>
          <Trans>ボタンを押したらランダムなテキストを表示します</Trans><br />
          <button onClick={generateRandomText}><Trans>生成</Trans></button><br />
          <span>{random}</span>
        </section>
        <section>
          <h3><Trans>数値</Trans></h3>
          <span>
            {i18n.number(10000, {format: { style: 'currency', currency: 'JPY' }})}
          </span>
          <br />
          <span>
            <Plural
              value={num}
              _0="誰も来なかったんです"
              _1="1人のゲストさんが来ました"
              other="#人のゲストさんが来ました"
            />
          </span>
          <br />
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </section>
        <section>
          <h3><Trans>日付</Trans></h3>
          <Trans>今日は {i18n.date(new Date())}です</Trans>
        </section>
      </main>
    </>
  );
}

export default function App() {

  useEffect(() => {
    i18n.activate(defaultLocale);
  }, []);

  // @ts-ignore
  return <I18nProvider i18n={i18n}><Root /></I18nProvider>;
}
