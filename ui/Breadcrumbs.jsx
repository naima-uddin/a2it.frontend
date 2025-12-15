"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Generate breadcrumb segments from pathname
  const segments = pathname.split('/').filter(Boolean);
  
  // Don't show breadcrumbs on home page
  if (segments.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm mb-4" aria-label="Breadcrumb">
      {/* Home link */}
      <Link 
        href="/" 
        className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {segments.map((segment, index) => {
        const path = `/${segments.slice(0, index + 1).join('/')}`;
        const isLast = index === segments.length - 1;
        
        // Format segment name (capitalize and replace hyphens)
        const label = segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return (
          <div key={path} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {isLast ? (
              <span className="text-gray-900 font-medium">{label}</span>
            ) : (
              <Link 
                href={path}
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
