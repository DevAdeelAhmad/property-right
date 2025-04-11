/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { motion } from "framer-motion"
import { Building, Check, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { fadeInUp, bounceIn } from "@/lib/animations"

const formSchema = z.object({
  propertyName: z.string().min(2, {
    message: "Property name must be at least 2 characters.",
  }),
})

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const TestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyName: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    
    try {
      const response = await fetch(`${apiUrl}/properties`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      
      if (response.ok) {
        const data = await response.json();
        toast.success("Property registered successfully!", {
          description: `Property "${values.propertyName}" has been added to the database.`,
          duration: 5000,
        })
        form.reset()
      } else {
        const errorData = await response.json()
        toast.error("Failed to register property", {
          description: errorData.message || "An unknown error occurred",
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error("Connection error", {
        description: "Could not connect to the NestJS backend. Please ensure the server is running.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="max-w-2xl mx-auto"
    >
      <Card className="border border-border shadow-sm overflow-hidden">
        <CardHeader className="bg-secondary/30 border-b border-border">
          <motion.div 
            variants={bounceIn}
            className="flex items-center gap-3 mb-2"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Building className="text-primary h-5 w-5" />
            </div>
            <CardTitle className="text-2xl font-bold">Property Registration</CardTitle>
          </motion.div>
          <CardDescription className="text-muted-foreground">
            Register your property in our secure database with verified credentials.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="propertyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Property Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter property name" 
                        {...field} 
                        className="h-11 bg-background border-border focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormDescription className="text-muted-foreground">
                      This will be the displayed name of your property in our listings.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Register Property</span>
                      <Check className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              By registering your property, you agree to our 
              <a href="#" className="text-primary hover:underline ml-1">Terms of Service</a> and 
              <a href="#" className="text-primary hover:underline ml-1">Privacy Policy</a>.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default TestForm
