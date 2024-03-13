import { Langar } from "next/font/google"

// @param data
// @param key
// @param lang
// @returns

export const getTranslatedData = (
    data: Record<string, any>,
    key?: string,
    lang: string = 'en',
    append: boolean = true
) => {
    const defaultLang = "en"
    lang = lang || 'en';
    const no_data = '[Unsupported Language]'
    if (!data) return no_data
    if (key) {
        return lang in data
            ? data[lang][key]
            : defaultLang in data
            ? append ? `${no_data} ${data[defaultLang][key] || ""}` : data[defaultLang][key]
            : append ? no_data: "";
    } else {
        return lang in data
            ? data[lang]
            : defaultLang in data
            ? append ? `${no_data} ${data[defaultLang] || ""}` : data[defaultLang]
            : append ? no_data: "";
    }
}