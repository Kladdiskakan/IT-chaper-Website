"use client";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useI18n } from "@/locales/client";

const formValues = {
  companyName: "",
  contactPerson: "",
  email: "",
  phone: "",
  message: "",
};

export function CompanyContactForm() {
  const t = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<typeof formValues>({
    defaultValues: formValues,
  });

  const onSubmit = async (data: typeof formValues) => {
    setIsSubmitting(true);
    setSubmitMessage(null);
    setIsSuccess(false);
    try {
      const response = await fetch(
        "https://crm.kth.it/webhooks/workflows/b4548c3e-4331-4b24-b1ea-26523dfbf8f2/b2cde148-38bd-48ba-addd-9ed837e99156",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setSubmitMessage(result.message);
        form.reset();
      } else {
        setSubmitMessage(result.error || t("CompanyForm.error"));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage(t("CompanyForm.networkError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-3xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("CompanyForm.companyName")}</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder={t("CompanyForm.companyNamePlaceholder")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactPerson"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("CompanyForm.contactPerson")}</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder={t("CompanyForm.contactPersonPlaceholder")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("CompanyForm.email")}</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="email"
                    className="h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder={t("CompanyForm.emailPlaceholder")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("CompanyForm.phone")}</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    type="tel"
                    className="h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder={t("CompanyForm.phonePlaceholder")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("CompanyForm.message")}</FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  className="min-h-[80px] w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder={t("CompanyForm.messagePlaceholder")}
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={isSubmitting}>
          {isSubmitting ? t("CompanyForm.submitting") : t("CompanyForm.submit")}
        </Button>
        {submitMessage && (
          <div
            className={`mt-4 p-4 rounded-md ${isSuccess ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
            {submitMessage}
          </div>
        )}
      </form>
    </Form>
  );
}
