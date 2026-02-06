# Docker Deployment - Omnitok UI Storybook

## 🐳 Imagen Docker

La imagen Docker incluye:
- ✅ Todos los componentes de UI
- ✅ **Componentes Drag and Drop** (SortableList, FileDropzone, KanbanBoard, DraggableCard)
- ✅ Documentación completa en Storybook
- ✅ Servidor Nginx optimizado
- ✅ Compresión GZIP habilitada

**Tamaño**: ~69 MB

---

## 🚀 Uso Rápido

### Opción 1: Usar Docker Compose (Recomendado)

```bash
cd omnitok-ui
docker-compose up -d
```

Storybook estará disponible en: `http://localhost:8080`

### Opción 2: Docker Run

```bash
docker run -d -p 8080:80 --name omnitok-storybook omnitok-ui-storybook:latest
```

### Opción 3: Cargar desde archivo .tar

```bash
# Cargar la imagen
docker load -i omnitok-ui-storybook-with-drag-and-drop.tar

# Ejecutar
docker run -d -p 8080:80 --name omnitok-storybook omnitok-ui-storybook:latest
```

---

## 🛠️ Construcción

### Construir la imagen

```bash
cd omnitok-ui
docker build -t omnitok-ui-storybook:latest -f Dockerfile .
```

### Exportar como .tar

```bash
docker save omnitok-ui-storybook:latest -o omnitok-ui-storybook.tar
```

### Importar desde .tar

```bash
docker load -i omnitok-ui-storybook.tar
```

---

## 📋 Comandos Útiles

### Ver contenedores corriendo

```bash
docker ps | grep omnitok
```

### Ver logs

```bash
docker logs -f omnitok-storybook
```

### Detener y eliminar

```bash
docker stop omnitok-storybook
docker rm omnitok-storybook
```

### Acceder al contenedor

```bash
docker exec -it omnitok-storybook sh
```

---

## 🌐 Puertos

Por defecto, Storybook se expone en:
- **Puerto 80** dentro del contenedor
- **Puerto 8080** en el host (configurable en docker-compose.yml)

Para cambiar el puerto:

```bash
docker run -d -p 3000:80 --name omnitok-storybook omnitok-ui-storybook:latest
```

---

## 🔄 Actualizar la Imagen

1. Hacer cambios en el código
2. Reconstruir la imagen:
   ```bash
   docker build -t omnitok-ui-storybook:latest -f Dockerfile .
   ```
3. Detener el contenedor anterior:
   ```bash
   docker stop omnitok-storybook && docker rm omnitok-storybook
   ```
4. Iniciar nuevo contenedor:
   ```bash
   docker run -d -p 8080:80 --name omnitok-storybook omnitok-ui-storybook:latest
   ```

---

## 📦 Distribución

### Para compartir la imagen:

1. **Exportar a archivo**:
   ```bash
   docker save omnitok-ui-storybook:latest -o omnitok-ui-storybook.tar
   ```

2. **Compartir el archivo** (68 MB)

3. **Importar en otro sistema**:
   ```bash
   docker load -i omnitok-ui-storybook.tar
   ```

### Para publicar en Docker Hub:

```bash
# Tag
docker tag omnitok-ui-storybook:latest pervasivemind/omnitok-ui-storybook:latest

# Login
docker login

# Push
docker push pervasivemind/omnitok-ui-storybook:latest
```

---

## 🔍 Verificación

Después de iniciar el contenedor, verifica que funcione:

```bash
# Health check
docker ps | grep omnitok-storybook

# Prueba HTTP
curl http://localhost:8080

# Ver logs
docker logs omnitok-storybook
```

---

## 🎯 Contenido Incluido

La imagen contiene Storybook con:

### Componentes Base
- Button, Input, Select, Textarea, Checkbox, Radio
- Card, Badge, Avatar, Alert
- Sidebar, Header, Layout, Breadcrumb
- Table, Tabs, Pagination
- Modal, Toast
- LoginPage

### 🆕 Componentes Drag and Drop
- **SortableList** - Listas reordenables
- **FileDropzone** - Arrastrar y soltar archivos
- **KanbanBoard** - Tablero Kanban
- **DraggableCard** - Tarjetas arrastrables

### Documentación
- Introducción y guía de uso
- Colores y tipografía
- Patrones de UI/UX
- Integración PowerBI y Metabase
- Guía de Drag and Drop
- Cursor Rules

### Ejemplos Completos
- Dashboard Analytics
- Formularios (Product, User)
- Tablas (Users, Products)
- AI Analytics Dashboard
- Login Page

---

## 🐛 Troubleshooting

### Puerto ocupado

```bash
# Cambiar a otro puerto
docker run -d -p 9090:80 --name omnitok-storybook omnitok-ui-storybook:latest
```

### Contenedor no inicia

```bash
# Ver logs detallados
docker logs omnitok-storybook

# Verificar imagen
docker images | grep omnitok
```

### Reconstruir desde cero

```bash
# Eliminar todo
docker stop omnitok-storybook
docker rm omnitok-storybook
docker rmi omnitok-ui-storybook:latest

# Reconstruir
docker build --no-cache -t omnitok-ui-storybook:latest -f Dockerfile .
```

---

## 📚 Recursos

- **Storybook**: http://localhost:8080
- **GitHub**: https://github.com/pervasivemind/omnitok-ui-kit
- **NPM**: https://www.npmjs.com/package/@omnitok/ui
- **Documentación**: Ver `README.md` y `GETTING_STARTED.md`
