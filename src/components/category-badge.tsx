interface CategoryBadgeProps {
  category: string;
}

const categoryConfig: Record<string, { label: string; className: string }> = {
  wealth: {
    label: "Wealth",
    className: "bg-yellow-900/40 text-yellow-300 border border-yellow-700/40",
  },
  health: {
    label: "Health",
    className: "bg-green-900/40 text-green-300 border border-green-700/40",
  },
  love: {
    label: "Love",
    className: "bg-pink-900/40 text-pink-300 border border-pink-700/40",
  },
  protection: {
    label: "Protection",
    className: "bg-blue-900/40 text-blue-300 border border-blue-700/40",
  },
  success: {
    label: "Success",
    className: "bg-purple-900/40 text-purple-300 border border-purple-700/40",
  },
  general: {
    label: "General",
    className: "bg-zinc-800/60 text-zinc-300 border border-zinc-700/40",
  },
};

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const config = categoryConfig[category.toLowerCase()] ?? categoryConfig.general;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide uppercase ${config.className}`}
    >
      {config.label}
    </span>
  );
}
