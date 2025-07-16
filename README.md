# BS Hydro Cleaning - Professionelle Website

Eine moderne, responsive Website für BS Hydro Cleaning - Ihr Partner für professionelle Oberflächenreinigung.

## 🌟 Features

### Design & Stil
- **Modernes Design** mit sauberen Linien und professionellem Aussehen
- **Responsive Design** - funktioniert perfekt auf Desktop, Tablet und Mobile
- **Schöne Animationen** und Übergänge für eine lebendige Benutzererfahrung
- **3D-Effekte** mit rotierenden Würfeln und Zahnrädern
- **Gradient-Farbschema** in professionellem Blau
- **Smooth Scrolling** und Parallax-Effekte

### Funktionalität
- **3 Hauptseiten**: Homepage, Info und Kontakt
- **Mobile Navigation** mit Hamburger-Menü
- **Interaktives Accordion** für detaillierte Service-Informationen
- **Funktionales Kontaktformular** mit Validierung
- **Animierte Statistiken** und Counter
- **Scroll-Animationen** für bessere Benutzererfahrung

### Technische Features
- **CSS Grid & Flexbox** für modernes Layout
- **CSS-Variablen** für konsistente Farbgebung
- **JavaScript ES6+** für Interaktivität
- **Accessibility-Features** für bessere Zugänglichkeit
- **Performance-optimiert** mit modernen Web-Standards

## 📁 Dateistruktur

```
├── index.html          # Homepage
├── kontakt.html        # Kontaktseite
├── info.html          # Info/Über uns Seite
├── style.css          # Haupt-Stylesheet
├── script.js          # JavaScript-Funktionalität
└── README.md          # Diese Dokumentation
```

## 🎨 Design-Elemente

### Farbschema
- **Primärfarbe**: #0066cc (Professionelles Blau)
- **Akzentfarbe**: #00ccff (Helles Cyan)
- **Text**: #333 (Dunkelgrau)
- **Hintergrund**: #f8f9fa (Hellgrau)

### Animationen
- **Floating Cards**: Schweben und 3D-Rotation bei Hover
- **Rotating Cube**: Kontinuierliche 3D-Rotation
- **Fade-in Animationen**: Beim Scrollen sichtbar werdende Elemente
- **Button-Hover-Effekte**: Scale und Shadow-Animationen
- **Parallax-Scrolling**: Bewegende Hintergrund-Elemente

### 3D-Effekte
- **3D-Würfel** mit verschiedenen Icons auf jeder Seite
- **Rotierende Zahnräder** als Technik-Symbol
- **Card-Hover-Effekte** mit 3D-Transformationen
- **Service-Icons** mit 360°-Rotation

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## 🚀 Verwendung

1. **Dateien öffnen**: Einfach `index.html` in einem Web-Browser öffnen
2. **Navigation**: Nutzen Sie die Hauptnavigation für alle drei Seiten
3. **Kontaktformular**: Funktional mit JavaScript-Validierung
4. **Mobile Ansicht**: Automatische Anpassung an kleinere Bildschirme

## 💼 Geschäftsinformationen

### Dienstleistungen
- **Gewerbliche Reinigung**: Bürogebäude, Industrieanlagen, Parkplätze
- **Private Reinigung**: Terrassen, Balkone, Garagen, Hausfassaden
- **Spezialreinigung**: Graffiti-Entfernung, Steinreinigung, Solaranlagen

### Kontaktdaten (Beispiel)
- **Telefon**: +49 123 456 789
- **E-Mail**: info@bs-hydro-cleaning.de
- **Adresse**: Musterstraße 123, 12345 Musterstadt

## 🛠️ Anpassungen

### Kontaktdaten ändern
Bearbeiten Sie die entsprechenden Stellen in allen HTML-Dateien:
- Telefonnummern
- E-Mail-Adressen
- Geschäftsadresse
- Öffnungszeiten

### Farben anpassen
Ändern Sie die CSS-Variablen in `style.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #004499;
    --accent-color: #00ccff;
    /* ... weitere Farben */
}
```

### Bilder hinzufügen
Ersetzen Sie die Platzhalter-Icons durch echte Bilder:
- Firmenlogo
- Service-Bilder
- Team-Fotos
- Vorher/Nachher-Bilder

## 🔧 JavaScript-Features

### Mobile Navigation
```javascript
// Hamburger-Menü Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
```

### Formular-Validierung
```javascript
// E-Mail-Validierung
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
```

### Scroll-Animationen
```javascript
// Intersection Observer für Animationen
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
});
```

## 📈 Performance-Optimierungen

- **CSS-Optimierung**: Effiziente Selektoren und Animationen
- **JavaScript**: Event-Delegation und optimierte Event-Listener
- **Bilder**: SVG-Icons für bessere Skalierbarkeit
- **Fonts**: Google Fonts mit optimiertem Loading

## 🌐 Browser-Unterstützung

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 📞 Weiterentwicklung

### Mögliche Erweiterungen
- **Bildergalerie** für abgeschlossene Projekte
- **Buchungssystem** für Termine
- **Blog-Bereich** für Reinigungstipps
- **Kundenbewertungen** Integration
- **Online-Kostenrechner**

### SEO-Optimierungen
- Meta-Tags hinzufügen
- Schema.org Markup
- Sitemap erstellen
- Google Analytics Integration

---

**Erstellt für BS Hydro Cleaning** - Professionelle Oberflächenreinigung für Gewerbe und Privat

*Website erstellt mit modernen Web-Technologien für optimale Performance und Benutzererfahrung.*