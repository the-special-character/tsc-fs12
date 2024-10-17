import React from "react";
import { Mail } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const CustomRadioGroup = () => {
  return (
    <>
      <Button className="">
        <div className="p-2 mr-2 bg-slate-500">
          <Mail className="h-4 w-4" />
        </div>
        Login with Email
      </Button>
      <RadioGroup defaultValue="comfortable">
        <Label
          htmlFor="r1"
          className="group relative flex cursor-pointer items-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 has-[:checked]:bg-slate-500"
        >
          <input type="radio" id="r1" name="default" className="sr-only" />
          <span>M</span>
        </Label>
        <Label
          htmlFor="r2"
          className="group relative flex cursor-pointer items-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 has-[:checked]:bg-slate-500"
        >
          <input type="radio" id="r2" name="default" className="sr-only" />
          <span>M</span>
        </Label>
        <Label
          htmlFor="r3"
          className="group relative flex cursor-pointer items-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 has-[:checked]:bg-slate-500"
        >
          <input type="radio" id="r3" name="default" className="sr-only" />
          <span>M</span>
        </Label>
        {/* <div className="flex items-center space-x-2">
          
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" className="sr-only" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" className="sr-only" />
          <Label htmlFor="r3">Compact</Label>
        </div> */}
      </RadioGroup>
    </>
  );
};

export default CustomRadioGroup;
