"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useMemo, useTransition } from "react";
import Breadcrumbs from "@/ui/Breadcrumbs";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronRight, Sparkles } from "lucide-react";

export default function BlogPage({ initialBlogs = [] }) {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get category from URL query parameters
  const activeCategory = searchParams.get('category') || 'all';

  // Fetch blog data from public folder
  useEffect(() => {
    const fetchBlogs = async () => {
      // If initialBlogs provided, use them
      if (initialBlogs.length > 0) {
        setBlogs(initialBlogs);
        setLoading(false);
        startTransition(() => {
          sessionStorage.setItem('blogs-cache', JSON.stringify(initialBlogs));
          sessionStorage.setItem('blogs-timestamp', Date.now().toString());
        });
        return;
      }

      // Check cache first
      const cached = sessionStorage.getItem('blogs-cache');
      const timestamp = sessionStorage.getItem('blogs-timestamp');
      const cacheAge = timestamp ? Date.now() - parseInt(timestamp) : Infinity;
      
      if (cached && cacheAge < 3600000) { // 1 hour cache
        setBlogs(JSON.parse(cached));
        setLoading(false);
        return;
      }

      // Fetch from public folder
      try {
        const response = await fetch('/blog-data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        const blogData = data.blogs || data;
        
        setBlogs(blogData);
        startTransition(() => {
          sessionStorage.setItem('blogs-cache', JSON.stringify(blogData));
          sessionStorage.setItem('blogs-timestamp', Date.now().toString());
        });
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [initialBlogs]);

  // Filter blogs based on category from URL
  const { featuredBlog, regularBlogs } = useMemo(() => {
    const filtered = blogs.filter(blog => {
      const matchesCategory = activeCategory === 'all' || 
        blog.categories?.some(cat => 
          (typeof cat === 'string' ? cat : cat.name).toLowerCase() === activeCategory.toLowerCase()
        );
      
      const matchesSearch = searchTerm === '' ||
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description?.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });

    const featured = filtered.find(blog => blog.isFeatured) || filtered[0];
    const regular = filtered.filter(blog => blog._id !== featured?._id);

    return { featuredBlog: featured, regularBlogs: regular };
  }, [blogs, activeCategory, searchTerm]);

  // Update URL when category changes
  const handleCategoryChange = (category) => {
    if (category === 'all') {
      router.push('/blog');
    } else {
      router.push(`/blog?category=${category}`);
    }
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Memoize expensive computations
  const recentPosts = useMemo(() => 
    blogs
      .filter(blog => blog._id !== featuredBlog?._id)
      .sort((a, b) => new Date(b.datePublished || b.createdAt) - new Date(a.datePublished || a.createdAt))
      .slice(0, 5),
    [blogs, featuredBlog]
  );

  const categories = useMemo(() => ['all', ...new Set(
    blogs.flatMap(blog => 
      blog.categories?.map(cat => 
        typeof cat === 'string' ? cat.toLowerCase() : cat.name.toLowerCase()
      ) || []
    )
  )], [blogs]);

  if (loading) {
    return <BlogPageSkeleton />;
  }

  if (!blogs.length) {
    return <EmptyState />;
  }

  return (
    <>
    <div className=" bg-white text-gray-900">
      {/* Hero Section with Image */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] py-12 sm:py-16 md:py-20 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/BlogImg/e-book.jpg')] bg-cover bg-center blur-sm scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 border border-white/30 text-xs sm:text-sm shadow-lg">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">Insights & Articles</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-white">Our</span>
              <div className="relative inline-block ml-2 sm:ml-3">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Blog
                </span>
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              </div>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 sm:mb-10 max-w-2xl leading-relaxed font-light">
              Explore expert insights, tutorials, and the latest trends in technology, web development, eCommerce, and digital solutions.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/80 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{blogs.length}+ Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span>{categories.length - 1}+ Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Updated Weekly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white text-sm font-medium mb-2">Scroll to explore</div>
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
        </div>
      </section>
    <div className="min-h-screen bg-white">
      {/* Category Filter */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">


          <div className="flex flex-wrap gap-2 justify-center">
            {categories.slice(0, 8).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-3 sm:px-4 py-2 rounded-xl font-medium transition-all duration-300 capitalize text-sm sm:text-base ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-200 hover:text-blue-600'
                }`}
              >
                {category === 'all' ? 'All Reviews' : category}
              </button>
            ))}
            {categories.length > 8 && (
              <span className="px-3 py-2 text-gray-500 text-sm">
                +{categories.length - 8} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Main Content Column */}
          <div className="lg:w-3/4">
            {/* Featured Blog */}
            {featuredBlog && activeCategory === 'all' && !searchTerm && (
              <FeaturedSection blog={featuredBlog} />
            )}

            {/* Blog Grid */}
            {regularBlogs.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8">
                  {(showAll ? regularBlogs : regularBlogs.slice(0, 4)).map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                  ))}
                </div>
                
                {/* See More / Show Less Button */}
                {regularBlogs.length > 4 && (
                  <div className="flex justify-center mb-12 sm:mb-16">
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <span className="text-base sm:text-lg">
                        {showAll ? 'Show Less' : `See More Articles (${regularBlogs.length - 4} more)`}
                      </span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 sm:py-16 bg-white rounded-2xl border border-gray-200">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No Reviews Found</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  {searchTerm 
                    ? `No reviews match "${searchTerm}". Try different keywords.`
                    : `No reviews in ${activeCategory} category yet.`
                  }
                </p>
                {(searchTerm || activeCategory !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      handleCategoryChange('all');
                    }}
                    className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
                  >
                    Show All Reviews
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="lg:w-1/4">
            <Sidebar 
              recentPosts={recentPosts} 
              categories={categories} 
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

// Sidebar Component
function Sidebar({ recentPosts, categories, activeCategory, onCategoryChange }) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Recent Posts */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 sm:pb-3 border-b border-gray-200">
          Recent Posts
        </h3>
        <div className="space-y-3 sm:space-y-4">
          {recentPosts.map((post) => (
            <Link 
              key={post._id} 
              href={`/blog/${post.slug}`}
              className="group flex items-start gap-2 sm:gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-gray-100">
                {post.featuredImage?.url ? (
                  <Image
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt || post.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center">
                      <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9m0 0v3m0-3a2 2 0 012-2h2a2 2 0 012 2m-6 5v6m4-3H9" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 leading-tight mb-1">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {new Date(post.datePublished || post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 sm:pb-3 border-b border-gray-200">
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.filter(cat => cat !== 'all').slice(0, 10).map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 capitalize ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// FeaturedSection Component
function FeaturedSection({ blog }) {
  const readingTime = Math.ceil((blog.content?.length || 0) / 5);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-8 sm:mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Image Column */}
        <div className="lg:col-span-1">
          <div className="relative h-48 sm:h-64 lg:h-80 min-h-[200px] sm:min-h-[300px]">
            {blog.featuredImage?.url ? (
              <Image
                src={blog.featuredImage.url}
                alt={blog.featuredImage.alt || blog.title}
                width={320}
                height={240}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9m0 0v3m0-3a2 2 0 012-2h2a2 2 0 012 2m-6 5v6m4-3H9" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium text-sm sm:text-base">Featured Review</p>
                </div>
              </div>
            )}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-1 sm:gap-2">
              <span className="px-2 sm:px-3 py-1 bg-red-500 text-white text-xs sm:text-sm font-semibold rounded-full">
                Featured
              </span>
              {blog.categories?.slice(0, 1).map((category, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-white/90 text-gray-700 text-xs sm:text-sm font-semibold rounded-full border border-gray-200"
                >
                  {typeof category === 'string' ? category : category.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Content Column */}
        <div className="lg:col-span-2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500">
            <span>{new Date(blog.datePublished || blog.createdAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {blog.title}
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
            {blog.excerpt || blog.description}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image 
                src="/A2ITLogo.png"
                alt="A2IT Ltd"
                width={24}
                height={24}
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full object-contain border-2 border-white"
              />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-gray-900">
                  A2IT Ltd
                </p>
                <p className="text-xs text-gray-500">Expert Review Team</p>
              </div>
            </div>
            
            <Link
              href={`/blog/${blog.slug}`}
              prefetch={true}
              className="group bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow hover:shadow-md flex items-center gap-2 justify-center text-sm sm:text-base"
            >
              Read Full Analysis
              <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Blog Card Component
const BlogCard = React.memo(({ blog }) => {
  const getCategoryName = (category) => {
    return typeof category === 'string' ? category : category.name || category;
  };

  const readingTime = Math.ceil((blog.content?.length || 0) / 5);

  return (
    <Link href={`/blog/${blog.slug}`} prefetch={true} className="block h-full">
      <div className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
        {blog.featuredImage?.url ? (
          <Image
            src={blog.featuredImage.url}
            alt={blog.featuredImage.alt || blog.title}
            width={320}
            height={240}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9m0 0v3m0-3a2 2 0 012-2h2a2 2 0 012 2m-6 5v6m4-3H9" />
                </svg>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm">No Image</p>
            </div>
          </div>
        )}
        
        {/* Categories Overlay */}
        {blog.categories && blog.categories.length > 0 && (
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap gap-1 sm:gap-2">
            {blog.categories.slice(0, 2).map((category, index) => (
              <span
                key={index}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white text-gray-700 text-xs font-semibold rounded-md sm:rounded-lg border border-gray-200"
              >
                {getCategoryName(category)}
              </span>
            ))}
          </div>
        )}

        {/* Featured Badge */}
        {blog.isFeatured && (
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
          <div className="flex items-center gap-2 sm:gap-4">
            <span>{new Date(blog.datePublished || blog.createdAt).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric' 
            })}</span>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4 text-sm sm:text-base flex-1">
          {blog.excerpt || blog.description}
        </p>

        {/* Author & CTA */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image 
              src="/A2ITLogo.png"
              alt="A2IT Ltd"
              width={32}
              height={32}
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-contain border-2 border-white"
            />
            <div>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">
                A2IT Ltd
              </p>
              <p className="text-xs text-gray-500">Review Team</p>
            </div>
          </div>

          <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300 flex items-center gap-1 text-xs sm:text-sm">
            Read More
            <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
});

BlogCard.displayName = 'BlogCard';

// Skeleton Loading
function BlogPageSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-40 sm:h-48 bg-gray-200 rounded-xl sm:rounded-2xl mb-3 sm:mb-4"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-3/4 mb-3 sm:mb-4"></div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full"></div>
                <div className="h-2.5 sm:h-3 bg-gray-200 rounded w-16 sm:w-20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Empty State
function EmptyState() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-md mx-auto">
        <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">No Reviews Yet</h1>
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          We're working on creating amazing product reviews and buying guides for you. Check back soon!
        </p>
      </div>
    </div>
  );
}