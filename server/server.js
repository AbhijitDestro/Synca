import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { clerkMiddleware } from '@clerk/express'
import {serve} from "inngest/express"
import {inngest,functions} from "./inngest/index.js"
import requireAuth from "./middleware/authMiddleware.js"
import workspaceRouter from "./routes/workspaceRoutes.js"

const app=express()

app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

app.get("/",(req,res)=>{res.send("<h1>Server is live!!</h1>")})
app.use("/api/inngest",serve({client:inngest,functions}))
app.use("/api/workspaces",requireAuth, workspaceRouter)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export for Vercel
export default app;


