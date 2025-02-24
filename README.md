# React + TypeScript + Vite - React Miniprojekt

My Form App är en minimal React-applikation byggd med Vite och TypeScript. Projektet demonstrerar hur man skapar en fullständig CRUD-applikation med API-integration, där användardata hämtas, läggs till, uppdateras och raderas.

## Projektbeskrivning

Detta projekt exemplifierar:

- Hämta användardata från ett API.
- Lägga till nya användare.
- Uppdatera och radera befintliga användare via API-anrop.
- Användning av Zustand för state management.
- Routing med React Router v6+.

## Bygg och Kör Instruktioner

1. **Installera beroenden:**

   ```bash
   npm install
   ```

2. **Starta utvecklingsservern:**

   ```bash
   npm run dev
   ```

   Applikationen kommer att vara tillgänglig på [http://localhost:5137](http://localhost:5137).

3. **Starta JSON Server för API-integration:**

   Installera JSON Server globalt (om du inte redan gjort det):

   ```bash
   npm install -g json-server
   ```

   Starta sedan JSON Server genom att köra:

   ```bash
   json-server --watch db.json --port 3000
   ```

   Detta säkerställer att API:et med användardata är tillgängligt på [http://localhost:3000/users](http://localhost:3000/users).

4. **Bygg för produktion:**

   ```bash
   npm run build
   ```

5. **För att testa produktionen lokalt:**

   ```bash
   npm run preview
   ```

## Demo

Se en live-demo av applikationen här: [Live Demo](https://my-form-app-three.vercel.app/)

## Uppfyllda krav

- [x] Hämta användardata från API
- [x] Lägga till användare
- [x] Uppdatera användare
- [x] Radera användare

## Skoluppgift krav

Todo-lista för React Miniprojekt

Grundkrav (För godkänt)
✅Skapa en React-app med TypeScript.
✅Bygga minst 6 komponenter, varav 2 statefula.
✅Implementera React Router för dynamiska URL:er.
✅Använda Git & GitHub.
✅Skapa en README.md med:
-Titel och projektbeskrivning.
-Instruktioner för hur projektet byggs och körs.
-Länk till en demo (Netlify/Vercel).
-Kryssa av kraven som är uppfyllda.
✅Lämna in i tid.
✅Genomföra en muntlig presentation på ca 10 minuter.
⭐ Extra krav (För väl godkänt)
✅Använda CSS-in-JS (t.ex. Styled-Components).
✅Hämta och visa data från ett webb-API.
