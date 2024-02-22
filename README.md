=====[ Импорт базы данных ]=====
1. Запустить mongo DB
2. Создать таблицу с названием gallant_gentleman
3. Создать столбец с названием users и импортировать данные из ./database/gallant_gentleman.users.json
4. Создать столбец с названием products и импортировать данные из ./database/gallant_gentleman.products.json

=====[ Запуск API (backend часть | строго после импорта бд) ]=====
1. cd backend
2. npm install
3. npm start


=====[ Запуск клиентской части (frontend часть) ]=====
1. cd frontend
2. npm install
3. npm start


=====[ Доступы от аккаунтов (при наличии импорта бд) ]=====
Администратор сайта
Email: admin@example.com
Пароль: 123

Простой пользователь
Email: user@mail.ru
Пароль: 456