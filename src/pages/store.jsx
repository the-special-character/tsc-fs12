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
import CartContext from "../context/cartsContext";

const Store = () => {
  const { Products } = useContext(ProductContext);
  const { Carts, addProductToCart, updateProductToCart, deleteProductToCart } =
    useContext(CartContext);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
      {Products.map((product) => {
        console.log(Carts.products);

        const productInCart = Carts.products.find(
          (x) => x.productId === product.id
        );

        console.log("productInCart", productInCart);

        return (
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
            <CardFooter className="flex items-center">
              {productInCart ? (
                <>
                  <Button
                    className="flex-1"
                    onClick={() => updateProductToCart(product, 1)}
                  >
                    +
                  </Button>
                  <p className="flex-1 text-center !m-0 font-semibold text-xl">
                    {productInCart.quantity}
                  </p>
                  <Button
                    className="flex-1"
                    onClick={() => {
                      if (productInCart.quantity > 1) {
                        updateProductToCart(product, -1);
                      } else {
                        deleteProductToCart(product);
                      }
                    }}
                  >
                    -
                  </Button>
                </>
              ) : (
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => addProductToCart(product)}
                >
                  Add To Cart
                </Button>
              )}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default Store;
