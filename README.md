# little_lemon

1. pipenv install
2. pipenv shell
3. python manage.py makemigrations
4. python manage.py migrate
5. python manage.py runserver


Does the web application use Django to serve static HTML content?

- http://localhost:8000/restaurant/

Has the learner committed the project to a Git repository?

- https://github.com/mdogan89/little_lemon

Does the application connect the backend to a MySQL database?

- Yes

Are the menu and table booking APIs implemented?

-for menu: http://localhost:8000/restaurant/menu/ (get,post)

-for single menu item: http://localhost:8000/restaurant/menu/1 (get,post,patch,put,delete)

-for bookings: http://localhost:8000/booking/tables/ (get,post)

Is the application set up with user registration and authentication?

-for registration http://localhost:8000/auth/users/ (get,post)

-for authentication http://localhost:8000/auth/token/login or http://localhost:8000/api-token-auth/

Does the application contain unit tests?

- python manage.py test

Can the API be tested with the Insomnia REST client?

- python manage.py runserver