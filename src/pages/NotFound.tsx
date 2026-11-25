import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4 vector-grid">
      <div className="max-w-md w-full rounded-2xl border border-border bg-card p-8 text-center shadow-studio">
        <span className="inline-block font-mono text-xs tracking-wider px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 mb-4">
          ERROR 404
        </span>
        <h1 className="text-3xl font-semibold tracking-tight mb-2">
          Page not found
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          The route{" "}
          <code className="font-mono text-foreground">{location.pathname}</code>{" "}
          does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
