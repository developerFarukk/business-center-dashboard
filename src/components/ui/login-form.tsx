// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { FieldValues, SubmitHandler,  useForm } from "react-hook-form"
// import { Lock, Mail } from "lucide-react";
// import { Form } from "./form";
// import { loginSchema } from "@/pages/homePage/loginValidation";
// import { zodResolver } from "@hookform/resolvers/zod";

// export function LoginForm({
//   className,
//   ...props
// }: React.ComponentProps<"div">) {
//   const form = useForm({
//     resolver: zodResolver(loginSchema),
//     // defaultValues: {
//     //     username: "ffff",
//     //     password: "F1474542",
//     // },
//   });

//   const {
//     formState: { isSubmitting },
//     handleSubmit,
//     register,
//   } = form;

//   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
//     console.log(data);

//     // try {
//     //   const res = await sogIn(data);
//     //   if (res.success) {
//     //     toast.success("Login successful!");
//     //     router.push("/dashboard");
//     //   } else {
//     //     toast.error("Invalid Credentials!");
//     //   }
//     // } catch (error) {
//     //   console.error("Login error:", error);
//     //   toast.error("Something went wrong!");
//     // }
//   };

//   return (

//     <div>
//       <motion.div
//         className="flex flex-col justify-center p-6 md:p-8 lg:p-12"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       >
//         <div className={cn("flex flex-col gap-6", className)} {...props}>
//           <Card>
//             <CardHeader>
//               <CardTitle className="text-2xl text-center">
//                 Dashboard Login
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <Form {...form}>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                   <div className="flex flex-col gap-6">
//                     <div className="grid gap-2">
//                       <Label htmlFor="username">User Name</Label>
//                       <Input
//                         id="username"
//                         type="text"
//                         placeholder="Input Username"
//                         icon={<Mail size={20} />}
//                         required
//                         {...register("username")}
//                         {...({ fdprocessedid: "av252a" } as any)}
//                       />
//                     </div>
//                     <div className="grid gap-2">
//                       <div className="flex items-center">
//                         <Label htmlFor="password">Password</Label>
//                       </div>
//                       <Input
//                         id="password"
//                         type="password"
//                         required
//                         placeholder="Input password"
//                         icon={<Lock size={20} />}
//                         {...register("password")}
//                         {...({ fdprocessedid: "eltfvr" } as any)}
//                       />
//                     </div>
//                     <Button
//                       type="submit"
//                       {...({ fdprocessedid: "v6g0xg" } as any)}
//                       className="w-full cursor-auto"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? (
//                         <div className="flex items-center gap-2">
//                           <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
//                           <span>Logging in...</span>
//                         </div>
//                       ) : (
//                         <span>Log in</span>
//                       )}
//                     </Button>
//                   </div>
//                 </form>
//               </Form>
//             </CardContent>
//           </Card>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Lock, Mail } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./form";
import { loginSchema, type LoginInput } from "@/pages/homePage/loginValidation";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const {
    formState: { isSubmitting, errors },
    handleSubmit,
    register,
  } = form;

  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    console.log("Login Data:", data);

    // Example login logic
    // const res = await loginApi(data);
    // if (res.success) router.push("/dashboard");
  };

  return (
    // <div>
      <motion.div
        className="flex flex-col justify-center items-center min-h-screen w-full p-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        // className="flex flex-col justify-center items-center min-h-screen w-full p-4"
        // initial={{ opacity: 0, y: 20 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{
        //   type: "spring",
        //   damping: 10,
        //   stiffness: 100,
        // }}
      >
        <div className={cn("w-full max-w-md", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Dashboard Login
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Username */}
                  <div className="grid gap-2">
                    <Label htmlFor="username">User Name</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Input Username"
                      icon={<Mail size={20} />}
                      {...register("username")}
                      {...({ fdprocessedid: "eltfvr" } as any)}
                    />
                    {errors.username && (
                      <p className="text-sm text-red-500">
                        {errors.username.message}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Input Password"
                      icon={<Lock size={20} />}
                      {...register("password")}
                      {...({ fdprocessedid: "eltfvr" } as any)}
                    />
                    {errors.password && (
                      <p className="text-sm text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        <span>Logging in...</span>
                      </div>
                    ) : (
                      <span>Log in</span>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    // </div>
  );
}
