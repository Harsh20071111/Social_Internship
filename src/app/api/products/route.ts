import { NextRequest, NextResponse } from "next/server";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/lib/db";

// GET /api/products - Get all products or single product by ID
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const product = getProductById(id);
      if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
      }
      return NextResponse.json(product);
    }

    const products = getProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error("API GET error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// POST /api/products - Create a new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Simple validation
    if (!body.name || !body.sku || !body.description) {
      return NextResponse.json(
        { error: "Name, SKU, and Description are required" },
        { status: 400 }
      );
    }

    // Check SKU uniqueness
    const products = getProducts();
    const skuExists = products.some(
      (p) => p.sku.toLowerCase() === body.sku.toLowerCase()
    );
    if (skuExists) {
      return NextResponse.json(
        { error: "A product with this SKU already exists" },
        { status: 400 }
      );
    }

    const newProduct = createProduct({
      sku: body.sku,
      name: body.name,
      shortDescription: body.shortDescription || "",
      description: body.description,
      features: body.features || [],
      specifications: body.specifications || {},
      applications: body.applications || [],
      benefits: body.benefits || [],
      imageUrl: body.imageUrl || "",
      images: body.images || (body.imageUrl ? [body.imageUrl] : []),
      price: body.price ? parseFloat(body.price) : undefined,
      factoryId: body.factoryId || "fact-gujarat-001",
      categoryId: body.categoryId || "cat-pumps-001",
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("API POST error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// PUT /api/products - Update an existing product
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json({ error: "Product ID is required for update" }, { status: 400 });
    }

    const existingProduct = getProductById(id);
    if (!existingProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Check SKU uniqueness if it's changing
    if (updateData.sku && updateData.sku.toLowerCase() !== existingProduct.sku.toLowerCase()) {
      const products = getProducts();
      const skuExists = products.some(
        (p) => p.sku.toLowerCase() === updateData.sku.toLowerCase()
      );
      if (skuExists) {
        return NextResponse.json(
          { error: "A product with this SKU already exists" },
          { status: 400 }
        );
      }
    }

    // Parse price if it exists
    if (updateData.price !== undefined) {
      updateData.price = updateData.price ? parseFloat(updateData.price) : undefined;
    }

    const updated = updateProduct(id, updateData);
    return NextResponse.json(updated);
  } catch (error) {
    console.error("API PUT error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// DELETE /api/products - Delete a product
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    const success = deleteProduct(id);
    if (!success) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("API DELETE error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
