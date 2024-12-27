// import React from 'react'
// import Images from '../config/Images';
// import blogs from './Blogg';
// import { useParams } from 'react-router-dom';
// // import HomeBlog from './components/HomeBlog';


// export default function BlogSingle() {
//   const { id } = useParams(); // Get blog ID from route parameter
//   const selectedBlog = blogs.find((blog) => blog.id === parseInt(id)); // Find matching blog object

//   if (!selectedBlog) {
//     return <div>Blog not found!</div>; // Handle missing blog
//   }

//   return (
//     <>
//     <section className='titleBar'>
//       <div className='text'>
//       <h1>Blog Single</h1>
//         <p><b>Home</b>Prdouct<p>Blog Single</p></p>  
//         </div>
//      </section>

//      <section className="tps-shpng">
//         <section className="eight-ps">
//           <div>
//             <h4>{selectedBlog.subText}</h4> {/* Display blog title from selectedBlog */}
//             <p style={{ color: 'black' }}>
//               {/* Your blog content goes here */}
//             </p>
//             <img src={Images.img14} alt="" width="800" height="600" />
//             <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
//         </div>
//         <div>
//             <input type="text" placeholder='Type a keyword and hit enter' />
//              <h5>Cartegories</h5>
//             <ul>
//                 <li> <p>Bags</p>(12)</li>
//                 <br />
//                 <li> <p>Shoes</p>(22)</li>
//                 <br />
//                 <li> <p>Dress</p>(37)</li>
//                 <br />
//                 <li> <p>Accessories</p>(42)</li>
//                 <br />
//                 <li> <p>Makeup</p>(14)</li>
//                 <br />
//                 <li> <p>Beauty</p>(140)</li>
//             </ul>
//         </div>
//         </section>
//       </section>


//     {/* <section className='tps-shpng'>
//     <section className="eight-ps">
//         <div>
//             <h4>8 Tips for Shopping</h4>
//             <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque <br/> distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo <br />accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque <br /> quia officia optio deserunt molestiae voluptates soluta architecto tempora</p>
//             <img src={Images.img14} alt=""  width='800' height='600'/>
//             <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
//         </div>
//         <div>
//             <input type="text" placeholder='Type a keyword and hit enter' />
//              <h5>Cartegories</h5>
//             <ul>
//                 <li> <p>Bags</p>(12)</li>
//                 <br />
//                 <li> <p>Shoes</p>(22)</li>
//                 <br />
//                 <li> <p>Dress</p>(37)</li>
//                 <br />
//                 <li> <p>Accessories</p>(42)</li>
//                 <br />
//                 <li> <p>Makeup</p>(14)</li>
//                 <br />
//                 <li> <p>Beauty</p>(140)</li>
//             </ul>
//         </div>
//     </section>    
//     </section> */}
//     </>
//   )
// }


import React from 'react';
// import Images from '../config/Images';
import { blogs } from './Blogg'; // Import blogs array
import { useParams } from 'react-router-dom';

export default function BlogSingle() {
  const { id } = useParams(); // Get blog ID from route parameter
  const selectedBlog = blogs.find((blog) => blog.id === parseInt(id)); // Find matching blog object

  if (!selectedBlog) {
    return <div>Blog not found!</div>; // Handle missing blog
  }

  return (
    <>
      <section className='titleBar'>
        <div className='text'>
          <h1>Blog Single</h1>
          <p><b>Home</b>Prdouct<p>Blog Single</p></p>  
        </div>
      </section>

      <section className="tps-shpng">
        <section className="eight-ps">
          <div>
            <h4>{selectedBlog.subText}</h4> {/* Display blog title from selectedBlog */}
            <p style={{ color: 'black' }}>
              {/* Your blog content goes here */}
            </p>
            <img src={selectedBlog.pics} alt="" width="800" height="600" /> {/* Use selectedBlog image */}
            <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
          </div>
          <div>
            <input type="text" placeholder='Type a keyword and hit enter' />
            <h5>Categories</h5>
            <ul>
              <li> <p>Bags</p>(12)</li>
              <br />
              <li> <p>Shoes</p>(22)</li>
              <br />
              <li> <p>Dress</p>(37)</li>
              <br />
              <li> <p>Accessories</p>(42)</li>
              <br />
              <li> <p>Makeup</p>(14)</li>
              <br />
              <li> <p>Beauty</p>(140)</li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
}