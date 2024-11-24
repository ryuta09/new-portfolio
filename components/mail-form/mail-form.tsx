'use client'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";

export default function MailForm() {

  const form = useForm()

  function onSubmit(values: any) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={() => {form.handleSubmit(onSubmit)}} className="container flex flex-col gap-3 mx-auto">
        <FormField
          control={form.control}
          name="..."
          render={(field) => (
            <FormItem>
              <FormLabel />
              <FormControl>
                <Input placeholder="shadcn" {...field}/>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>送信</Button>
      </form>
    </Form>
  );
}
