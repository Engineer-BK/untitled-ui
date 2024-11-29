import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Comp9 = () => {
  const posts = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      image:
        "https://thumbs.dreamstime.com/b/abstract-crystal-background-color-refractions-41844637.jpg",
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      image: "https://media.sciencephoto.com/f0/08/41/30/f0084130-800px-wm.jpg",
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "19 Jan 2024",
      image:
        "https://media.istockphoto.com/id/1317706831/photo/api-application-programming-interface-software-development-tool-business-modern-technology.jpg?s=612x612&w=0&k=20&c=V4hdG0NiqKhbk4VFwFktNs6bhq8yXo_Tqd__8vKZqdk=",
    },
  ];

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Latest Blog Posts</h2>
        <a href="#view-all" className="btn btn-primary">
          View all posts
        </a>
      </div>
      <p className="text-secondary">
        Tools and strategies modern teams need to help their companies grow.
      </p>
      <div className="row">
        {posts.map((post, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img
                src={post.image}
                alt={post.category}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="text-primary fw-bold">{post.category}</p>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <div className="d-flex align-items-center">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    alt={post.author}
                    className="rounded-circle me-2"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div>
                    <p className="mb-0 fw-bold">{post.author}</p>
                    <p className="mb-0 text-muted">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comp9;
