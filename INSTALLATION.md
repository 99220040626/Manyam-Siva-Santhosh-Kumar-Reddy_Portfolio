# Installation & Local Development Guide

## Prerequisites
- **Node.js**: v18.18.0+ or v20+ LTS
- **npm**: v9+ or `pnpm` / `yarn`

## Step-by-Step Setup

1. **Extract the Archive**:
   ```bash
   unzip Siva_Santhosh_Kumar_Reddy_AI_Portfolio.zip
   cd Siva_Santhosh_Kumar_Reddy_AI_Portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:3000`.

5. **Instant Zero-Build Preview**:
   You can also open `public/standalone-preview.html` directly in Chrome, Edge, Safari, or Firefox to experience the full 3D WebGL AI Operating System immediately without running a local Node server.
