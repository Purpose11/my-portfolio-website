"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section className="py-16 md:py-24" id="contact">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800">
            Get in touch
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-blue-700 md:text-lg max-w-[700px]">
            What's next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
          <div className="space-y-6 mt-8 w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4">
              <Mail className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-medium text-blue-900">
                adebayofatai924@gmail.com
              </span>
              <Button
                variant="outline"
                size="sm"
                className="ml-2 text-blue-500 border-blue-500 hover:bg-blue-50"
                onClick={() =>
                  copyToClipboard("adebayofatai924@gmail.com", "email")
                }
              >
                {copiedEmail ? (
                  <Check className="h-4 w-4 mr-2" />
                ) : (
                  <Copy className="h-4 w-4 mr-2" />
                )}
                {copiedEmail ? "Copied!" : "Copy"}
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 bg">
              <Phone className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-medium text-blue-900">
                08087858857
              </span>
              <Button
                variant="outline"
                size="sm"
                className="ml-2 text-blue-500 border-blue-500 hover:bg-blue-50"
                onClick={() => copyToClipboard("08087858857", "phone")}
              >
                {copiedPhone ? (
                  <Check className="h-4 w-4 mr-2" />
                ) : (
                  <Copy className="h-4 w-4 mr-2" />
                )}
                {copiedPhone ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-sm text-blue-600 mb-4">
              You may also find me on these platforms!
            </p>
            <div className="flex gap-6 justify-center">
              <SocialButton
                href="https://github.com/Purpose11"
                icon={<Github className="h-5 w-5" />}
                label="GitHub"
              />
              <SocialButton
                href="https://www.linkedin.com/in/adebayo-fatai-836628244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                icon={<Linkedin className="h-5 w-5" />}
                label="LinkedIn"
              />
            </div>
          </div>
          <div className="mt-16 text-sm text-blue-600">© 2024 | Fatai.dev</div>
        </div>
      </div>
    </section>
  );
}

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialButton({ href, icon, label }: SocialButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="w-12 h-12 rounded-full text-blue-500 border-blue-300 hover:bg-blue-50"
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
        <span className="sr-only">{label}</span>
      </a>
    </Button>
  );
}
