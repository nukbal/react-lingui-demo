// @ts-ignore
import { setupI18n } from '@lingui/core';

export const defaultLocale = 'en';

const loadCatalog = async (locale: string) => {
  return import(/* webpackMode: 'lazy', webpackChunkName: 'i18n-[index]' */
  `@lingui/loader!./locales/${locale}/messages.json`);
};

export const i18n = setupI18n();
i18n.willActivate(loadCatalog);
