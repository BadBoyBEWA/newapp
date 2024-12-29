import React from 'react';
import Images from '../config/Images';
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
          <div className="blog-post">
            <h4>{selectedBlog.subText}</h4> 
            <p style={{ color: 'black' }}>
              {selectedBlog.text}
            </p>
            <img src={selectedBlog.pics} alt=""  className='blog-pics' style={{ maxWidth: '100%'}} /> {/* Use selectedBlog image */}
            <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
          </div>

          
          <button className="btn">LIFE</button>
          <button className="btn">SPORTS</button>
          <button className='btn'>TECH</button>
          <button className="btn">TRAVEL</button>
<br /><br />
     <div className="comment">
        <div>
       <img src={Images.img10} alt="" width='170' height='170' />
      <h4>Lance Smith</h4>
      <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, <br /> autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam <br />vero culpa sapiente consectetur similique, inventore eos fugit cupiditate <br /> numquam!</p>
      </div>
     </div>
        </section>
      </section>
    </>
  );
}