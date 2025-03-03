import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
// Fix the image import
import firefoxIcon from "/src/img/firefox.png"; // Changed from destructuring to default import

const Stars = () => {
  const { t } = useLanguage();
  
  const handleReviewClick = () => {
    window.open('https://addons.mozilla.org/firefox/addon/your-addon-id/reviews/', '_blank');
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {t('reviewsTitle')}
        </h2>
        
        <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          {/* Firefox Icon at the top of the card */}
          <div className="flex justify-center mb-6">
            <img
              src={firefoxIcon}
              alt="Firefox Icon"
              className="w-12 h-12 object-contain rounded-full bg-purple-500/10 p-2 shadow-md"
            />
          </div>

          <div className="flex justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-8 h-8 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          
          <p className="text-lg mb-6 text-muted-foreground">
            {t('reviewsDescription')}
          </p>
          
          <button
            onClick={handleReviewClick}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            {t('leaveReview')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stars;