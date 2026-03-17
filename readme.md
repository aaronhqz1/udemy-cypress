# udemy-cypress

Cypress learning repository for Front-End Testing and QA.

------------------------------------------------------------------------

# Instalación de Cypress

1.  Abrir una consola o el **terminal de VS Code**.
2.  Ejecutar Cypress con el siguiente comando:

``` bash
npx cypress open
```

------------------------------------------------------------------------

# Cómo correr Cypress

Para abrir la interfaz de Cypress:

``` bash
npx cypress open
```

------------------------------------------------------------------------

# Comando de consola para correr todas las pruebas

``` bash
npx cypress run
```

------------------------------------------------------------------------

# Error común en Windows (PowerShell)

Si aparece el siguiente error:

    npx : File D:\Software\Node\npx.ps1 cannot be loaded because running scripts is disabled on this system.
    For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.

    At line:1 char:1
    + npx cypress run
    + ~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess

Esto ocurre porque **PowerShell tiene bloqueada la ejecución de
scripts**.

------------------------------------------------------------------------

# Solución recomendada

### 1. Abrir VS Code

### 2. Abrir el Terminal

### 3. Ejecutar el siguiente comando

``` powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 4. Cuando aparezca la confirmación, presionar:

    Y

### 5. Reiniciar el terminal de VS Code

### 6. Ejecutar nuevamente:

``` bash
npx cypress run
```

------------------------------------------------------------------------

# Sitio de prueba para Cypress

Testing Playground:

https://playground.bondaracademy.com/pages/iot-dashboard
