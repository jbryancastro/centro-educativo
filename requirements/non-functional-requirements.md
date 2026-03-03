# Requerimientos No Funcionales

## 1. Rendimiento

RNF-01: El sistema debe responder a cualquier solicitud en menos de 3 segundos bajo una carga de hasta 200 usuarios simultáneos.

RNF-02: El tiempo de inicio de sesión no debe superar los 2 segundos.


## 2. Seguridad

RNF-03: Las contraseñas deben almacenarse utilizando cifrado hash seguro (mínimo SHA-256 o equivalente).

RNF-04: El sistema debe bloquear la cuenta tras 5 intentos fallidos consecutivos.

RNF-05: El enlace de recuperación de contraseña debe expirar en 15 minutos.


## 3. Disponibilidad

RNF-06: El sistema debe estar disponible el 99% del tiempo mensual.


## 4. Usabilidad

RNF-07: El sistema debe permitir completar el inicio de sesión en máximo 3 pasos.

RNF-08: Los dashboards deben mostrar la información principal sin necesidad de desplazamiento vertical en pantallas estándar (1366x768).


## 5. Accesibilidad (Obligatorio)

RNF-09: La aplicación debe cumplir con el nivel AA de las WCAG 2.1.

RNF-10: El sistema debe permitir navegación completa mediante teclado.

RNF-11: Todos los elementos interactivos deben incluir etiquetas compatibles con lectores de pantalla.

RNF-12: El contraste de colores debe ser mínimo 4.5:1 para texto normal.