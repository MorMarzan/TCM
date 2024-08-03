# TCM - Therapist Landing Page

## Overview

TCM is a bilingual, fully responsive landing page for a therapist. The site is built using React and Sass, and includes email integration via EmailJS. The project is designed to be easily deployed on Netlify.

## Features

- **Frontend Only**: This is a frontend-only application.
- **Bilingual Support**: Supports multiple languages using i18next.
- **Responsive Design**: Fully responsive design that works on all device sizes.
- **Email Integration**: Allows users to send emails via EmailJS.

## Tech Stack

- **React**: For building the user interface.
- **Sass**: For styling the application.
- **i18next**: For internationalization and language detection.
- **EmailJS**: For email integration.
- **MUI (Material-UI)**: For additional UI components.
- **FontAwesome**: For icons.
- **Vite**: For fast development and build tooling.
- **Netlify**: For deployment.

## Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- npm (version 6.x or later)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/tcm.git
    cd tcm
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_USER_ID=your_user_id
    ```

### Running the Application

- **Development Server**: To start the development server, run:
    ```sh
    npm run dev
    ```

- **Build**: To build the application for production, run:
    ```sh
    npm run build
    ```

- **Preview**: To preview the production build locally, run:
    ```sh
    npm run preview
    ```


