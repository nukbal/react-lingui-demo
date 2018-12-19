import React, { Component, ChangeEvent } from 'react';
import { I18nProvider, I18n } from '@lingui/react';
import { t, Trans, DateFormat, NumberFormat, Plural } from '@lingui/macro';
import { i18n, defaultLocale } from './i18n';

import './styles.css';

i18n.activate(defaultLocale);

export default class App extends Component {
  state = { text: '', random: '', num: 0 };

  shouldComponentUpdate(_: any, state: any) {
    return this.state.text !== state.text ||
      this.state.random !== state.random ||
      this.state.num !== state.num;
  }

  toEnglish = () => {
    i18n.activate('en');
  }

  toKorean = () => {
    i18n.activate('ko-kr');
  }

  toJapanese = () => {
    i18n.activate('ja');
  }

  handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: target.value });
  }

  randomText = () => {
    const text = [
      t('rand.0')`ランダム`,
      t('rand.1')`では`,
      t('rand.2')`ありません`,
    ];
    this.setState({ random: i18n._(text[Math.floor(Math.random() * text.length)]) });
  }

  increase = () => this.setState({ num: this.state.num + 1 });
  decrease = () => {
    if (this.state.num) {
      this.setState({ num : this.state.num - 1 });
    }
  }

  render () {
    return (
      // @ts-ignore
      <I18nProvider i18n={i18n}>
        <>
          <nav>
            <a role="button" onClick={this.toEnglish}>English</a>
            <a role="button" onClick={this.toKorean}>한국어</a>
            <a role="button" onClick={this.toJapanese}>日本語</a>
          </nav>
          <main>
            <h1><Trans>LinguiJS デモ</Trans></h1>
            <section>
              <Trans>
                このプロジェクトは
                国際化のライブラリの<a href="https://lingui.js.org/" target="_blank">LinguiJS</a>の
                <a href="https://reactjs.org/" target="_blank">React</a>デモです。
              </Trans>
            </section>
            <section>
              <h3><Trans>JSX対応</Trans></h3>
              <I18n>
                {() => (
                  <input
                    type="text"
                    name="text"
                    placeholder={i18n._(t`何かを入力してください`)}
                    value={this.state.text}
                    onChange={this.handleInput}
                  />
                )}
              </I18n>
              <br />
              <Trans id="input-text">おはようございます。{this.state.text}さん</Trans>
            </section>
            <section>
              <h3><Trans>javascript側</Trans></h3>
              <Trans>ボタンを押したらランダムなテキストを表示します</Trans><br />
              <button onClick={this.randomText}><Trans>生成</Trans></button><br />
              <span>{this.state.random}</span>
            </section>
            <section>
              <h3><Trans>数値</Trans></h3>
              <NumberFormat value={10000} format={{ style: 'currency', currency: 'JPY' }} />
              <br />
              <Plural
                value={this.state.num}
                _0="誰も来なかったんです"
                _1="1人のゲストさんが来ました"
                other="#人のゲストさんが来ました"
              />
              <button onClick={this.increase}>+</button>
              <button onClick={this.decrease}>-</button>
            </section>
            <section>
              <h3><Trans>日付</Trans></h3>
              <Trans>今日は <DateFormat value={new Date()} />です</Trans>
            </section>
          </main>
        </>
      </I18nProvider>
    );
  }
}
