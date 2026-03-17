# Demo Cypress — 10 minutos
### Audiencia: Estudiantes de Ingeniería en Sistemas Computacionales
### Objetivo: Introducción a las capacidades básicas de Cypress

---

## Resumen de etapas

| # | Etapa | Duración |
|---|-------|----------|
| 1 | Introducción | ~1 min |
| 2 | Estructura del proyecto | ~1 min |
| 3 | Interfaz gráfica — `cypress open` | ~3 min |
| 4 | Ejecución por consola — `cypress run` | ~2 min |
| 5 | Prueba específica en navegador | ~2 min |
| 6 | Cierre y preguntas | ~1 min |

---

## Etapa 1 — Introducción `~1 min`

**Qué decir:**
- ¿Qué es Cypress? — Framework de testing end-to-end para aplicaciones web.
- ¿Para qué sirve? — Automatizar pruebas que simulan acciones reales de un usuario en el navegador.
- ¿Por qué Cypress? — Fácil de instalar, sin configuración compleja, resultados visuales inmediatos.

**Punto clave para la audiencia:**
> "No necesitan ser expertos en testing para entender lo que Cypress hace. Lo van a ver en tiempo real."

---

## Etapa 2 — Estructura del proyecto `~1 min`

**Qué mostrar** (en VS Code):

```
cypress/
├── e2e/              → Aquí viven las pruebas
├── fixtures/         → Datos de prueba (JSON)
├── support/          → Configuración y comandos personalizados
cypress.config.js     → Configuración principal del proyecto
package.json          → Dependencias del proyecto
```

**Punto clave:**
> "Todo está organizado. Cypress tiene una convención clara — los archivos `.cy.js` son los archivos de prueba."

---

## Etapa 3 — Interfaz gráfica `~3 min`

**Comando a ejecutar:**

```bash
npx cypress open
```

**Pasos a seguir en vivo:**

1. Ejecutar el comando en la terminal.
2. Seleccionar **E2E Testing** en la ventana que abre Cypress.
3. Elegir el navegador (Chrome recomendado).
4. Mostrar la lista de pruebas disponibles en el Test Runner.
5. Ejecutar una prueba haciendo clic sobre ella — por ejemplo `cookies.cy.js`.
6. Señalar en la interfaz:
   - El panel izquierdo con los pasos de la prueba.
   - El panel derecho con el navegador ejecutándose en tiempo real.
   - Los checkmarks verdes ✅ al pasar cada aserción.

**Punto clave:**
> "Pueden ver exactamente qué hace la prueba paso a paso, como si alguien estuviera usando el sitio frente a ustedes."

---

## Etapa 4 — Ejecución por consola `~2 min`

**Comando a ejecutar:**

```bash
npx cypress run
```

**Qué mostrar en vivo:**

1. Ejecutar el comando y dejar que corra.
2. Señalar el output en consola:
   - Nombre de cada prueba ejecutada.
   - Resultado: `passing` / `failing`.
   - Tiempo total de ejecución.
3. Mostrar la carpeta `cypress/screenshots/` si alguna prueba falló.

**Punto clave:**
> "Este modo es el que se usaría en producción o en un pipeline de CI/CD — sin interfaz, solo resultados."

---

## Etapa 5 — Prueba específica en navegador `~2 min`

**Comando a ejecutar:**

```bash
npx cypress run --spec "cypress/e2e/2-advanced-examples/cookies.cy.js" --headed --browser chrome
```

**Qué mostrar en vivo:**

1. Explicar brevemente las banderas usadas:
   - `--spec` → selecciona una prueba específica.
   - `--headed` → muestra el navegador durante la ejecución.
   - `--browser chrome` → define el navegador.
2. Ejecutar el comando y mostrar Chrome abrirse automáticamente.
3. Señalar cómo Cypress controla el navegador sin intervención manual.

**Punto clave:**
> "Con un solo comando pueden correr exactamente la prueba que quieren, en el navegador que quieren."

---

## Etapa 6 — Cierre `~1 min`

**Resumen de lo visto:**
- Cypress tiene una interfaz visual para desarrollo y depuración.
- También se puede correr desde consola para automatización.
- Se puede segmentar por prueba, navegador y modo de visualización.

**Frase de cierre:**
> "Cypress reduce la barrera de entrada al testing. Con poco código pueden validar flujos completos de una aplicación web."

**Abrir espacio a preguntas.**

---

## Checklist pre-demo

Verificar antes de presentar:

- [ ] Node.js instalado y funcionando (`node -v`)
- [ ] Dependencias instaladas (`npm install`)
- [ ] Cypress abre correctamente (`npx cypress open`)
- [ ] Chrome instalado en el equipo
- [ ] VS Code con el proyecto abierto y listo
- [ ] Terminal visible y con fuente legible para la audiencia
- [ ] Prueba `cookies.cy.js` identificada y con ruta copiada