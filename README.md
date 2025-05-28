# 💬 NextChat

**NextChat** is a community-based chat application designed to connect everyone in real-time. It leverages modern technologies like Django, React, and Web APIs to deliver a fast, scalable, and intuitive messaging platform.

---

## 🚀 Tech Stack

### 🔧 Backend
- **Python**
- **Django**
- **Django REST Framework (DRF)**
- **PostgreSQL**
- **Django ORM**

### 🎨 Frontend
- **React.js**
- **JavaScript (ES6+)**
- **Tailwind CSS**

### 🌐 Others
- REST API
- JWT Authentication (optional or future scope)
- Git & GitHub

---

## 🖥️ Project Structure

### 1. 🚀 Clone the Repository

```bash
git clone https://github.com/team-project-hub/NextChat.git
cd NextChat
```

### 2. 🧪 Backend Setup (Django)

```bash
# Create and activate a virtual environment
python -m venv env

# macOS/Linux
source env/bin/activate

# Windows (PowerShell)
.\env\Scripts\Activate

# Install Python dependencies
pip install -r requirements.txt

# Apply database migrations
python manage.py makemigrations
python manage.py migrate

# Create a superuser
python manage.py createsuperuser

# Run the Django development server(run as wsgi)
python manage.py runserver

# Run as asgi( use daphne)
daphne next_chat.asgi:application

```

### 3. 🌐 Frontend Setup (React + Tailwind)

```bash

# Move into the frontend directory
cd frontend

# Install frontend dependencies
npm install

# Start the frontend development server
npm run dev

```

### 4. 🛠️ Environment Variables

##  Development Notes

This project is under active development.

✅ Works with Python + PostgreSQL

🐳 Docker support coming soon

📱 Future updates: Mobile responsiveness, enhanced SSO, chat reactions

Feel free to fork, contribute, and raise issues or feature suggestions!

## 🤝 Contributing

Fork the repo

Create your feature branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/YourFeature)

Open a Pull Request

## 📂 Project Structure

```bash

nextchat/
├── backend/
│   ├── manage.py
│   ├── settings.py
│   ├── chat/          # Django app for chat logic
│   └── ...
├── frontend/
│   ├── package.json
│   ├── tailwind.config.js
│   ├── src/
│   └── ...
├── requirements.txt
├── README.md
└── .gitignore

```

## 📌 Notes
Docker support will be added in the future.
Current setup is for local development using Python and PostgreSQL directly.

## 📄 License
This project is licensed under the MIT License.

## 🙌 Support
If you find this project helpful, consider giving it a ⭐ on GitHub and sharing it with others!







