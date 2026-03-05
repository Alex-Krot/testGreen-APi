# Инструкция по загрузке проекта на GitHub

## Вариант 1: Через веб-интерфейс GitHub (самый простой)

1. Зайдите на https://github.com и войдите в аккаунт
2. Нажмите "+" в правом верхнем углу → "New repository"
3. Заполните:
   - Repository name: `green-api-tests`
   - Description: `Автотесты для GREEN-API WhatsApp`
   - Выберите Public или Private
   - НЕ ставьте галочки на "Add README" и "Add .gitignore"
4. Нажмите "Create repository"
5. На следующей странице выберите "uploading an existing file"
6. Перетащите все файлы из папки проекта (кроме node_modules и .env)
7. Напишите commit message: "Initial commit"
8. Нажмите "Commit changes"

## Вариант 2: Через командную строку (после перезапуска терминала)

Откройте новый терминал в папке проекта и выполните:

```bash
# Проверьте, что git работает
git --version

# Инициализируйте репозиторий
git init

# Добавьте все файлы
git add .

# Создайте первый коммит
git commit -m "Initial commit: GREEN-API WhatsApp автотесты"

# Создайте репозиторий на GitHub через веб-интерфейс, затем:
git remote add origin https://github.com/ваш-username/green-api-tests.git
git branch -M main
git push -u origin main
```

## Вариант 3: Через GitHub Desktop

1. Скачайте и установите GitHub Desktop: https://desktop.github.com/
2. Войдите в аккаунт GitHub
3. File → Add Local Repository
4. Выберите папку проекта
5. Нажмите "Publish repository"
6. Заполните название и описание
7. Нажмите "Publish"

## Важно!

Файл `.env` с вашими токенами НЕ будет загружен на GitHub (он в .gitignore).
Это правильно для безопасности ваших данных.
