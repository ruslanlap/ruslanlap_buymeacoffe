import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import firefoxIcon from "/src/img/firefox.png";

const Stars = () => {
  const { t } = useLanguage();
  const [filledStars, setFilledStars] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [hoverStar, setHoverStar] = useState(null);
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);
  const totalStars = 5;

  // Animation effect for continuous looping of star filling
  useEffect(() => {
    let animationInterval;

    const animateStars = () => {
      setFilledStars(0); // Reset stars
      setAnimationComplete(false);

      let currentStar = 0;

      const fillNextStar = () => {
        if (currentStar < totalStars) {
          setFilledStars(currentStar + 1);
          currentStar++;
          setTimeout(fillNextStar, 300); // 300ms between each star
        } else {
          setAnimationComplete(true);
          // After filling all stars, wait a bit then restart
          setTimeout(() => {
            setFilledStars(0);
            setAnimationComplete(false);
            // Set initial animation done after first complete cycle
            if (!initialAnimationDone) {
              setInitialAnimationDone(true);
            }
            // Restart the animation
            animateStars();
          }, 1000); // 1-second delay before restarting
        }
      };

      fillNextStar();
    };

    // Start the star-filling animation loop
    animateStars();

    // Clean up if component unmounts
    return () => {
      if (animationInterval) {
        clearInterval(animationInterval);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  const handleReviewClick = () => {
    window.open(
      "https://addons.mozilla.org/en-US/firefox/addon/svg-extractor-pro/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search",
      "_blank"
    );
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Improved heading with better typography */}
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight mb-8 
          relative after:content-[''] after:block after:w-20 after:h-1 after:bg-accent 
          after:mx-auto after:mt-4 animate-fade-in-slow"
        >
          {t("reviewsTitle")}
        </h2>

        <div
          className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow 
          transform hover:-translate-y-1 duration-300 animate-fade-in-slow"
        >
          {/* Firefox Icon with non-looping fade-in animation */}
          <div className="flex justify-center mb-8">
            <img
              src={firefoxIcon}
              alt="Firefox Icon"
              className="w-14 h-14 object-contain rounded-full bg-purple-500/10 p-2 shadow-md 
                animate-fade-in-slow"
            />
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            {[...Array(totalStars)].map((_, i) => (
              <div key={i} className="relative">
                {/* Animated glowing effect for the last filled star */}
                <Star
                  className={`w-9 h-9 absolute transition-all duration-300 ease-out 
                    ${i === filledStars - 1 && !hoverStar ? "animate-glow" : "opacity-0"}`}
                  fill="#FACC15"
                  color="#FACC15"
                />
                <Star
                  onMouseEnter={() => animationComplete && setHoverStar(i + 1)}
                  onMouseLeave={() => setHoverStar(null)}
                  className={`w-9 h-9 transition-all duration-300 ease-out transform 
                    ${i < filledStars || i < hoverStar
                      ? "text-yellow-400 fill-yellow-400 scale-110"
                      : "text-gray-300 scale-100 hover:scale-105"
                    } 
                    ${animationComplete && i < filledStars
                      ? "hover:text-yellow-500 hover:fill-yellow-500 cursor-pointer"
                      : ""
                    }
                    ${i === filledStars - 1 && !hoverStar ? "animate-pulse-slow" : ""}`}
                />
              </div>
            ))}
          </div>

          {/* Improved paragraph typography with better line height and letter spacing */}
          <p
            className={`text-lg leading-relaxed mb-8 text-muted-foreground max-w-2xl mx-auto font-medium
            transition-opacity duration-700 
            ${initialAnimationDone ? "opacity-100" : "opacity-0"} animate-fade-in-slow`}
          >
            {t("reviewsDescription")}
          </p>

          {/* Improved button typography */}
          <button
            onClick={handleReviewClick}
            className={`inline-flex items-center gap-2 bg-accent hover:bg-accent/90 
              px-8 py-3 rounded-lg font-semibold tracking-wide text-base
              transition-all duration-500 transform hover:scale-105 
              ${initialAnimationDone
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
              } animate-fade-in-slow`}
          >
            {t("leaveReview")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stars;
