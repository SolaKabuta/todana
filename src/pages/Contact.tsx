import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Copy, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Easter egg state
  const [foundSecrets, setFoundSecrets] = useState<Set<number>>(new Set());
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [copiedPromo, setCopiedPromo] = useState(false);

  const PROMO_CODE = "SECRETHUNTER25";

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Easter egg refs
  const keySequence = useRef<string>("");
  const clickSequence = useRef<string[]>([]);
  const subtitleClickCount = useRef<number>(0);
  const subtitleClickTimeout = useRef<NodeJS.Timeout | null>(null);
  const longPressTimeout = useRef<NodeJS.Timeout | null>(null);

  // Title triple-click detection
  const titleClickCount = useRef<number>(0);
  const titleClickTimeout = useRef<NodeJS.Timeout | null>(null);

  // Show toast notification
  const revealSecret = (secretNumber: number, message: string) => {
    if (foundSecrets.has(secretNumber)) return;

    const newSecrets = new Set(foundSecrets);
    newSecrets.add(secretNumber);
    setFoundSecrets(newSecrets);

    setToastMessage(`${message}\n🎉 You found ${newSecrets.size} of 5 secrets!`);
    setShowToast(true);

    setTimeout(() => setShowToast(false), 4000);
  };

  // Copy promo code to clipboard
  const copyPromoCode = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopiedPromo(true);
      setTimeout(() => setCopiedPromo(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Easter Egg 1: Triple click on "CONTACT" title
  const handleTitleClick = () => {
    if (foundSecrets.has(1)) return;

    titleClickCount.current += 1;

    if (titleClickTimeout.current) {
      clearTimeout(titleClickTimeout.current);
    }

    titleClickTimeout.current = setTimeout(() => {
      titleClickCount.current = 0;
    }, 500); // Reset if clicks are more than 500ms apart

    if (titleClickCount.current >= 3) {
      titleClickCount.current = 0;

      gsap.to(titleRef.current, {
        rotation: 360,
        scale: 1.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        yoyo: true,
        repeat: 1,
      });

      revealSecret(1, "Secret 1: You unlocked the title dance!");
    }
  };

  // Easter Egg 2: Shake device (mobile) or type "secret" (desktop)
  useEffect(() => {
    let lastX = 0, lastY = 0, lastZ = 0;
    let shakeThreshold = 15; // Sensitivity threshold

    // Device shake detection for mobile
    const handleDeviceMotion = (event: DeviceMotionEvent) => {
      if (foundSecrets.has(2)) return;

      const acceleration = event.accelerationIncludingGravity;
      if (!acceleration) return;

      const { x, y, z } = acceleration;

      // Skip if any value is null
      if (x === null || y === null || z === null) return;

      // Calculate movement delta
      const deltaX = Math.abs(x - lastX);
      const deltaY = Math.abs(y - lastY);
      const deltaZ = Math.abs(z - lastZ);

      // Check if shake is strong enough
      if (deltaX > shakeThreshold || deltaY > shakeThreshold || deltaZ > shakeThreshold) {
        // Confetti effect
        const colors = ["#f97316", "#a855f7", "#3b82f6"];
        for (let i = 0; i < 50; i++) {
          const confetti = document.createElement("div");
          confetti.style.position = "fixed";
          confetti.style.left = `${Math.random() * 100}%`;
          confetti.style.top = "-20px";
          confetti.style.width = "10px";
          confetti.style.height = "10px";
          confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          confetti.style.borderRadius = "50%";
          confetti.style.zIndex = "9999";
          confetti.style.pointerEvents = "none";
          document.body.appendChild(confetti);

          gsap.to(confetti, {
            y: window.innerHeight + 100,
            x: `+=${Math.random() * 200 - 100}`,
            rotation: Math.random() * 360,
            opacity: 0,
            duration: 2 + Math.random(),
            ease: "power2.out",
            onComplete: () => confetti.remove(),
          });
        }

        revealSecret(2, "Secret 2: You shook things up!");
      }

      lastX = x;
      lastY = y;
      lastZ = z;
    };

    // Keyboard detection for desktop (fallback)
    const handleKeyPress = (e: KeyboardEvent) => {
      keySequence.current += e.key.toLowerCase();

      if (keySequence.current.includes("secret")) {
        keySequence.current = "";

        if (foundSecrets.has(2)) return;

        // Confetti effect
        const colors = ["#f97316", "#a855f7", "#3b82f6"];
        for (let i = 0; i < 50; i++) {
          const confetti = document.createElement("div");
          confetti.style.position = "fixed";
          confetti.style.left = `${Math.random() * 100}%`;
          confetti.style.top = "-20px";
          confetti.style.width = "10px";
          confetti.style.height = "10px";
          confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          confetti.style.borderRadius = "50%";
          confetti.style.zIndex = "9999";
          confetti.style.pointerEvents = "none";
          document.body.appendChild(confetti);

          gsap.to(confetti, {
            y: window.innerHeight + 100,
            x: `+=${Math.random() * 200 - 100}`,
            rotation: Math.random() * 360,
            opacity: 0,
            duration: 2 + Math.random(),
            ease: "power2.out",
            onComplete: () => confetti.remove(),
          });
        }

        revealSecret(2, "Secret 2: You typed the magic word!");
      }

      // Keep only last 10 characters
      if (keySequence.current.length > 10) {
        keySequence.current = keySequence.current.slice(-10);
      }
    };

    // Add event listeners
    window.addEventListener("devicemotion", handleDeviceMotion);
    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("devicemotion", handleDeviceMotion);
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [foundSecrets]);

  // Easter Egg 3: Click contact icons in order (Mail → Phone → MapPin)
  const handleIconClick = (iconName: string) => {
    clickSequence.current.push(iconName);

    if (clickSequence.current.length > 3) {
      clickSequence.current = clickSequence.current.slice(-3);
    }

    if (
      clickSequence.current.length === 3 &&
      clickSequence.current[0] === "mail" &&
      clickSequence.current[1] === "phone" &&
      clickSequence.current[2] === "mappin" &&
      !foundSecrets.has(3)
    ) {
      clickSequence.current = [];

      // Chain reaction animation
      gsap.timeline()
        .to(".contact-icon-mail", { scale: 1.5, rotation: 360, duration: 0.5 })
        .to(".contact-icon-phone", { scale: 1.5, rotation: 360, duration: 0.5 })
        .to(".contact-icon-mappin", { scale: 1.5, rotation: 360, duration: 0.5 })
        .to(".contact-icon", { scale: 1, rotation: 0, duration: 0.3 });

      revealSecret(3, "Secret 3: You found the right sequence!");
    }
  };

  // Easter Egg 4: 5 quick clicks on subtitle
  const handleSubtitleClick = () => {
    subtitleClickCount.current += 1;

    if (subtitleClickTimeout.current) {
      clearTimeout(subtitleClickTimeout.current);
    }

    subtitleClickTimeout.current = setTimeout(() => {
      subtitleClickCount.current = 0;
    }, 2000);

    if (subtitleClickCount.current >= 5 && !foundSecrets.has(4)) {
      subtitleClickCount.current = 0;

      gsap.to(subtitleRef.current, {
        color: "#3b82f6",
        scale: 1.1,
        textShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
        duration: 0.5,
        yoyo: true,
        repeat: 3,
      });

      revealSecret(4, "Secret 4: You're a speed clicker!");
    }
  };

  // Easter Egg 5: Long press on Send button
  const handleButtonMouseDown = () => {
    if (foundSecrets.has(5)) return;

    longPressTimeout.current = setTimeout(() => {
      gsap.timeline()
        .to(buttonRef.current, {
          scale: 1.2,
          backgroundColor: "#3b82f6",
          duration: 0.3,
        })
        .to(buttonRef.current, {
          rotation: 360,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(buttonRef.current, {
          scale: 1,
          rotation: 0,
          backgroundColor: "#FC7B01", // Return to original secondary color
          duration: 0.3,
        });

      revealSecret(5, "Secret 5: You discovered the power of patience!");
    }, 3000);
  };

  const handleButtonMouseUp = () => {
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
    }
  };

  // GSAP Animations
  useGSAP(
    () => {
      // Initial states set via inline styles in JSX (opacity: 0, transform: translate)
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Header animation
      tl.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
      });

      tl.to(
        formRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.5"
      );

      // Info animation
      tl.to(
        infoRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.8"
      );

      // Floating animation for decorative elements - slow and smooth
      gsap.to(".floating-orb", {
        y: "+=30",
        duration: 6, // Increased from 3 to 6 seconds
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.5,
        },
      });

      // Rotate animation for decorative elements - very slow
      gsap.to(".rotating-orb", {
        rotation: 360,
        duration: 40, // Increased from 20 to 40 seconds
        ease: "none",
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Success animation
    gsap.to(formRef.current, {
      scale: 0.98,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        console.log("Form submitted:", formData);
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main
      ref={containerRef}
      className="relative z-30 min-h-screen w-screen bg-primary text-text px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="floating-orb rotating-orb absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-secondary/30 via-accent/20 to-transparent rounded-full blur-3xl" />
        <div className="floating-orb absolute top-1/3 right-20 w-[500px] h-[500px] bg-gradient-to-br from-accent/25 via-secondary/15 to-transparent rounded-full blur-3xl" />
        <div className="floating-orb rotating-orb absolute bottom-20 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-secondary/20 via-accent/30 to-transparent rounded-full blur-3xl" />

        {/* Particle effect - small floating dots */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-orb absolute w-2 h-2 bg-accent/40 rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div ref={headerRef} className="max-w-7xl mx-auto mb-16" style={{ opacity: 0, transform: 'translateY(-100px)' }}>
        <div className="text-center mb-8">
          <h1
            ref={titleRef}
            onClick={handleTitleClick}
            className="text-5xl md:text-8xl lg:text-9xl uppercase font-black text-accent mb-4 drop-shadow-2xl cursor-pointer select-none"
          >
            Contact
          </h1>
          <p
            ref={subtitleRef}
            onClick={handleSubtitleClick}
            className="text-sm md:text-base text-text/80 italic cursor-pointer select-none"
          >
            Let's create something beautiful together
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Contact Form */}
        <div
          ref={formRef}
          className="bg-accent/5 backdrop-blur-sm rounded-lg p-8 border border-accent/20 hover:border-accent/40 hover:shadow-2xl hover:shadow-secondary/10 transition-[border-color,box-shadow] duration-500"
          style={{ opacity: 0, transform: 'translateX(-100px)' }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-accent mb-6">
            Send us a message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text mb-2 group-focus-within:text-secondary transition-colors"
              >
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-primary/50 border-accent/30 text-text placeholder:text-text/40 focus:border-secondary focus:scale-[1.02] transition-all duration-300"
              />
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text mb-2 group-focus-within:text-secondary transition-colors"
              >
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-primary/50 border-accent/30 text-text placeholder:text-text/40 focus:border-secondary focus:scale-[1.02] transition-all duration-300"
              />
            </div>

            <div className="group">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-text mb-2 group-focus-within:text-secondary transition-colors"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-primary/50 border-accent/30 text-text placeholder:text-text/40 focus:border-secondary focus:scale-[1.02] transition-all duration-300"
              />
            </div>

            <div className="group">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text mb-2 group-focus-within:text-secondary transition-colors"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-primary/50 border-accent/30 text-text placeholder:text-text/40 focus:border-secondary focus:scale-[1.02] transition-all duration-300 resize-none"
              />
            </div>

            <Button
              ref={buttonRef}
              type="submit"
              onMouseDown={handleButtonMouseDown}
              onMouseUp={handleButtonMouseUp}
              onMouseLeave={handleButtonMouseUp}
              onTouchStart={handleButtonMouseDown}
              onTouchEnd={handleButtonMouseUp}
              className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold text-base py-6 transition-all duration-300 hover:scale-[1.05] hover:shadow-lg hover:shadow-secondary/50 active:scale-95"
            >
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div ref={infoRef} className="space-y-8" style={{ opacity: 0, transform: 'translateX(100px)' }}>
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-accent mb-6">
              Get in touch
            </h2>
            <p className="text-sm md:text-base text-text/80 leading-relaxed mb-8">
              Whether you're looking for a custom piece, have questions about
              our collection, or want to discuss a collaboration, we'd love to
              hear from you.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div
              className="flex items-start gap-4 group cursor-pointer"
              onClick={() => handleIconClick("mail")}
            >
              <div className="contact-icon contact-icon-mail bg-accent/10 p-3 rounded-lg group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                <Mail className="h-6 w-6 text-accent group-hover:text-secondary transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-text mb-1">Email</h3>
                <a
                  href="mailto:tadana@example.com"
                  className="text-sm text-text/70 hover:text-secondary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  tadana@example.com
                </a>
              </div>
            </div>

            <div
              className="flex items-start gap-4 group cursor-pointer"
              onClick={() => handleIconClick("phone")}
            >
              <div className="contact-icon contact-icon-phone bg-accent/10 p-3 rounded-lg group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                <Phone className="h-6 w-6 text-accent group-hover:text-secondary transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-text mb-1">Phone</h3>
                <a
                  href="tel:+813123456789"
                  className="text-sm text-text/70 hover:text-secondary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  +81 312 345 6789
                </a>
              </div>
            </div>

            <div
              className="flex items-start gap-4 group cursor-pointer"
              onClick={() => handleIconClick("mappin")}
            >
              <div className="contact-icon contact-icon-mappin bg-accent/10 p-3 rounded-lg group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                <MapPin className="h-6 w-6 text-accent group-hover:text-secondary transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-text mb-1">Showroom</h3>
                <p className="text-sm text-text/70">
                  123 Design Avenue
                  <br />
                  Downtown Tokyo, Japan
                </p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-accent/5 backdrop-blur-sm rounded-lg p-6 border border-accent/20 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-[border-color,box-shadow] duration-500">
            <h3 className="font-black text-accent mb-4">Opening Hours</h3>
            <div className="space-y-2 text-sm text-text/70">
              <div className="flex justify-between hover:text-text transition-colors">
                <span>Monday - Friday</span>
                <span className="font-medium text-text">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between hover:text-text transition-colors">
                <span>Saturday</span>
                <span className="font-medium text-text">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between hover:text-text transition-colors">
                <span>Sunday</span>
                <span className="font-medium text-secondary">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-50 animate-in slide-in-from-bottom-5 fade-in duration-500">
          <div className="bg-gradient-to-r from-secondary via-accent to-secondary bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite] text-primary px-6 py-4 rounded-lg shadow-2xl shadow-secondary/50 max-w-sm border-2 border-accent/50">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🎉</div>
              <div className="flex-1">
                <p className="font-bold text-sm whitespace-pre-line">{toastMessage}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Secrets Progress Indicator - Only show when at least 1 secret found */}
      {foundSecrets.size > 0 && (
        <div className="fixed bottom-4 left-4 md:bottom-auto md:left-auto md:top-8 md:right-8 z-40 animate-in fade-in slide-in-from-bottom-5 md:slide-in-from-top-5 duration-500 max-w-[calc(100vw-2rem)] md:max-w-none">
          <div className="bg-primary/95 backdrop-blur-md border-2 border-accent/30 rounded-lg px-3 py-2 md:px-4 md:py-3 shadow-xl">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="text-[10px] md:text-xs font-bold text-accent whitespace-nowrap">
                Secrets: {foundSecrets.size}/5
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-500 ${foundSecrets.has(num)
                      ? "bg-secondary scale-125 shadow-lg shadow-secondary/50"
                      : "bg-accent/20"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Promo code reward when all secrets found */}
            {foundSecrets.size === 5 && (
              <div className="mt-2 md:mt-3 pt-2 md:pt-3 border-t border-accent/20 animate-in fade-in slide-in-from-top-2 duration-700">
                <div className="space-y-1.5 md:space-y-2">
                  <div className="flex items-center gap-1.5 md:gap-2 text-xs">
                    <span className="text-xl md:text-2xl">🏆</span>
                    <div>
                      <p className="font-black text-secondary text-[10px] md:text-xs">Congratulations!</p>
                      <p className="text-text/70 text-[8px] md:text-[10px]">You found all secrets!</p>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="bg-secondary/10 border border-secondary/30 rounded px-2 py-1.5">
                    <p className="text-[8px] md:text-[9px] text-text/60 mb-0.5">Your reward:</p>
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-[10px] md:text-xs font-black text-secondary tracking-wider">
                        {PROMO_CODE}
                      </code>
                      <button
                        onClick={copyPromoCode}
                        className="p-1 hover:bg-secondary/20 rounded transition-colors flex-shrink-0"
                        title="Copy promo code"
                      >
                        {copiedPromo ? (
                          <Check className="w-3 h-3 text-secondary" />
                        ) : (
                          <Copy className="w-3 h-3 text-accent" />
                        )}
                      </button>
                    </div>
                    <p className="text-[8px] md:text-[9px] text-secondary/80 mt-0.5">25% OFF your order!</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}