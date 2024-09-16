import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import ProductContext from "../context/productContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import FormInput from "../components/form/Input";
import ReactHookForm from "../components/form/ReactHookForm";
import FileUpload from "../components/form/upload";
import FormComboBox from "../components/form/FormComboBox";

const fields = [
  {
    component: FormInput,
    label: "Title",
    placeholder: "Product Title",
    name: "title",
    type: "text",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Title is mendatory..",
      },
    },
  },
  {
    component: FormInput,
    label: "Description",
    placeholder: "Product Description",
    name: "description",
    type: "text",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Description is mendatory..",
      },
    },
  },
  {
    component: FormInput,
    label: "Price",
    placeholder: "Product Price",
    name: "price",
    type: "number",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Price is mendatory..",
      },
    },
  },
  {
    component: FormComboBox,
    label: "Category",
    placeholder: "Product Category",
    name: "category",
    type: "text",
    defaultValue: "",
    options: [
      { value: "men's clothing", text: "men's clothing" },
      { value: "jewelery", text: "jewelery" },
      { value: "electronics", text: "electronics" },
      { value: "women's clothing", text: "women's clothing" },
    ],
    rules: {
      required: {
        value: true,
        message: "Category is mendatory..",
      },
    },
  },
  {
    component: FileUpload,
    label: "Image",
    placeholder: "Product Image",
    name: "image",
    type: "file",
    defaultValue: "",
    className: "w-full",
    rules: {
      required: {
        value: true,
        message: "Image is mendatory..",
      },
    },
  },
];

const Home = () => {
  const { Products, loadProducts, addProduct, updateProduct } =
    useContext(ProductContext);
  const [updatedObject, setUpdatedObject] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <button
        className="mb-4"
        onClick={() => {
          setUpdatedObject(null);
          setDialogOpen(true);
        }}
      >
        Add Product
      </button>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogDescription>
              Enter the details of the new product here.
            </DialogDescription>
          </DialogHeader>
          <ReactHookForm
            fields={fields}
            onSubmit={(data) => {
              if (data.id) {
                updateProduct(data);
              } else {
                addProduct(data);
              }
            }}
            defaultValues={updatedObject}
            className="grid-cols-2"
          />
        </DialogContent>
      </Dialog>
      <Table>
        <TableCaption>A list of your products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell className="text-right">
                ${product.price.toFixed(2)}
              </TableCell>
              <TableCell>
                <button onClick={() => handleViewProduct(product.id)}>
                  View
                </button>
                <button
                  onClick={() => {
                    const convertImageUrlToFile = async (imageUrl) => {
                      const response = await fetch(imageUrl);
                      const blob = await response.blob();
                      return new File([blob], "product_image.jpg", {
                        type: blob.type,
                      });
                    };

                    if (product.image) {
                      convertImageUrlToFile(product.image).then((file) => {
                        setUpdatedObject({ ...product, image: file });
                        setDialogOpen(true);
                      });
                    } else {
                      setUpdatedObject(product);
                      setDialogOpen(true);
                    }
                  }}
                >
                  Update
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Home;
