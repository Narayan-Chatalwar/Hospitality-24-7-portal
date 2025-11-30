Hospital 24/7

Hospital 24/7 is a healthcare platform built to find nearby hospitals and make appointment booking easier. It features a robust analytics dashboard for administrators to track costs, patient volume, and operational efficiency.

🚀 Features

Interactive Dashboard: Real-time data visualization using Recharts.

Authentication: Secure login flow managed by Redux Toolkit.

Analytics: Track Revenue, Profit, User Growth, and Operational Costs.

Responsive Design: Fully optimized for desktop, tablet, and mobile using Tailwind CSS.

Modern UI: Clean aesthetic with dark mode support.

🛠️ Tech Stack

Framework: Next.js 14+ (App Router)

Language: TypeScript

State Management: Redux Toolkit

Styling: Tailwind CSS

Icons: Lucide React

Charts: Recharts

📂 Project Structure

src/
├── app/                  # Next.js App Router pages
├── components/           # Reusable UI components
│   ├── dashboard/        # Dashboard specific components (Sidebar, Metrics)
│   └── AuthForm.tsx      # Login/Signup Logic
├── context/              # (Legacy) Context API files
├── redux/                # Redux store and slices
│   ├── authSlice.ts      # Authentication logic
│   └── store.ts          # Store configuration
└── styles/               # Global styles


⚡ Getting Started

Follow these steps to set up the project locally.

Prerequisites

Node.js (v18 or higher)

npm or yarn

Installation

Clone the repository:

git clone [https://github.com/your-username/hospital-24-7.git](https://github.com/your-username/hospital-24-7.git)
cd hospital-24-7


Install dependencies:

npm install


Run the development server:

npm run dev


Open the app:
Visit http://localhost:3000 in your browser.

🧪 Mock Credentials

Since this is a Proof of Concept (PoC), you can log in using any non-empty credentials, or use the default mock user:

Email: user@araadigit.io

Password: any-password

🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

Fork the project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License

This project is licensed under the MIT License.