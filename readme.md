# udemy-cypress

Repositorio de aprendizaje de Cypress para Front-End Testing y QA.

---

## Requisitos

- [Node.js](https://nodejs.org/) instalado en el sistema.
- [VS Code](https://code.visualstudio.com/) (recomendado).

---

## Instalación de Cypress

1. Abrir una consola o el terminal de VS Code.
2. Ejecutar el siguiente comando para iniciar Cypress:

```bash
npx cypress open
```

---

## Sitio de prueba

El proyecto utiliza el siguiente sitio como entorno de pruebas:

**Testing Playground:** <https://playground.bondaracademy.com/pages/iot-dashboard>

---

## Solución a error común en Windows (PowerShell)

Al ejecutar comandos con `npx` en PowerShell, es posible que aparezca el siguiente error:

```
npx : File D:\Software\Node\npx.ps1 cannot be loaded because running scripts is disabled on this system.
For more information, see about_Execution_Policies at https://go.microsoft.com/fwlink/?LinkID=135170.

At line:1 char:1
+ npx cypress run
+ ~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

Esto ocurre porque **PowerShell tiene bloqueada la ejecución de scripts**. Para resolverlo:

1. Abrir VS Code.
2. Abrir el terminal integrado.
3. Ejecutar el siguiente comando:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

1. Cuando aparezca la confirmación, presionar `Y` y luego `Enter`.
2. Reiniciar el terminal de VS Code.
3. Ejecutar nuevamente el comando deseado:

```bash
npx cypress run
```

## Orden de los archivos del demo

- [Archivo demo como base de la presentación](demo.md)
- [Comandos de consola para demo](commands.md)
