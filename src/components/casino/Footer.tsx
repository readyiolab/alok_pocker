import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import TermsContent from "./TermsContent";
import PrivacyContent from "./PrivacyContent";

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background with subtle chips pattern */}
      <div className="absolute inset-0 bg-casino-darker" />
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 rounded-full border-2 border-dashed border-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <img 
            src="/logo.webp" 
            alt="RoyalFlush.red" 
            className="h-20 opacity-80"
          />

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button 
              onClick={() => setShowTerms(true)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => setShowPrivacy(true)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </button>
            <a 
              href="mailto:info@royalflush.red"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              info@royalflush.red
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 RoyalFlush.red. All rights reserved.
          </p>
        </div>
      </div>

      {/* Terms Modal */}
      <Dialog open={showTerms} onOpenChange={setShowTerms}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl gold-text">Terms & Conditions</DialogTitle>
          </DialogHeader>
          <TermsContent />
        </DialogContent>
      </Dialog>

      {/* Privacy Modal */}
      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl gold-text">Privacy Policy</DialogTitle>
          </DialogHeader>
          <PrivacyContent />
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
