import { setupI18n } from '@lingui/core';

export const locales = {
  en: 'English',
  ja: '日本語',
  'ko-kr': '한글'
};
export const defaultLocale = 'en';

const loadCatalog = async (locale: string) => {
  if (
    navigator.userAgent !== 'ReactSnap'
  ) {
    // intentionally slow translations to simmulate bigger JS bundle
    await new Promise(res => setTimeout(res, 500));
  }
  // @ts-ignore
  return import(/* webpackMode: 'lazy', webpackChunkName: 'i18n-[index]' */
  `./locales/${locale}/messages.js`);
};

export const i18n = setupI18n();
// @ts-ignore
i18n.willActivate(loadCatalog);

// @ts-ignore
export const supportedLocale = (locale: string) => !!locales[locale];
