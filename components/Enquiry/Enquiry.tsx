"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { visibleHiddenYVariants } from "../utils/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Element } from "react-scroll";
import axios from "axios";
import { toast } from "../ui/use-toast";
import { Icons } from "../ui/icons";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  email: z
    .string()
    .min(1, { message: "Email is required field" })
    .email("This is not a valid email."),
  mobile: z
    .string()
    .min(10, { message: "Enter a valid Mobile number" })
    .max(10, { message: "Enter a valid Mobile number" }),
  message: z.string().min(1, {
    message: "Message is required field",
  }),
});

function Enquiry() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const [isLoading, setIsLoding] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoding(true);
    const postData = {
      email: values.email,
      name: values.name,
      mobile: values.mobile,
      description: values.message,
    };
    axios
      .post("/api/enquiry/create", postData)
      .then((res) => {
        if (res.status) {
          toast({
            title: "Successfully",
            description: res.data.message,
          });
          form.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoding(false);
      });
  }

  return (
    <Element className="pt-28 pb-24 bg-[#F7F7F7]" name="contact">
      <div className="px-4 md:px-16 flex justify-center">
        <div className="w-10/12 md:w-8/12 xl:w-6/12">
          <motion.div
            ref={ref}
            variants={visibleHiddenYVariants(0.6, 20, 0, 0.6)}
            initial="hidden"
            animate={controls}
          >
            <h3 className="text-3xl mb-6 text-center font-semibold font-playfairdisplay">
              Contact
            </h3>
          </motion.div>
          <motion.div
            ref={ref}
            variants={visibleHiddenYVariants(0.6, 20, 0, 1)}
            initial="hidden"
            animate={controls}
            className="my-6 md:my-8"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mt-4 mb-2">
                      <FormControl>
                        <Input placeholder="Enter your name*" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mt-4 mb-2">
                      <FormControl>
                        <Input placeholder="Enter your email*" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem className="mt-4 mb-2">
                      <FormControl>
                        <Input
                          maxLength={10}
                          placeholder="Enter your mobile number*"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mt-4 mb-2">
                      <FormControl>
                        <Textarea
                          maxLength={320}
                          placeholder="Enter your message*"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center">
                  <Button
                    disabled={isLoading}
                    className="mt-6 px-8 py-2"
                    type="submit"
                  >
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </Element>
  );
}

export default Enquiry;
