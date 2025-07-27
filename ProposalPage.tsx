import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles, Star } from "lucide-react";
import { useState } from "react";

const ProposalPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleYesClick = () => {
    setIsClicked(true);
  };
  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/05a7d085-5afc-4aab-a78d-06774e8d35ee.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Romantic overlay */}
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Heart 
            key={i}
            className="absolute text-romantic-red/30 animate-bounce"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${10 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i * 0.5)}s`
            }}
            size={16 + (i * 2)}
          />
        ))}
      </div>

      {/* Elegant celebration effect */}
      {isClicked && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Sparkles explosion */}
          {[...Array(20)].map((_, i) => (
            <Sparkles
              key={`sparkle-${i}`}
              className="absolute text-romantic-gold animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '2s'
              }}
              size={12 + Math.random() * 16}
            />
          ))}
          
          {/* Hearts cascade */}
          {[...Array(15)].map((_, i) => (
            <Heart
              key={`celebration-heart-${i}`}
              className="absolute text-romantic-red animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-20px',
                animationDelay: `${i * 0.2}s`,
                animationDuration: '3s',
                transform: `translateY(${100 + Math.random() * 200}vh)`
              }}
              size={20 + Math.random() * 20}
            />
          ))}
          
          {/* Golden stars */}
          {[...Array(12)].map((_, i) => (
            <Star
              key={`star-${i}`}
              className="absolute text-romantic-gold animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '1.5s'
              }}
              size={16 + Math.random() * 12}
            />
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Minimalist centered content */}
        <div className="flex items-center justify-center min-h-screen">
          <Card className="bg-transparent border-romantic-gold/40 shadow-glow backdrop-blur-lg max-w-md mx-4">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <Heart className="text-romantic-red mx-auto animate-pulse" size={64} />
              </div>
              
              <h1 className="font-serif text-4xl font-bold text-card-foreground mb-8 leading-tight">
                Abrar
              </h1>
              
              <h2 className="font-serif text-2xl text-card-foreground mb-8 leading-relaxed">
                Will you stay with me forever?
              </h2>

              <div className="mb-12 p-6 bg-romantic-red/5 rounded-lg border border-romantic-gold/20">
                <p className="font-serif text-lg text-card-foreground/90 italic leading-relaxed text-center">
                  "Don't leave now that you're here—<br />
                  Stay. So the world may become like itself again:<br />
                  so the sky may by the sky,<br />
                  the road a road,<br />
                  and the glass of wine not a mirror, just a glass of wine."
                </p>
              </div>

              <Button 
                variant="romantic" 
                size="xl" 
                className="font-serif text-lg w-full transition-all duration-300 hover:scale-105"
                onClick={handleYesClick}
              >
                Yes, Forever ✨
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProposalPage;