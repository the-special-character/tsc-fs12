import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import ProductContext from "../context/productContext";
import { Button } from "../components/ui/button";

const Store = () => {
  const { Products } = useContext(ProductContext);

  console.log(Products);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
      {Products.map((product) => (
        <Card>
          <CardHeader>
            <img
              alt={product.title}
              src={product.image}
              className="object-fill object-center aspect-square"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="line-clamp-1">{product.title}</CardTitle>
            <CardDescription className="line-clamp-2">
              {product.description}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" className="w-full">
              Add To Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Store;
