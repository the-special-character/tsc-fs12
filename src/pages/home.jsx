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
import { cn } from "../lib/utils";
import { StarFilledIcon } from "@radix-ui/react-icons";

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
  const { Products, addProduct, updateProduct } = useContext(ProductContext);
  const [updatedObject, setUpdatedObject] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

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
            onSubmit={async (data) => {
              if (data.id) {
                await updateProduct(data);
              } else {
                await addProduct(data);
              }
              setDialogOpen(false);
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
                ${Number(product.price).toFixed(2)}
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <button>View</button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full h-screen overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Product Details</DialogTitle>
                    </DialogHeader>
                    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                      <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <img
                          alt={product.title}
                          src={product.image}
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                          {product.title}
                        </h2>

                        <section
                          aria-labelledby="information-heading"
                          className="mt-2"
                        >
                          <h3 id="information-heading" className="sr-only">
                            Product information
                          </h3>
                          <p>{product.description}</p>

                          <p>Category: {product.category}</p>

                          <p className="text-2xl text-gray-900">
                            ${Number(product.price).toFixed(2)}
                          </p>

                          {/* Reviews */}
                          <div className="mt-6">
                            <h4 className="sr-only">Reviews</h4>
                            <div className="flex items-center">
                              <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                  <StarFilledIcon
                                    key={rating}
                                    aria-hidden="true"
                                    className={cn(
                                      (product?.rating?.rate || 0) > rating
                                        ? "text-gray-900"
                                        : "text-gray-200",
                                      "h-5 w-5 flex-shrink-0"
                                    )}
                                  />
                                ))}
                              </div>
                              <p className="sr-only">
                                {product?.rating?.rate || 0} out of 5 stars
                              </p>
                              <a
                                href="#"
                                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                {product?.rating?.count || 0} reviews
                              </a>
                            </div>
                          </div>
                        </section>

                        <section
                          aria-labelledby="options-heading"
                          className="mt-10"
                        >
                          <h3 id="options-heading" className="sr-only">
                            Product options
                          </h3>

                          <button
                            type="submit"
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Add to bag
                          </button>
                        </section>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <button
                  onClick={() => {
                    setUpdatedObject(product);
                    setDialogOpen(true);
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
