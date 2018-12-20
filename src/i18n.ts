import { setupI18n } from '@lingui/core';

export const defaultLocale = 'en';

const loadCatalog = async (locale: string) => {
  // @ts-ignore
  return import(/* webpackMode: 'lazy', webpackChunkName: 'i18n-[index]' */
  `./locales/${locale}/messages.js`);
};

export const i18n = setupI18n();
// @ts-ignore
i18n.willActivate(loadCatalog);
