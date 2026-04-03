import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  showValue?: boolean;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = 14,
  showValue = false,
}: StarRatingProps) {
  const stars = Array.from({ length: maxRating }, (_, i) => {
    const filled = i + 1 <= Math.floor(rating);
    const half = !filled && i < rating && rating - i >= 0.5;
    return { filled, half };
  });

  return (
    <span className="inline-flex items-center gap-1">
      <span className="inline-flex items-center gap-0.5">
        {stars.map(({ filled, half }, i) => (
          <span key={i} className="relative inline-flex" style={{ width: size, height: size }}>
            {/* Empty star base */}
            <Star
              size={size}
              className="text-zinc-700"
              fill="currentColor"
              strokeWidth={0}
            />
            {/* Filled overlay */}
            {(filled || half) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: half ? "50%" : "100%" }}
              >
                <Star
                  size={size}
                  className="text-gold"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </span>
            )}
          </span>
        ))}
      </span>
      {showValue && (
        <span className="text-sm text-zinc-400 ml-1">{rating.toFixed(1)}</span>
      )}
    </span>
  );
}
