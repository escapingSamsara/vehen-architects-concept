import { acceptedCategory, getUserPreferences, loadScript } from 'vanilla-cookieconsent';
import type { CookieConsentConfig } from 'vanilla-cookieconsent';
import { PUBLIC_GA_TRACKING_ID } from '$env/static/public';
import { PUBLIC_GADS_TRACKING_ID } from '$env/static/public';

// GOOGLE ANALYTICS COOKIES
const enableGoogleAnalytics = () => {
	loadScript(`https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GA_TRACKING_ID}`, {
		async: true
	});
	if (typeof window !== 'undefined') {
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			dataLayer.push(arguments);
		};
		gtag('js', new Date());
		gtag('config', PUBLIC_GA_TRACKING_ID);
	}
};

const disableGoogleAnalytics = () => {
	gtag('consent', 'update', {
		analytics_storage: 'denied'
	});
	if (typeof window !== 'undefined') {
		window[`ga-disable-G-${PUBLIC_GA_TRACKING_ID}`] = true;
	}
};

const enableGoogleAds = () => {
	loadScript(`https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GADS_TRACKING_ID}`, {
		async: true
	});
	if (typeof window !== 'undefined') {
		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			dataLayer.push(arguments);
		};
		gtag('js', new Date());
		gtag('config', PUBLIC_GADS_TRACKING_ID);
	}
};

const disableGoogleAds = () => {
	gtag('consent', 'update', {
		ad_storage: 'denied'
	});
	if (typeof window !== 'undefined') {
		window[`ga-disable-G-${PUBLIC_GADS_TRACKING_ID}`] = true;
	}
};

const config: CookieConsentConfig = {
	autoShow: true,
	hideFromBots: true,
	mode: 'opt-in',
	cookie: {
		name: 'jakobpusterhofer.dev-cookie',
		path: '/',
		expiresAfterDays: 182,
		sameSite: 'Lax'
	},
	categories: {
		necessary: {
			enabled: true,
			readOnly: true
		},
		analytics: {
			autoClear: {
				cookies: [
					{
						name: /^_ga/ // regex: match all cookies starting with '_ga'
					},
					{
						name: '_gid' // string: exact cookie name
					}
				]
			},
			services: {
				ga: {
					label: 'Google Analytics',
					onAccept: () => {},
					onReject: () => {}
				}
			}
		},
		ads: {
			autoClear: {
				cookies: [
					{
						name: /^_gcl_/ // regex: match all cookies starting with '_gcl_' (used by Google Ads)
					},
					{
						name: '_gac_' // string: exact cookie name (used by Google Ads)
					}
				]
			},
			services: {
				googleAds: {
					label: 'Google Ads',
					onAccept: () => {
						// enableGoogleAds();
					},
					onReject: () => {
						// disableGoogleAds();
					}
				}
			}
		}
	},

	onFirstConsent: ({ cookie }) => {},

	onConsent: () => {
		if (acceptedCategory('analytics')) {
			enableGoogleAnalytics();
		}
		if (acceptedCategory('ads')) {
			enableGoogleAds();
		}
	},

	onChange: ({ changedCategories }) => {
		if (changedCategories.includes('analytics')) {
			if (acceptedCategory('analytics')) {
				enableGoogleAnalytics();
			} else {
				disableGoogleAnalytics();
			}
		}
		if (changedCategories.includes('ads')) {
			if (acceptedCategory('ads')) {
				enableGoogleAds();
			} else {
				disableGoogleAds();
			}
		}
	},

	onModalReady: ({ modalName }) => {},

	onModalShow: ({ modalName }) => {},

	onModalHide: ({ modalName }) => {},

	guiOptions: {
		consentModal: {
			layout: 'box inline',
			position: 'bottom right',
			equalWeightButtons: true,
			flipButtons: false
		},
		preferencesModal: {
			layout: 'box',
			equalWeightButtons: true,
			flipButtons: false
		}
	},

	language: {
		default: 'en',
		translations: {
			en: {
				consentModal: {
					title: 'we value your privacy',
					description:
						'This site uses cookies to enhance your browsing experience, serve personalized ads or' +
						' content, and analyze our traffic. By clicking "Accept all", you consent to our use of' +
						' cookies.',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					showPreferencesBtn: 'Manage Individual preferences',
					// closeIconLabel: 'Reject all and close modal',
					footer: `
<span style="width:100%; display: flex;justify-content: space-evenly">
							<a href="/impressum">Impressum</a>
							<a href="/privacy-policy">Privacy Policy</a>
							<a href="/cookie-policy" >Cookie Policy</a>
</span>
					`
				},
				preferencesModal: {
					title: 'Manage cookie preferences',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					savePreferencesBtn: 'Accept current selection',
					closeIconLabel: 'Close modal',
					serviceCounterLabel: 'Service|Services',
					sections: [
						{
							title: 'Your Privacy Choices',
							description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`
						},
						{
							title: 'Strictly Necessary',
							description:
								'These cookies are essential for the proper functioning of the website and cannot be disabled.',

							//this field will generate a toggle linked to the 'necessary' category
							linkedCategory: 'necessary'
						},
						{
							title: 'Performance and Analytics',
							description:
								'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
							linkedCategory: 'analytics',
							cookieTable: {
								caption: 'Cookie table',
								headers: {
									name: 'Cookie',
									domain: 'Domain',
									desc: 'Description'
								},
								body: [
									{
										name: '_ga_*',
										domain: 'jakobpusterhofer.dev',
										desc: 'Google Analytics sets this cookie to store and count page views. '
									},
									{
										name: '_ga',
										domain: 'jakobpusterhofer.dev',
										desc: "Google Analytics sets this cookie to calculate visitor, session and campaign data and track site usage for the site's analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognise unique visitors. "
									}
								]
							}
						},
						{
							title: 'Targeting and Advertising',
							description:
								'These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
							linkedCategory: 'ads',
							cookieTable: {
								caption: 'Cookie table',
								headers: {
									name: 'Cookie',
									domain: 'Domain',
									desc: 'Description'
								},
								body: [
									// {
									// 	name: 'CONSENT',
									// 	domain: 'jakobpusterhofer.dev',
									// 	desc: "This cookie is used to store the user's preferences regarding Google services and may be used for tracking and ad personalization."
									// },
									{
										name: 'IDE',
										domain: 'jakobpusterhofer.dev',
										desc: "Used by Google DoubleClick to register and report the website user's actions after viewing or clicking one of the advertiser's ads with the purpose of measuring the efficacy of an ad and to present targeted ads to the user."
									},
									// {
									// 	name: 'NID',
									// 	domain: 'jakobpusterhofer.dev',
									// 	desc:
									// 		'Cookie used by Google to remember your preferences and other information, such as your' +
									// 		' preferred language, how many search results you would like displayed per page, and whether or not you wish to have Google’s SafeSearch filter turned on.'
									// },
									// {
									// 	name: 'AEC',
									// 	domain: 'jakobpusterhofer.dev',
									// 	desc: "AEC cookies ensure that requests within a browsing session are made by the user, and not by other sites. These cookies prevent malicious sites from acting on behalf of a user without that user's knowledge."
									// },
									// {
									// 	name: 'SOCS',
									// 	domain: 'jakobpusterhofer.dev',
									// 	desc: " This cookie is used by Google to store a user's state regarding their cookies choices. This cookie is used by Google to remember your preferences and other information."
									// },
									{
										name: '_gcl_au',
										domain: 'jakobpusterhofer.dev',
										desc: 'Google Ads Cookie (campaign information, measuring customer interactions). '
									}
								]
							}
						},
						{
							title: 'More information',
							description: `For any queries in relation to our policy on cookies and your choices, please click <a href="/cookie-policy" style="color: var(--color--primary)">here</a>.`
						}
					]
				}
			},
			de: {
				consentModal: {
					title: 'Ich schätze Ihre Privatsphäre',
					description:
						'Ich verwende Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Anzeigen' +
						' oder Inhalte einzusetzen und meinen Datenverkehr zu analysieren. Wenn Sie auf „Alle akzeptieren"' +
						' klicken, stimmen Sie der Anwendung von Cookies zu.',
					acceptAllBtn: 'Alle akzeptieren',
					acceptNecessaryBtn: 'Nur notwendige akzeptieren',
					showPreferencesBtn: 'Individuelle Einstellungen verwalten',
					footer: `
<span style="width:100%; display: flex;justify-content: space-evenly">
							<a href="/impressum" >Impressum</a>
							<a href="/privacy-policy" >Datenschutz-Richtlinie</a>
							<a href="/cookie-policy" >Cookie-Richtlinie</a>
</span>
					`
				},
				preferencesModal: {
					title: 'Cookie-Einstellungen verwalten',
					acceptAllBtn: 'Alle akzeptieren',
					acceptNecessaryBtn: 'Nur notwendige akzeptieren',
					savePreferencesBtn: 'Momentane Auswahl akzeptieren',
					closeIconLabel: 'Schließen',
					serviceCounterLabel: 'Service|Services',
					sections: [
						{
							title: 'Ihre Datenschutzeinstellungen',
							description: `In diesem Panel können Sie einige Präferenzen bezüglich der Verarbeitung Ihrer persönlichen Daten äußern. Sie können die ausgedrückten Auswahlmöglichkeiten jederzeit überprüfen und ändern, indem Sie dieses Panel über den bereitgestellten Link erneut aufrufen. Um Ihre Zustimmung zu den unten beschriebenen spezifischen Verarbeitungsaktivitäten zu verweigern, schalten Sie die Schalter aus oder verwenden Sie die Schaltfläche "Alle ablehnen" und bestätigen Sie, dass Sie Ihre Auswahl speichern möchten.`
						},
						{
							title: 'Unbedingt erforderlich',
							description:
								'Diese Cookies sind für die ordnungsgemäße Funktion der Webseite unerlässlich und können nicht deaktiviert werden.',
							linkedCategory: 'necessary'
						},
						{
							title: 'Performance und Analytics',
							description:
								'Diese Cookies sammeln Informationen darüber, wie Sie unsere Webseite nutzen. Alle Daten sind anonymisiert und können nicht zur Identifikation von Ihnen verwendet werden.',
							linkedCategory: 'analytics',
							cookieTable: {
								caption: 'Cookies',
								headers: {
									name: 'Cookie',
									domain: 'Domain',
									desc: 'Beschreibung'
								},
								body: [
									{
										name: '_ga_*',
										domain: 'jakobpusterhofer.dev',
										desc: 'Google Analytics setzt dieses Cookie, um Seitenaufrufe zu speichern und zu zählen.'
									},
									{
										name: '_ga',
										domain: 'jakobpusterhofer.dev',
										desc:
											'Google Analytics setzt dieses Cookie, um Besucher-, Nutzungs- und' +
											' Kampagnendaten zu berechnen und die Nutzung der Website für den Analysebericht der Website zu verfolgen. Das Cookie speichert Informationen anonym und weist eine zufällig generierte Nummer zu, um einzigartige Besucher zu erkennen.'
									}
								]
							}
						},
						{
							title: 'Targeting and Advertising',
							description:
								'These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
							linkedCategory: 'ads',
							cookieTable: {
								caption: 'Cookie table',
								headers: {
									name: 'Cookie',
									domain: 'Domain',
									desc: 'Description'
								},
								body: [
									// {
									// 	name: 'CONSENT',
									// 	domain: 'jakobpusterhofer.dev',
									// 	desc: 'Dieses Cookie wird verwendet, um die Benutzereinstellungen bezüglich Google-Diensten zu speichern und kann für Tracking und Anzeigenpersonalisierung verwendet werden.'
									// },
									{
										name: 'IDE',
										domain: 'jakobpusterhofer.dev',
										desc: 'Verwendet von Google DoubleClick, um Anmeldungen und Berichte über die Aktionen des Website-Nutzers nach dem Anzeigen oder Klicken auf eine der Anzeigen des Werbetreibenden zu registrieren und zu berichten, mit dem Ziel, die Wirksamkeit einer Anzeige zu messen und dem Benutzer gezielte Anzeigen zu präsentieren.'
									},
									// {
									// 	name: 'NID',
									// 	domain: 'jakobpusterhofer.dev',
									// 	desc:
									// 		'Von Google verwendetes Cookie, um Ihre Einstellungen und andere Informationen zu' +
									// 		' speichern, wie: Ihre bevorzugte Sprache, wie viele Suchergebnisse pro Seite angezeigt werden sollen, und ob Sie möchten, dass der SafeSearch-Filter von Google aktiviert ist.'
									// },
									// {
									// 	name: 'AEC',
									// 	domain: 'jakobpusterhofer.dev',
									// 	desc:
									// 		'AEC-Cookies stellen sicher, dass Anfragen innerhalb einer Browser-Sitzung vom Benutzer' +
									// 		' und nicht von anderen Websites gemacht werden. Diese Cookies verhindern, dass bösartige Websites im Namen eines Benutzers ohne dessen Wissen handeln.'
									// },
									// {
									// 	name: 'SOCS',
									// 	domain: 'jakobpusterhofer.dev',
									// 	desc: ' Dieses Cookie wird von Google verwendet, um den Status eines Benutzers bezüglich seiner Cookie-Auswahl zu speichern. Dieses Cookie wird von Google verwendet, um Ihre Einstellungen und andere Informationen zu speichern.'
									// },
									{
										name: '_gcl_au',
										domain: 'jakobpusterhofer.dev',
										desc: 'Google Ads Cookie (Kampagneninformationen, Messung von Kundeninteraktionen).'
									}
								]
							}
						},
						{
							title: 'Mehr Informationen',
							description:
								'Für Fragen bezüglich meiner Richtlinien zu Cookies und Ihren Auswahlmöglichkeiten' +
								' klicken Sie bitte <a href="/cookie-richtlinie" ' +
								' style="color:' +
								' var(--color--primary)">hier</a>.'
						}
					]
				}
			}
		}
	}
};

export default config;
