# Comandos de Consola — Cypress

Referencia de comandos para ejecutar pruebas con Cypress desde la terminal.

---

## Abrir la interfaz gráfica de Cypress

```bash
npx cypress open
```

---

## Correr todas las pruebas

```bash
npx cypress run
```

Al ejecutar este comando, Cypress correrá todas las pruebas disponibles. Si alguna falla, se generará una captura de pantalla automáticamente en la carpeta:

```
cypress/screenshots/
```

---

## Correr una prueba específica

Para ejecutar una prueba en particular, obtén su ruta relativa (clic derecho sobre el archivo en VS Code → *Copy Relative Path*) y usa el siguiente comando:

```bash
npx cypress run --spec "[RUTA_DE_LA_PRUEBA]"
```

**Ejemplo** con la prueba `cookies.cy.js`:

```bash
npx cypress run --spec "cypress/e2e/2-advanced-examples/cookies.cy.js"
```

![Resultados de la prueba cookies](<markdown screenshot/cookies.cy.js test screenshot.png>)

---

## Correr una prueba en modo visual (headed)

Para visualizar la ejecución en el navegador, agrega la bandera `--headed`:

```bash
npx cypress run --spec "[RUTA_DE_LA_PRUEBA]" --headed
```

**Ejemplo:**

```bash
npx cypress run --spec "cypress/e2e/2-advanced-examples/cookies.cy.js" --headed
```

---

## Seleccionar navegador

Usa la bandera `--browser` para especificar el navegador. Se puede usar Chrome o Microsoft Edge.

```bash
npx cypress run --spec "cypress/e2e/2-advanced-examples/cookies.cy.js" --headed --browser chrome
```

```bash
npx cypress run --spec "cypress/e2e/2-advanced-examples/cookies.cy.js" --headed --browser edge
```

> **Nota:** Es necesario tener los navegadores instalados para poder utilizar estos comandos.