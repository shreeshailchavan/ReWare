'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AddNewItem() {
  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selected = Array.from(e.target.files);
    setImages(selected);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
    console.log('Submitted');
  };

  return (
    <div className="min-h-screen bg-muted/50 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white dark:bg-card p-8 rounded-2xl shadow-lg transition-all">
        <h1 className="text-2xl font-bold text-primary mb-8 text-center">Add New Item</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Upload Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="file:bg-primary file:text-white file:px-4 file:py-2 file:rounded-lg file:border-0 file:mr-4 file:cursor-pointer bg-muted/40 text-sm rounded-lg w-full"
            />
            {images.length > 0 && (
              <div className="flex gap-3 mt-4 flex-wrap">
                {images.map((img, idx) => (
                  <div key={idx} className="relative w-24 h-24 rounded-lg overflow-hidden border shadow">
                    <Image
                      src={URL.createObjectURL(img)}
                      alt={`preview-${idx}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Title & Description */}
          <div className="grid grid-cols-1 gap-4">
            <FloatingInput label="Title" name="title" required />
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Description</label>
              <textarea
                className="w-full rounded-lg border border-border bg-muted p-3 resize-none"
                rows={4}
                placeholder="Describe your item..."
                required
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Category</label>
            <select className="w-full border border-border rounded-lg p-3 bg-muted" required>
              <option value="">Choose category</option>
              <option>Clothing</option>
              <option>Footwear</option>
              <option>Accessories</option>
              <option>Kids</option>
              <option>Other</option>
            </select>
          </div>

          {/* Type, Size, Condition */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FloatingInput label="Type" name="type" required />
            <FloatingInput label="Size" name="size" required />
            <div>
              <select className="w-full border border-border rounded-lg p-3 bg-muted"  required>
                <option value="">Select condition</option>
                <option>New</option>
                <option>Like New</option>
                <option>Gently Used</option>
                <option>Used</option>
              </select>
            </div>
          </div>

          {/* Tags */}
          <FloatingInput label="Tags (comma-separated)" name="tags" />

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-sm font-medium shadow transition"
            >
              Submit Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Floating label input component
function FloatingInput({
  label,
  name,
  required = false,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        required={required}
        placeholder=" "
        className="peer w-full border border-border bg-muted rounded-lg px-3 py-3 text-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <label
        htmlFor={name}
        className="absolute left-3 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground/70 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
}
