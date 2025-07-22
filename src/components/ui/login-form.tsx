

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./form";
import { loginSchema, type LoginInput } from "@/pages/homePage/loginValidation";
import { useLoginMutation } from "@/redux/features/auth/auth";
import { toast } from "sonner"; 
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "parvez",
      password: "P@rvez123"
    }
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset
  } = form;

 
const onSubmit: SubmitHandler<LoginInput> = async (data) => {
  try {
    const response = await login(data).unwrap();
    
    if (response.token) {
      dispatch(setUser({ token: response.token }));
      localStorage.setItem('token', response.token);
      toast.success("Login successful!");
      reset()
      navigate('/dashboard');
    }
  } catch (error: any) {
    let errorMessage = "Login failed";
    
    if (error.data?.detail) {
      errorMessage = error.data.detail;
    } 
 
    // else if (error.data?.message) {
    //   errorMessage = error.data.message;
    // }
 
    // else if (error.status === 'FETCH_ERROR') {
    //   errorMessage = "Network error. Check connection.";
    // }
    
    toast.error(errorMessage);
  }
};


  return (
    <motion.div
      className="flex flex-col justify-center items-center min-h-screen w-full p-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
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
                    {...register("username")}
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
                    {...register("password")}
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
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? (
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
  );
}