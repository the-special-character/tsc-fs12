import React, { useCallback, useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "./components/ui/button";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Label } from "./components/ui/label";

const Quize = () => {
  const form = useForm();
  const [quize, setQuize] = useState([]);
  const [error, setError] = useState(null);
  const [selectedQuize, setSelectedQuize] = useState(null);
  const [page, setPage] = useState(0);

  const loadQuizeData = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:3000/quiz");
      const json = await res.json();
      if (!res.ok) throw new Error(json);
      setQuize(json);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    loadQuizeData();
  }, []);

  console.log(quize);

  const onSubmit = (value) => {
    console.log("value", value);
    selectedQuize[page].correctAnswer === value.question;

    setPage((val) => val + 1);
  };

  if (!selectedQuize) {
    return (
      <main>
        <section>
          <h1>Welcome to the frontend Quize</h1>
          <p>Pick a subject to get Started</p>
        </section>
        <section>
          {quize.map((item) => {
            return (
              <Button
                key={item.name}
                type="button"
                onClick={() => {
                  setSelectedQuize(item.questions);
                }}
              >
                {item.name}
              </Button>
            );
          })}
        </section>
      </main>
    );
  }

  return (
    <main>
      <section>
        <h1>{selectedQuize[page].question}</h1>
      </section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    {selectedQuize[page].options.map((item) => {
                      return (
                        <FormItem
                          key={item.value}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item.value} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.text}
                          </FormLabel>
                        </FormItem>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
};

export default Quize;
