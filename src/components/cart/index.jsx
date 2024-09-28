import { ShoppingBagIcon } from "lucide-react";
import React, { useContext } from "react";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Badge } from "../ui/badge";
import CartContext from "../../context/cartsContext";
import ProductContext from "../../context/productContext";

const Cart = () => {
  const { Carts, deleteProductToCart } = useContext(CartContext);
  const { Products } = useContext(ProductContext);

  const cartCount = Carts?.products?.reduce((p, c) => p + c.quantity, 0) || 0;

  if (Products.length <= 0) {
    return <div>Loading....</div>;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Badge className="absolute -top-3 -right-3 h-6 w-6 p-0 grid place-content-center">
            {cartCount}
          </Badge>
          <ShoppingBagIcon className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mx-auto w-full max-w-sm flex flex-col h-dvh">
          <SheetHeader>
            <SheetTitle>Shopping cart</SheetTitle>
          </SheetHeader>
          <div className="flow-root overflow-auto flex-1">
            <ul role="list" className="divide-y divide-gray-200 m-0">
              {Carts?.products.map((cart) => {
                console.log("Products", Products);

                const product = Products.find((x) => x.id === cart.productId);
                console.log("product", product);

                return (
                  <li key={cart.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        alt={product.title}
                        src={product.image}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.href}>{product.title}</a>
                          </h3>
                          <p className="ml-4">{product.price}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {cart.quantity}</p>

                        <div className="flex">
                          <Button onClick={() => deleteProductToCart(product)}>
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <SheetFooter className="flex !flex-col">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p className="!m-0 p-0">Subtotal</p>
              <p className="!m-0 p-0">$262.00</p>
            </div>
            <p className="text-sm !m-0 text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <Button className="!m-0">Checkout</Button>
            <div className="pt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{" "}
                <SheetClose asChild>
                  <Button
                    variant="link"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </Button>
                </SheetClose>
              </p>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
