import BlogDetails from '@/components/blog-page-component/BlogDetails';

// Fetch blog data from public folder
async function getBlogData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/blog-data.json`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch blog data');
    }
    
    const data = await res.json();
    return data.blogs || data;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return [];
  }
}

export async function generateStaticParams() {
  const blogs = await getBlogData();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blogs = await getBlogData();
  const blog = blogs.find(b => b.slug === slug);
  
  if (!blog) {
    return {
      title: 'Review Not Found',
      description: 'The review you are looking for does not exist.',
    };
  }

  return {
    title: `${blog.title} | Best Buyers View`,
    description: blog.excerpt || blog.description,
    keywords: blog.tags?.join(', '),
    openGraph: {
      title: blog.title,
      description: blog.excerpt || blog.description,
      images: blog.featuredImage?.url ? [blog.featuredImage.url] : [],
      type: 'article',
      publishedTime: blog.datePublished,
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = params;
  const blogs = await getBlogData();
  const blog = blogs.find(b => b.slug === slug);
  
  return <BlogDetails slug={slug} initialBlog={blog} />;
}