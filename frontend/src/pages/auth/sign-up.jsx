import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from 'react';
import * as z from "zod";
import useStore from "../../store";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { SocialAuth } from "../../components/social-auth";

const RegisterSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email({ message: "Invalid email address" }),
  firstName: z.string({ required_error: "Name is required" }),
  password: z.string({ required_error: "Password is required" }).min(1, "Password is required"),
});

const SignUp = () => {
  const { user } = useStore((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && navigate("/");
  }, [user, navigate]);

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen py-10">
      <Card className="w-[400px] bg-white dark:bg-black/20 shadow-md overflow-hidden">
        {/* ✅ Fixed: Removed unnecessary div */}
        <CardHeader className="py-4 px-6">
          <CardTitle className="mb-8 text-center text-black dark:text-white">
            Create Account
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 overflow-hidden">
            <div className="mb-8 space-y-6">
              <SocialAuth isLoading={loading} setLoading={setLoading} />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
