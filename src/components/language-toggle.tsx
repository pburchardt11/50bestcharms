'use client';

import { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay: boolean },
          elementId: string
        ) => void;
      };
    };
  }
}

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '\u{1F1EC}\u{1F1E7}' },
  { code: 'es', name: 'Espa\u00f1ol', flag: '\u{1F1EA}\u{1F1F8}' },
  { code: 'fr', name: 'Fran\u00e7ais', flag: '\u{1F1EB}\u{1F1F7}' },
  { code: 'de', name: 'Deutsch', flag: '\u{1F1E9}\u{1F1EA}' },
  { code: 'it', name: 'Italiano', flag: '\u{1F1EE}\u{1F1F9}' },
  { code: 'pt', name: 'Portugu\u00eas', flag: '\u{1F1F5}\u{1F1F9}' },
  { code: 'ru', name: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439', flag: '\u{1F1F7}\u{1F1FA}' },
  { code: 'ja', name: '\u65e5\u672c\u8a9e', flag: '\u{1F1EF}\u{1F1F5}' },
  { code: 'ko', name: '\ud55c\uad6d\uc5b4', flag: '\u{1F1F0}\u{1F1F7}' },
  { code: 'zh-CN', name: '\u7b80\u4f53\u4e2d\u6587', flag: '\u{1F1E8}\u{1F1F3}' },
  { code: 'zh-TW', name: '\u7e41\u9ad4\u4e2d\u6587', flag: '\u{1F1F9}\u{1F1FC}' },
  { code: 'ar', name: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629', flag: '\u{1F1F8}\u{1F1E6}' },
  { code: 'hi', name: '\u0939\u093f\u0928\u094d\u0926\u0940', flag: '\u{1F1EE}\u{1F1F3}' },
  { code: 'th', name: '\u0e44\u0e17\u0e22', flag: '\u{1F1F9}\u{1F1ED}' },
  { code: 'vi', name: 'Ti\u1ebfng Vi\u1ec7t', flag: '\u{1F1FB}\u{1F1F3}' },
  { code: 'tr', name: 'T\u00fcrk\u00e7e', flag: '\u{1F1F9}\u{1F1F7}' },
  { code: 'nl', name: 'Nederlands', flag: '\u{1F1F3}\u{1F1F1}' },
  { code: 'pl', name: 'Polski', flag: '\u{1F1F5}\u{1F1F1}' },
  { code: 'sv', name: 'Svenska', flag: '\u{1F1F8}\u{1F1EA}' },
  { code: 'da', name: 'Dansk', flag: '\u{1F1E9}\u{1F1F0}' },
  { code: 'no', name: 'Norsk', flag: '\u{1F1F3}\u{1F1F4}' },
  { code: 'fi', name: 'Suomi', flag: '\u{1F1EB}\u{1F1EE}' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '\u{1F1EE}\u{1F1E9}' },
];

export default function LanguageToggle() {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const ref = useRef<HTMLDivElement>(null);

  // Load Google Translate script
  useEffect(() => {
    if (document.getElementById('google-translate-script')) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', autoDisplay: false },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Restore saved language
    const saved = localStorage.getItem('preferred-lang');
    if (saved && saved !== 'en') {
      setCurrentLang(saved);
      const interval = setInterval(() => {
        const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
        if (select) {
          select.value = saved;
          select.dispatchEvent(new Event('change'));
          clearInterval(interval);
        }
      }, 500);
      setTimeout(() => clearInterval(interval), 10000);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const switchLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    localStorage.setItem('preferred-lang', langCode);
    setOpen(false);

    if (langCode === 'en') {
      const hostname = window.location.hostname;
      const domainParts = hostname.split('.');
      const expiry = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';

      const domains = ['', hostname];
      for (let i = 0; i < domainParts.length; i++) {
        domains.push('.' + domainParts.slice(i).join('.'));
      }
      for (const domain of domains) {
        const domainStr = domain ? `; domain=${domain}` : '';
        document.cookie = `googtrans=; ${expiry}; path=/${domainStr}`;
        document.cookie = `googtrans=; ${expiry}; path=${domainStr}`;
      }

      const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
      if (select) {
        select.value = 'en';
        select.dispatchEvent(new Event('change'));
      }

      window.location.reload();
      return;
    }

    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    }
  };

  const current = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <div ref={ref} style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 10000 }}>
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" style={{ display: 'none' }} />

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: 56,
            right: 0,
            width: 220,
            maxHeight: 380,
            overflowY: 'auto',
            background: 'rgba(18, 16, 14, 0.95)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(196, 168, 124, 0.25)',
            borderRadius: 12,
            padding: '6px 0',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                width: '100%',
                padding: '10px 16px',
                border: 'none',
                background:
                  lang.code === currentLang
                    ? 'rgba(196, 168, 124, 0.15)'
                    : 'transparent',
                color: lang.code === currentLang ? '#c4a87c' : '#e8e4de',
                cursor: 'pointer',
                fontFamily: "'Outfit', sans-serif",
                fontSize: 14,
                textAlign: 'left' as const,
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = 'rgba(196, 168, 124, 0.1)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  lang.code === currentLang
                    ? 'rgba(196, 168, 124, 0.15)'
                    : 'transparent')
              }
            >
              <span style={{ fontSize: 18 }}>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Change language"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 16px',
          background: 'rgba(18, 16, 14, 0.9)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(196, 168, 124, 0.3)',
          borderRadius: 50,
          color: '#c4a87c',
          cursor: 'pointer',
          fontFamily: "'Outfit', sans-serif",
          fontSize: 14,
          fontWeight: 500,
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(196, 168, 124, 0.6)';
          e.currentTarget.style.boxShadow = '0 4px 24px rgba(196, 168, 124, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(196, 168, 124, 0.3)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{current.flag} {current.code.toUpperCase()}</span>
      </button>
    </div>
  );
}
