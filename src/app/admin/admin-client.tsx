"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import {
  Plus,
  Edit2,
  Trash2,
  Upload,
  PlusCircle,
  X,
  Save,
  Loader2,
  Package,
  Factory as FactoryIcon,
  Tag,
  Key,
} from "lucide-react";
import { Product, Category, Factory } from "@/lib/db";

interface AdminClientProps {
  products: Product[];
  categories: Category[];
  factories: Factory[];
}

export default function AdminClient({
  products: initialProducts,
  categories,
  factories,
}: AdminClientProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  
  // Form State
  const [editingId, setEditingId] = useState<string | null>(null); // 'new' or product.id or null
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [factoryId, setFactoryId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  
  // Array / Key-Value states
  const [imageUrl, setImageUrl] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [specifications, setSpecifications] = useState<Record<string, string>>({});
  const [applications, setApplications] = useState<string[]>([]);
  const [benefits, setBenefits] = useState<string[]>([]);

  // Temp input states for array adding
  const [newFeature, setNewFeature] = useState("");
  const [newSpecKey, setNewSpecKey] = useState("");
  const [newSpecVal, setNewSpecVal] = useState("");
  const [newApplication, setNewApplication] = useState("");
  const [newBenefit, setNewBenefit] = useState("");
  const [uploading, setUploading] = useState(false);

  // Open Form for creating new product
  const handleNew = () => {
    setEditingId("new");
    setSku("");
    setName("");
    setShortDescription("");
    setDescription("");
    setPrice("");
    setFactoryId(factories[0]?.id || "");
    setCategoryId(categories[0]?.id || "");
    setImageUrl("");
    setImages([]);
    setFeatures([]);
    setSpecifications({});
    setApplications([]);
    setBenefits([]);
  };

  // Open Form for editing existing product
  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setSku(product.sku);
    setName(product.name);
    setShortDescription(product.shortDescription || "");
    setDescription(product.description || "");
    setPrice(product.price ? product.price.toString() : "");
    setFactoryId(product.factoryId);
    setCategoryId(product.categoryId);
    setImageUrl(product.imageUrl || "");
    setImages(product.images || []);
    setFeatures(product.features || []);
    setSpecifications(product.specifications || {});
    setApplications(product.applications || []);
    setBenefits(product.benefits || []);
  };

  // Close Form
  const handleCancel = () => {
    setEditingId(null);
  };

  // Image Upload handler
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      setImageUrl(data.url);
      setImages((prev) => {
        if (!prev.includes(data.url)) {
          return [...prev, data.url];
        }
        return prev;
      });
      toast.success("Image uploaded successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  // Delete product handler
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    const toastId = toast.loading("Deleting product...");
    try {
      const res = await fetch(`/api/products?id=${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to delete");
      }

      setProducts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Product deleted successfully!", { id: toastId });
      
      startTransition(() => {
        router.refresh();
      });
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Failed to delete product.", { id: toastId });
    }
  };

  // Array Add/Remove Helpers
  const addFeature = () => {
    if (!newFeature.trim()) return;
    setFeatures([...features, newFeature.trim()]);
    setNewFeature("");
  };
  const removeFeature = (idx: number) => {
    setFeatures(features.filter((_, i) => i !== idx));
  };

  const addSpec = () => {
    if (!newSpecKey.trim() || !newSpecVal.trim()) return;
    setSpecifications({
      ...specifications,
      [newSpecKey.trim()]: newSpecVal.trim(),
    });
    setNewSpecKey("");
    setNewSpecVal("");
  };
  const removeSpec = (key: string) => {
    const next = { ...specifications };
    delete next[key];
    setSpecifications(next);
  };

  const addApplication = () => {
    if (!newApplication.trim()) return;
    setApplications([...applications, newApplication.trim()]);
    setNewApplication("");
  };
  const removeApplication = (idx: number) => {
    setApplications(applications.filter((_, i) => i !== idx));
  };

  const addBenefit = () => {
    if (!newBenefit.trim()) return;
    setBenefits([...benefits, newBenefit.trim()]);
    setNewBenefit("");
  };
  const removeBenefit = (idx: number) => {
    setBenefits(benefits.filter((_, i) => i !== idx));
  };

  // Submit Form (Create / Edit)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !sku || !description) {
      toast.error("Please fill in Name, SKU, and Detailed Description.");
      return;
    }

    const payload = {
      id: editingId === "new" ? undefined : editingId,
      sku,
      name,
      shortDescription,
      description,
      price: price ? parseFloat(price) : undefined,
      imageUrl,
      images: images.length > 0 ? images : imageUrl ? [imageUrl] : [],
      features,
      specifications,
      applications,
      benefits,
      factoryId,
      categoryId,
    };

    const isEditing = editingId !== "new";
    const method = isEditing ? "PUT" : "POST";
    const toastId = toast.loading(isEditing ? "Updating product..." : "Creating product...");

    try {
      const res = await fetch("/api/products", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to save product");
      }

      const savedProduct = await res.json();

      if (isEditing) {
        setProducts((prev) => prev.map((p) => (p.id === editingId ? savedProduct : p)));
        toast.success("Product updated successfully!", { id: toastId });
      } else {
        setProducts((prev) => [savedProduct, ...prev]);
        toast.success("Product created successfully!", { id: toastId });
      }

      setEditingId(null);
      startTransition(() => {
        router.refresh();
      });
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Failed to save product.", { id: toastId });
    }
  };

  return (
    <div className="space-y-8">
      {/* Overview stats and actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Products Catalog ({products.length})</h2>
          <p className="text-sm text-zinc-500">Manage your list of active website products, specify detailed features and upload images.</p>
        </div>
        {!editingId && (
          <button
            onClick={handleNew}
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 px-4 py-2.5 text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
          >
            <Plus className="h-4.5 w-4.5" />
            Add Product
          </button>
        )}
      </div>

      {/* Editing / Creation Panel */}
      {editingId && (
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-6">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              {editingId === "new" ? "Add New Product" : `Edit Product: ${name}`}
            </h3>
            <button
              onClick={handleCancel}
              className="text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Grid fields */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., High-Performance Impeller"
                  className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-2 px-3 text-sm outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  SKU (Unique Identifier) *
                </label>
                <input
                  type="text"
                  required
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  placeholder="e.g., IMPELLER-001"
                  className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-2 px-3 text-sm outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Category *
                </label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-2 px-3 text-sm outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Factory *
                </label>
                <select
                  value={factoryId}
                  onChange={(e) => setFactoryId(e.target.value)}
                  className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-2 px-3 text-sm outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
                >
                  {factories.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.name} ({f.location})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Price (Optional USD / Unit)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g., 1250.00"
                  className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-2 px-3 text-sm outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Product Image Upload
                </label>
                <div className="flex gap-3 items-center">
                  <label className="flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 px-4 py-2 text-xs font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 cursor-pointer transition-colors">
                    <Upload className="h-4 w-4" />
                    Upload Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={uploading}
                    />
                  </label>
                  {uploading && <Loader2 className="h-4 w-4 animate-spin text-zinc-500" />}
                  {imageUrl && (
                    <div className="relative h-10 w-10 rounded border border-zinc-200 overflow-hidden bg-zinc-900">
                      <Image src={imageUrl} alt="preview" fill className="object-contain p-1" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                Short Description (Shown on cards) *
              </label>
              <input
                type="text"
                required
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                placeholder="Brief summary of product features..."
                className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-2 px-3 text-sm outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                Detailed Description *
              </label>
              <textarea
                required
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Full paragraph details regarding construction, materials, grades, configurations, etc..."
                className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-2 px-3 text-sm outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors"
              />
            </div>

            {/* List & Specifications Editor Section */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 border-t border-zinc-200 dark:border-zinc-800 pt-6">
              
              {/* Features Array */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Features</h4>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    placeholder="Add key feature..."
                    className="flex-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-1.5 px-3 text-xs outline-none focus:border-zinc-900 dark:focus:border-zinc-100"
                  />
                  <button
                    type="button"
                    onClick={addFeature}
                    className="rounded-lg bg-zinc-100 hover:bg-zinc-200 px-3 py-1 text-xs font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    Add
                  </button>
                </div>
                <div className="space-y-1.5">
                  {features.map((feat, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-900 p-2 rounded border border-zinc-200/50 dark:border-zinc-800/50 text-xs">
                      <span>{feat}</span>
                      <button type="button" onClick={() => removeFeature(idx)} className="text-red-500 hover:text-red-700">
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                  {features.length === 0 && <p className="text-xs text-zinc-400 italic">No features added yet.</p>}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Technical Specifications</h4>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newSpecKey}
                    onChange={(e) => setNewSpecKey(e.target.value)}
                    placeholder="Key (e.g., Material)"
                    className="flex-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-1.5 px-3 text-xs outline-none focus:border-zinc-900 dark:focus:border-zinc-100"
                  />
                  <input
                    type="text"
                    value={newSpecVal}
                    onChange={(e) => setNewSpecVal(e.target.value)}
                    placeholder="Value (e.g., SS316)"
                    className="flex-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-1.5 px-3 text-xs outline-none focus:border-zinc-900 dark:focus:border-zinc-100"
                  />
                  <button
                    type="button"
                    onClick={addSpec}
                    className="rounded-lg bg-zinc-100 hover:bg-zinc-200 px-3 py-1 text-xs font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    Add
                  </button>
                </div>
                <div className="space-y-1.5">
                  {Object.entries(specifications).map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-900 p-2 rounded border border-zinc-200/50 dark:border-zinc-800/50 text-xs">
                      <span><strong>{key}:</strong> {val}</span>
                      <button type="button" onClick={() => removeSpec(key)} className="text-red-500 hover:text-red-700">
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                  {Object.keys(specifications).length === 0 && <p className="text-xs text-zinc-400 italic">No specifications added yet.</p>}
                </div>
              </div>

              {/* Applications Array */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Applications</h4>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newApplication}
                    onChange={(e) => setNewApplication(e.target.value)}
                    placeholder="e.g., Chemical pumps..."
                    className="flex-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-1.5 px-3 text-xs outline-none focus:border-zinc-900 dark:focus:border-zinc-100"
                  />
                  <button
                    type="button"
                    onClick={addApplication}
                    className="rounded-lg bg-zinc-100 hover:bg-zinc-200 px-3 py-1 text-xs font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    Add
                  </button>
                </div>
                <div className="space-y-1.5">
                  {applications.map((app, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-900 p-2 rounded border border-zinc-200/50 dark:border-zinc-800/50 text-xs">
                      <span>{app}</span>
                      <button type="button" onClick={() => removeApplication(idx)} className="text-red-500 hover:text-red-700">
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                  {applications.length === 0 && <p className="text-xs text-zinc-400 italic">No applications added yet.</p>}
                </div>
              </div>

              {/* Benefits Array */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Benefits</h4>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newBenefit}
                    onChange={(e) => setNewBenefit(e.target.value)}
                    placeholder="e.g., Zero corrosion risk..."
                    className="flex-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-1.5 px-3 text-xs outline-none focus:border-zinc-900 dark:focus:border-zinc-100"
                  />
                  <button
                    type="button"
                    onClick={addBenefit}
                    className="rounded-lg bg-zinc-100 hover:bg-zinc-200 px-3 py-1 text-xs font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    Add
                  </button>
                </div>
                <div className="space-y-1.5">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-900 p-2 rounded border border-zinc-200/50 dark:border-zinc-800/50 text-xs">
                      <span>{benefit}</span>
                      <button type="button" onClick={() => removeBenefit(idx)} className="text-red-500 hover:text-red-700">
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                  {benefits.length === 0 && <p className="text-xs text-zinc-400 italic">No benefits added yet.</p>}
                </div>
              </div>
            </div>

            {/* Submission Actions */}
            <div className="flex items-center justify-end gap-3 border-t border-zinc-200 dark:border-zinc-800 pt-6">
              <button
                type="button"
                onClick={handleCancel}
                className="rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 px-5 py-2 text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100"
              >
                <Save className="h-4 w-4" />
                Save Product
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Main product management list */}
      {!editingId && (
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-zinc-50 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 font-semibold border-b border-zinc-200 dark:border-zinc-800">
                <tr>
                  <th className="p-4">Product Info</th>
                  <th className="p-4">SKU</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Factory</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-850">
                {products.length > 0 ? (
                  products.map((product) => {
                    const category = categories.find((c) => c.id === product.categoryId);
                    const factory = factories.find((f) => f.id === product.factoryId);
                    return (
                      <tr key={product.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="relative h-12 w-12 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-900 overflow-hidden shrink-0 flex items-center justify-center">
                              <Image
                                src={product.imageUrl || "/uploads/impeller.svg"}
                                alt={product.name}
                                fill
                                className="object-contain p-1"
                              />
                            </div>
                            <div>
                              <div className="font-bold text-zinc-900 dark:text-white">{product.name}</div>
                              <div className="text-xs text-zinc-500 line-clamp-1">{product.shortDescription}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 font-mono font-bold text-xs text-zinc-700 dark:text-zinc-300">
                          {product.sku}
                        </td>
                        <td className="p-4 text-zinc-600 dark:text-zinc-400">
                          {category?.name || "Uncategorized"}
                        </td>
                        <td className="p-4 text-zinc-600 dark:text-zinc-400">
                          {factory?.name || "Bhakti Industries"}
                        </td>
                        <td className="p-4 text-right">
                          <div className="inline-flex items-center gap-2">
                            <button
                              onClick={() => handleEdit(product)}
                              className="rounded p-1.5 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-200"
                              title="Edit Details"
                            >
                              <Edit2 className="h-4.5 w-4.5" />
                            </button>
                            <button
                              onClick={() => handleDelete(product.id)}
                              className="rounded p-1.5 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-red-950/30 hover:text-red-600"
                              title="Delete Product"
                            >
                              <Trash2 className="h-4.5 w-4.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-zinc-400 italic">
                      No products found. Add a product to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
