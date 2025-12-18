import BlogDetails from '@/components/blog-page-component/BlogDetails';
import fs from 'fs';
import path from 'path';

// Fetch blog data from public folder
async function getBlogData() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'blog-data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
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
      title: 'Blog Not Found ',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: `${blog.title}  Blog`,
    description: blog.excerpt || blog.description,
    keywords: blog.tags?.join(', ') || blog.categories?.map(c => c.name).join(', '),
    authors: [{ name: blog.author || 'A2IT LLC' }],
    alternates: {
      canonical: `https://a2itllc.com/blog/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt || blog.description,
      url: `https://a2itllc.com/blog/${slug}`,
      siteName: 'A2IT LLC',
      images: blog.featuredImage?.url ? [
        {
          url: blog.featuredImage.url,
          width: 1200,
          height: 630,
          alt: blog.featuredImage.alt || blog.title,
        }
      ] : [],
      type: 'article',
      publishedTime: blog.datePublished,
      modifiedTime: blog.dateModified || blog.datePublished,
      authors: [blog.author || 'A2IT LLC'],
      section: blog.categories?.[0]?.name || 'Technology',
      tags: blog.tags || blog.categories?.map(c => c.name),
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt || blog.description,
      images: blog.featuredImage?.url ? [blog.featuredImage.url] : [],
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = params;
  const blogs = await getBlogData();
  const blog = blogs.find(b => b.slug === slug);
  
  return (
    <>
      <BlogDetails slug={slug} initialBlog={blog} />
      
      {/* 🔹 Schema Markup for Blog Article */}
      {blog && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: blog.title,
              description: blog.excerpt || blog.description,
              image: blog.featuredImage?.url || "https://a2itllc.com/logo.png",
              datePublished: blog.datePublished,
              dateModified: blog.dateModified || blog.datePublished,
              author: {
                "@type": "Person",
                name: blog.author || "A2IT LLC",
              },
              publisher: {
                "@type": "Organization",
                name: "A2IT LLC",
                url: "https://a2itllc.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://a2itllc.com/logo.png",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://a2itllc.com/blog/${slug}`,
              },
              keywords: blog.tags?.join(', ') || blog.categories?.map(c => c.name).join(', '),
            }),
          }}
        />
      )}
    </>
  );
}