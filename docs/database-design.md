# Database Design

This document describes the PostgreSQL schema using Prisma ORM.

## Models

### Factory
- `id` (CUID)
- `name` (String)
- `location` (String)
- `description` (String)
- `imageUrl` (String, Optional)
- Relations: `products` (One-to-Many)

### Category
- `id` (CUID)
- `name` (String)
- `description` (String, Optional)
- Relations: `products` (One-to-Many)

### Product
- `id` (CUID)
- `name` (String)
- `sku` (String, Unique)
- `description` (String)
- `features` (String Array)
- `imageUrl` (String, Optional)
- `images` (String Array)
- `price` (Float, Optional)
- Relations: `factory` (Many-to-One), `category` (Many-to-One)

### Inquiry
- `id` (CUID)
- `name` (String)
- `email` (String)
- `company` (String, Optional)
- `phone` (String, Optional)
- `message` (String)
- `status` (String, Default: "PENDING")
