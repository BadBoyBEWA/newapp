// import React, { useState } from 'react';
// import HomeBlog from '../components/HomeBlog';
// import Images from '../config/Images';
// import '../App.css';
// import { Link } from 'react-router-dom';

// export default function Blogg() {
//   const blogs = [
//     {
//         id: 1,
//       pics: Images.img14,
//       subText: "5 Tips on Shopping with Madam Boutique",
//       date: "November 29, 2024",
//     },
//     {
//         id: 2,
//       pics: Images.img15,
//       subText: "Trends in casual accessories for women",
//       date: "November 30, 2024",
//     },
//     {
//         id: 3,
//       pics: Images.img16,
//       subText: "Dressy outfits for the office: from casual to formal",
//       date: "December 5, 2024",
//     },
//     {
//         id: 4,
//       pics: Images.img17,
//       subText: "How to style casual shoes with a dress",
//       date: "December 10, 2024",
//     },
//     {
//         id: 5,
//       pics: Images.img18,
//       subText: "Top winter accessories for 2024",
//       date: "December 15, 2024",
//     },
//     {
//         id: 6,
//       pics: Images.img19,
//       subText: "Evening wear tips for the holiday season",
//       date: "December 20, 2024",
//     },
//     {
//         id: 7,
//       pics: Images.img20,
//       subText: "The art of layering in the fall",
//       date: "December 25, 2024",
//     },
//     {
//         id: 8,
//       pics: Images.img21,
//       subText: "Minimalist jewelry trends in 2024",
//       date: "December 30, 2024",
//     },
//     {
//         id: 9,
//       pics: Images.img22,
//       subText: "Sustainable fashion: A beginner's guide",
//       date: "January 5, 2025",
//     },
//   ];

// //   // State to manage current page (0 or 1)
// //   const [currentPage, setCurrentPage] = useState(0);

// //   // Split blogs into pages
// //   const blogsPerPage = 6;
// //   const paginatedBlogs = [
// //     blogs.slice(0, blogsPerPage),
// //     blogs.slice(blogsPerPage),
// //   ];
// // const blogsPerPage = 6;
// // const paginatedBlogs = blogs.slice(0, blogsPerPage); // Initial page

// // const [currentPage, setCurrentPage] = useState(0);

// // const handlePageChange = (newPage) => {
// //   setCurrentPage(newPage);
// // };

// const blogsPerPage = 6;
//   const [currentPage, setCurrentPage] = useState(0);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const getPaginatedBlogs = () => {
//     const startIndex = currentPage * blogsPerPage;
//     const endIndex = startIndex + blogsPerPage;
//     return blogs.slice(startIndex, endIndex);
//   };

//   const paginatedBlogs = getPaginatedBlogs();

//   return (
//     <div>
//       <div className="titleBar">
//         <div className="text">
//           <h1>About Us</h1>
//           <p>
//             <b>Home</b> Blog
//           </p>
//         </div>
//       </div>
//       <div className="blogContainer">
//         <div className="blogWrapper">
//           <div className="blogCardrapper">
//             {paginatedBlogs.map((item, index) => (
//               <Link key={index} to={`/blog/${item.id}`}> {/* Link to single blog with ID */}
//                 <HomeBlog pics={item.pics} subText={item.subText} date={item.date} />
//               </Link>
//             ))}
//           </div>
//         </div>
//         <div className="pagination">
//           <button
//             disabled={currentPage === 0}
//             onClick={() => handlePageChange(0)}
//           >
//             Previous
//           </button>
//           <button
//             disabled={currentPage === Math.ceil(blogs.length / blogsPerPage) - 1}
//             onClick={() => handlePageChange(currentPage + 1)}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>

//     // export { blogs };   





// //     <div>
// //       <div className="titleBar">
// //         <div className="text">
// //           <h1>About Us</h1>
// //           <p>
// //             <b>Home</b> Blog
// //           </p>
// //         </div>
// //       </div>

// //       <div className="blogContainer">
// //         <div className="blogWrapper">
// //           <div className="blogCardrapper">
// //             {paginatedBlogs[currentPage].map((item, index) => (
// //               <HomeBlog key={index} pics={item.pics} subText={item.subText} date={item.date} />
// //             ))}
// //           </div>
// //         </div>

// //         <div className="pagination">
// //           <button
// //             disabled={currentPage === 0}
// //             onClick={() => setCurrentPage(0)}
// //           >
// //             Previous
// //           </button>
// //           <button
// //             disabled={currentPage === 1}
// //             onClick={() => setCurrentPage(1)}
// //           >
// //             Next
// //           </button>
// //         </div>
// //       </div>
// //     </div>
//   );
// }


import React, { useState } from 'react';
import HomeBlog from '../components/HomeBlog';
import Images from '../config/Images';
import '../App.css';
import { Link } from 'react-router-dom';

export const blogs = [
  {
    id: 1,
    pics: Images.img14,
    subText: "5 Tips on Shopping with Madam Boutique",
    date: "November 29, 2024",
  },
  {
    id: 2,
    pics: Images.img15,
    subText: "Trends in casual accessories for women",
    date: "November 30, 2024",
  },
  {
    id: 3,
    pics: Images.img16,
    subText: "Dressy outfits for the office: from casual to formal",
    date: "December 5, 2024",
  },
  {
    id: 4,
    pics: Images.img17,
    subText: "How to style casual shoes with a dress",
    date: "December 10, 2024",
  },
  {
    id: 5,
    pics: Images.img18,
    subText: "Top winter accessories for 2024",
    date: "December 15, 2024",
  },
  {
    id: 6,
    pics: Images.img19,
    subText: "Evening wear tips for the holiday season",
    date: "December 20, 2024",
  },
  {
    id: 7,
    pics: Images.img20,
    subText: "The art of layering in the fall",
    date: "December 25, 2024",
  },
  {
    id: 8,
    pics: Images.img21,
    subText: "Minimalist jewelry trends in 2024",
    date: "December 30, 2024",
  },
  {
    id: 9,
    pics: Images.img22,
    subText: "Sustainable fashion: A beginner's guide",
    date: "January 5, 2025",
  },
];

export default function Blogg() {
  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const getPaginatedBlogs = () => {
    const startIndex = currentPage * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    return blogs.slice(startIndex, endIndex);
  };

  const paginatedBlogs = getPaginatedBlogs();

  return (
    <div>
      <div className="titleBar">
        <div className="text">
          <h1>About Us</h1>
          <p>
            <b>Home</b> Blog
          </p>
        </div>
      </div>
      <div className="blogContainer">
        <div className="blogWrapper">
          <div className="blogCardrapper">
            {paginatedBlogs.map((item, index) => (
              <Link key={index} to={`/blog/${item.id}`}> {/* Link to single blog with ID */}
                <HomeBlog pics={item.pics} subText={item.subText} date={item.date} />
              </Link>
            ))}
          </div>
        </div>
        <div className="pagination">
          <button
            disabled={currentPage === 0}
            onClick={() => handlePageChange(0)}
          >
            Previous
          </button>
          <button
            disabled={currentPage === Math.ceil(blogs.length / blogsPerPage) - 1}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}