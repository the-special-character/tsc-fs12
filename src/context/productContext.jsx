import React, { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  const addProduct = async (product) => {
    try {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append("file", product.image);
      formData.append("upload_preset", "tsc_fs_14"); // Replace with your Cloudinary upload preset

      // Upload image to Cloudinary
      const cloudinaryResponse = await fetch(
        "https://api.cloudinary.com/v1_1/dnxzgxivo/image/upload", // Replace with your Cloudinary cloud name
        {
          method: "POST",
          body: formData,
        }
      );

      const cloudinaryData = await cloudinaryResponse.json();

      if (!cloudinaryResponse.ok) {
        throw new Error(cloudinaryData.error.message);
      }

      // Replace the image file with the Cloudinary URL
      const productWithCloudinaryUrl = {
        ...product,
        price: Number(product.price),
        image: cloudinaryData.secure_url,
      };

      // Now proceed with adding the product to your database
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productWithCloudinaryUrl),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const data = await response.json();
      setProducts([...Products, data]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const updateProduct = async (product) => {
    try {
      let imageUrl;

      // Check if the image is already a URL (exists on Cloudinary)
      if (
        typeof product.image === "string" &&
        product.image.startsWith("http")
      ) {
        imageUrl = product.image;
      } else {
        // If it's a new file, upload to Cloudinary
        const formData = new FormData();
        formData.append("file", product.image);
        formData.append("upload_preset", "tsc_fs_14");

        const cloudinaryResponse = await fetch(
          "https://api.cloudinary.com/v1_1/dnxzgxivo/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const cloudinaryData = await cloudinaryResponse.json();

        if (!cloudinaryResponse.ok) {
          throw new Error(cloudinaryData.error.message);
        }

        imageUrl = cloudinaryData.secure_url;
      }

      // Replace the image file with the Cloudinary URL
      const productWithCloudinaryUrl = {
        ...product,
        price: Number(product.price),
        image: imageUrl,
      };
      const response = await fetch(
        `http://localhost:3000/products/${product.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productWithCloudinaryUrl),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update product");
      }
      const data = await response.json();
      setProducts(Products.map((p) => (p.id === product.id ? data : p)));
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        Products,
        loadProducts,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
