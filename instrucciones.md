Aquí tengo una página web que he copiado de otro repositorio que tengo.

Ahora va a servir para alojar una web llamada "epigeneticabarcelona.com".

Está alojado en github pages. La conexión con GIT ya está configurada.

# Guía de Publicación - EcoEmpapador

## 📤 Flujo Completo: Subir Cambios y Publicar la Web

### Paso 1: Verificar el Estado Actual

Antes de empezar, revisa qué archivos has modificado:

```bash
git status
```

Esto te mostrará:
- Archivos modificados (en rojo)
- Archivos nuevos sin añadir (en rojo)
- Archivos listos para commit (en verde)

### Paso 2: Añadir los Cambios al Staging

Añade todos los archivos modificados:

```bash
git add .
```

O si quieres añadir archivos específicos:

```bash
git add src/pages/Home.jsx
git add src/data/products.js
```

### Paso 3: Hacer Commit (Guardar los Cambios Localmente)

Crea un commit con un mensaje descriptivo:

```bash
git commit -m "Descripción de los cambios realizados"
```

Ejemplos de mensajes:
```bash
git commit -m "Actualizar precios de productos"
git commit -m "Añadir nuevo artículo al blog"
git commit -m "Cambiar colores del sitio"
git commit -m "Corregir texto en la home"
```

### Paso 4: Subir los Cambios a GitHub

Sube los cambios a la rama principal (main o master):

```bash
git push origin main
```

O si tu rama se llama `master`:

```bash
git push origin master
```

**Nota**: Si es la primera vez que haces push, GitHub puede pedirte autenticación. Usa un Personal Access Token si te lo solicita.

### Paso 5: Publicar la Web en GitHub Pages

Una vez que los cambios están en GitHub, publica la web:

```bash
npm run deploy
```

Este comando:
1. Hace el build de la aplicación (genera la carpeta `dist/`)
2. Sube automáticamente el contenido a la rama `gh-pages`
3. GitHub Pages publica la web automáticamente

**Tiempo de publicación**: La web suele estar disponible en 1-2 minutos después del deploy.

### Paso 6: Verificar la Publicación

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. Verifica que está configurado para usar la rama `gh-pages`
4. Visita tu dominio: `www.empapador.com` (o la URL de GitHub Pages)

---

## 🔄 Resumen Rápido (Comandos en Orden)

```bash
# 1. Ver qué has cambiado
git status

# 2. Añadir todos los cambios
git add .

# 3. Guardar con un mensaje
git commit -m "Tu mensaje descriptivo"

# 4. Subir a GitHub
git push origin main

# 5. Publicar la web
npm run deploy
```

---

## ⚠️ Situaciones Especiales

### Si hay cambios en GitHub que no tienes localmente

Antes de hacer push, actualiza tu código local:

```bash
git pull origin main
```

Esto descarga los cambios remotos y los fusiona con los tuyos.

### Si quieres ver los cambios antes de hacer commit

```bash
git diff
```

Muestra las diferencias línea por línea.

### Si quieres deshacer cambios antes de hacer commit

```bash
# Deshacer cambios en un archivo específico
git checkout -- nombre-archivo.jsx

# Deshacer todos los cambios
git checkout -- .
```

### Si quieres deshacer el último commit (pero mantener los cambios)

```bash
git reset --soft HEAD~1
```

### Si el deploy falla

1. Verifica que tienes todos los cambios guardados:
```bash
git status
```

2. Asegúrate de estar en la rama correcta:
```bash
git branch
```

3. Intenta el deploy de nuevo:
```bash
npm run deploy
```

---

## 📝 Notas Importantes

- **Siempre haz commit antes de deploy**: El comando `npm run deploy` solo publica lo que está en tu repositorio local. Si no has hecho commit, los cambios no se publicarán.

- **El deploy es independiente del push**: Puedes hacer `git push` sin hacer `npm run deploy`, pero la web no se actualizará hasta que ejecutes `npm run deploy`.

- **La rama `gh-pages` se crea automáticamente**: No necesitas crearla manualmente. El comando `npm run deploy` la crea y actualiza automáticamente.

- **El dominio personalizado**: El archivo `public/CNAME` contiene la configuración del dominio. Si lo modificas, recuerda hacer commit y deploy.

---

## 🚀 Flujo Completo en un Solo Paso (Opcional)

Si quieres hacer todo de una vez (solo si estás seguro de los cambios):

```bash
git add . && git commit -m "Tu mensaje" && git push origin main && npm run deploy
```

**Recomendación**: Es mejor hacerlo paso a paso para poder revisar cada etapa.

---

## ❓ Preguntas Frecuentes

**P: ¿Necesito hacer push antes de deploy?**  
R: No es estrictamente necesario, pero es recomendable para tener un respaldo en GitHub.

**P: ¿Cuánto tarda en publicarse?**  
R: Entre 1-2 minutos después de ejecutar `npm run deploy`.

**P: ¿Puedo hacer deploy sin hacer commit?**  
R: No, el deploy solo publica lo que está en el repositorio. Si no has hecho commit, los cambios no se publicarán.

**P: ¿Qué pasa si olvido hacer push?**  
R: Tus cambios estarán solo en tu ordenador. Si pierdes el ordenador, perderás los cambios. Siempre haz push para tener respaldo.

**P: ¿Puedo hacer varios commits antes de hacer deploy?**  
R: Sí, puedes hacer todos los commits que quieras. El deploy siempre publica la última versión del código.
