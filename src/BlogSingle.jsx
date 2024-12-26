import React from 'react'
import Images from './config/Images'
export default function BlogSingle() {
  return (
    <>
    <section className='titleBar'>
      <div className='text'>
      <h1>Blog Single</h1>
        <p><b>Home</b>Prdouct<p>Blog Single</p></p>  
        </div>
     </section>


    <section className='tps-shpng'>
    <section className="eight-ps">
        <div>
            <h4>8 Tips for Shopping</h4>
            <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque <br/> distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo <br />accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque <br /> quia officia optio deserunt molestiae voluptates soluta architecto tempora</p>
            <img src={Images.img14} alt=""  width='800' height='600'/>
            <p style={{color:'black'}}>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus <br /> nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt <br /> rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor <br />minima esse vero ut ea, repudiandae suscipit!</p>
        </div>
        <div>
            <h4># Creative Wordpress Themes</h4>
            <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque <br/> distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo <br />accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque <br /> quia officia optio deserunt molestiae voluptates soluta architecto tempora</p>
            <img src={Images.img15} alt=""  width='800' height='600'/>
            <p style={{color:'black'}}>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus <br /> nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt <br /> rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor <br />minima esse vero ut ea, repudiandae suscipit!</p>
            <p style={{color:'black'}}>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! <br /> Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero <br />voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, <br />quia laboriosam harum excepturi ea.</p>
            <p style={{color:"black"}}>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores <br /> voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo <br />itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. <br /> Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>

          <button className="btn">LIFE</button>
          <button className="btn">SPORTS</button>
          <button className='btn'>TECH</button>
          <button className="btn">TRAVEL</button>
</div>
<br /><br />
     <div className="comment">
      <img src={Images.img10} alt="" width='170' height='170' />
      <div>
      <h4>Lance Smith</h4>
      <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, <br /> autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam <br />vero culpa sapiente consectetur similique, inventore eos fugit cupiditate <br /> numquam!</p>
      </div>
     </div>
</section>

        <div className='reduce'>
            <input type="text" placeholder='Type a keyword and hit enter' />
             <h5>Cartegories</h5>
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



             <div>
            <h5>Recent Blog</h5> 
            <ul className='smlblgcrds'>
            <img src={Images.img14} alt="" width= '70' height= '70'/>
            <p style={{color:'black' }}>5 Tips on <br /> shopping with <br /> Madam Boutique</p>
            </ul>
            <br />
            <ul className='smlblgcrds'>
            <img src={Images.img15} alt="" width= '70' height= '70'/>
            <p style={{color:'black' }}>Trends inn <br /> casual accesories <br /> for women</p>
            </ul>
             <br />
            <ul className='smlblgcrds'>
            <img src={Images.img16} alt="" width= '70' height= '70'/>
            <p style={{color:'black' }}>Dressy Outfits on <br /> from the office<br />fron casual to formal
            </p>
            </ul>
        </div>

    








        </div>
    
    </section>
    </>
  )
}
