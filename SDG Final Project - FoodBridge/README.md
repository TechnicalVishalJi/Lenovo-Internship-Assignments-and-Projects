# FoodBridge 🌍🍽️
**A Web Application to Address SDG 2: Zero Hunger**

FoodBridge is a MERN stack web application built to tackle food waste and hunger in local communities. It serves as a direct bridge between food donors (like restaurants, bakeries, and grocery stores) who have surplus food, and receivers (NGOs, shelters, and food banks) who distribute it to those in need.

## 🌟 Key Features
- **Role-Based Accounts:** Secure registration and login tailored specifically for 'Donors' or 'NGOs'.
- **Donor Dashboard:** An easy-to-use interface for businesses to post surplus food details, including quantity, pickup location, and expiry time.
- **NGO Claiming System:** A real-time feed where verified NGOs can view available food donations in their area and immediately claim them.
- **Modern UI/UX:** Built with React and Tailwind CSS for a fast, responsive, and beautiful user experience across all devices.

## 💻 Tech Stack
- **Frontend:** React.js, Tailwind CSS v4, React Router DOM, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Mongoose ORM)
- **Security:** JWT (JSON Web Tokens) for authentication, bcryptjs for password hashing

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v16 or higher)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and database URI.

### 1. Backend Setup
1. Open your terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string_here
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   *You should see "Server running on port 5000" and "Connected to MongoDB successfully".*

### 2. Frontend Setup
1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit `http://localhost:5173` to view the app!

---

## 🎯 About SDG 2: Zero Hunger
This project was developed as a final assignment focusing on the United Nations Sustainable Development Goals. By redirecting perfectly edible surplus food away from landfills and into the hands of those who need it, FoodBridge directly contributes to achieving Goal 2: ending hunger, achieving food security, and improving nutrition.

## 🤝 Contributing
Feel free to fork this repository and submit pull requests for any improvements or new features!

## 📝 License
This project is open-source and available under the MIT License.
