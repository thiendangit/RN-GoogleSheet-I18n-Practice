import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {AsyncStorage} from 'react-native';

// async () => JSON.parse(await AsyncStorage.getItem('en')),

let resources = () => {

  const vi_VN = require('./vn.json');
  const es_US = require('./en.json');

  return ({
    en: {
      translation: es_US,
    },
    vn: {
      translation: vi_VN,
    },
  });
};

const init = () => {

  console.log(resources());

  return ({
    ns: 'en', // if you're using a language detector, do not define the lng option
    debug: false,
    react: {
      useSuspense: false,
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
    resources: resources(),
  });
};

let I18n = i18next;

I18n
  .use(initReactI18next)
  .init(init()).then(() => {
});

export default I18n;
