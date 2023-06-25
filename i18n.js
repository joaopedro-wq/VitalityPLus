import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importe os arquivos de tradução para o idioma desejado
import translationPT from './locales/pt.json';

// Configuração do i18next
i18n.use(initReactI18next).init({
  lng: 'pt',
  resources: {
    pt: {
      translation: translationPT,
    },
  },
});

export default i18n;
