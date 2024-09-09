# Cipher Chest 🔐

A **Simple Password Manager** built with **Vite** and **React** that securely stores passwords locally in the browser's **localStorage**. This lightweight app allows users to easily manage their passwords without needing a server or database.

## Features ⚙️

- **LocalStorage-Based**: Store passwords securely in the browser using localStorage.
- **Add, Edit, and Delete Passwords**: Manage your passwords through a simple and intuitive interface.
- **Lightweight and Fast**: Built with Vite for fast loading times and development.
  
## Tech Stack 🛠️

- **Frontend**: React (with Vite)
- **Storage**: localStorage (browser-based)

## Installation 🚀

Follow these steps to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/simple-password-manager.git
   cd simple-password-manager
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

The development server should now be running on `http://localhost:5173`, and you can use the app in your browser.

## Usage 🧭

1. **Add New Password**:
   - Use the form to input a website, username, and password.
   - The password will be securely stored in the browser's localStorage.

2. **View Passwords**:
   - A list of saved passwords will be displayed.
   - You can view, edit, or delete passwords.

## Security Considerations ⚠️

- This password manager stores data in **localStorage**, which does not include encryption by default. It is suitable for basic password management but may not be ideal for highly sensitive data.
- Consider integrating encryption techniques to further secure stored passwords if needed.

## Contributing 🤝

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request for review.