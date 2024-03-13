import en from '../locales/en';
import ja from '../locales/ja';
import { useRouter } from 'next/router';

type useLocaleTypes = {
    locale: string | undefined;
    text: typeof en | typeof ja;
    lang: 'ja' | 'en';
    getText: (lang: string) => typeof en | typeof ja;
};

const useLocale = (): useLocaleTypes => {
    const { locale } = useRouter();

    const text = locale === 'en-US' ? en : ja;
    const lang = locale === 'en-US' ? 'en' : 'ja'

    // Get the text objects based on the language you specified
    const getText = (_lang: string) => {
        return _lang === 'ja' ? ja : en
    }

    return { locale, text, lang, getText };
};

export default useLocale;