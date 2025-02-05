import React from "react";

import blogsData from "../../data/blogs.json";

const Blog = () => {
  return (
    <>
      <section className="section_container blog_container">
        <h2 className="section_header">Latest From Blog</h2>
        <p className="section_subheader mb-10 ">
          Explore exclusive fashion collections, style guides, and seasonal
          trends from our experts.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogsData.map((blog, index) => (
            <div
              key={index}
              className="blog_card cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <img src={blog.imageUrl} alt="blog image" />
              <div className="blog_card_content">
                <h6>{blog.subtitle}</h6>
                <h4>{blog.title}</h4>
                <p>{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
