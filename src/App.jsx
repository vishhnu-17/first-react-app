// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="h">
        <div className="explore">
            explor <p className="er">er</p>
        </div>
        <div className="div2">
            <p className="right-div">Hotels</p>
            <p className="right-div">Bike Rentals</p>
            <p className="right-div">Restuarents</p>
        </div>
    </div>
    <div className="container">
        <div className="div3">
            <p id="text">WELCOME TO EXPLORER</p>
            <p className="text1">Your Adventure Travel Expert in the <b>SOUTH</b></p>
            <select name="" id="" className="drop-down" placeholder="choose">
                <option  style={{color: 'green'}}>choose</option>
                <option value="chennai">chennai</option>
                <option  value="mumbaic">mumbai</option>
                <option  value="delhi">delhi</option>
            </select>
            <br/>
            <button style={{marginTop: '50px'}}>EXPLORE</button>

        </div>

        <div className="image">
            <img src="resources/main.webp" alt="" />
        </div>
    </div>
    <div className="container-3">
        <p style={{fontSize: '40px', fontWeight:'600',margin: "50px 0px 0px 90px"}}>Destinations</p>
        <p>Just for you. Because you and your bike are special to us!</p>
    </div>
    <div className="container-4">
        <div>
            <img src="resources/1.jpeg" alt="" />
            <p className="title">Never Ending Paddy Fields And Narrow Roads</p>
            <p className="place"><b>Pollachi</b></p>
            <p className="place"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quidem atque quaerat
                natus veniam doloribus nulla magnam vero fugiat nobis laborum fugit accusantium dolore et, nemo commodi
                adipisci corrupti sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod,
                perspiciatis iure quia iusto, aut dignissimos alias quos rem sint officia, placeat ipsam illum nihil
                reprehenderit natus ut inventore libero.</p>
            <button className="read">READ MORE</button>
        </div>
        <div>
            <img src="resources/2.jpeg" alt="" />
            <p className="title">Small Ride across town in mid Summer heat</p>
            <p className="place"><b>Thanjavur</b></p>
            <p className="place"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat exercitationem
                necessitatibus quod ex, iusto provident corrupti sapiente maxime consequatur sed rem cum in, asperiores
                aut id enim deserunt nesciunt? Cumque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                quod, perspiciatis iure quia iusto, aut dignissimos alias quos rem sint officia, placeat ipsam illum
                nihil reprehenderit natus ut inventore libero.</p>
            <button className="read">READ MORE</button>
        </div>


        <div><img src="resources/3.jpg" alt=""/>
            <p className="title">Catching a short Break at the Lotus Pond</p>
            <p className="place"><b>Chidambaram</b></p>
            <p className="place"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, alias voluptate nam quo
                reiciendis porro, dolor facilis accusamus recusandae magni, dolore illum nemo quia velit ex? Excepturi
                rem temporibus repellat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod,
                perspiciatis iure quia iusto, aut dignissimos alias quos rem sint officia, placeat ipsam illum nihil
                reprehenderit natus ut inventore libero.</p>
            <button className="read">READ MORE</button>
        </div>
    </div>

    <div className="container-4">
        <div>
            <img src="resources/4.webp" alt="" />
            <p className="title">Road Trip enroute the mountains and forests </p>
            <p className="place"><b>Masinagudi</b></p>
            <p className="place"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quidem atque quaerat
                natus veniam doloribus nulla magnam vero fugiat nobis laborum fugit accusantium dolore et, nemo commodi
                adipisci corrupti sint?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod,
                perspiciatis iure quia iusto, aut dignissimos alias quos rem sint officia, placeat ipsam illum nihil
                reprehenderit natus ut inventore libero.</p>
            <button className="read">READ MORE</button>
        </div>
        <div>
            <img src="resources/5.png" alt="" />
            <p className="title">Fall in love with the divine agraharams</p>
            <p className="place"><b>Kumbakkonam</b></p>
            <p className="place"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat exercitationem
                necessitatibus quod ex, iusto provident corrupti sapiente maxime consequatur sed rem cum in, asperiores
                aut id enim deserunt nesciunt? Cumque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                quod, perspiciatis iure quia iusto, aut dignissimos alias quos rem sint officia, placeat ipsam illum
                nihil reprehenderit natus ut inventore libero.</p>
            <button className="read">READ MORE</button>
        </div>


        <div><img src="resources/6.jpg" alt=""/>
            <p className="title">Enery driven drive through the windmills</p>
            <p className="place"><b>Tirunelvi</b></p>
            <p className="place"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, alias voluptate nam quo
                reiciendis porro, dolor facilis accusamus recusandae magni, dolore illum nemo quia velit ex? Excepturi
                rem temporibus repellat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod,
                perspiciatis iure quia iusto, aut dignissimos alias quos rem sint officia, placeat ipsam illum nihil
                reprehenderit natus ut inventore libero.</p>
            <button className="read">READ MORE</button>
        </div>
    </div>

    <div className="container-5">
        <div className="forms">
            <p id="contact">Contact Us</p>
            <p className="sales">Our Sales Team will reach out to you ASAP!</p>
            <p className="name">Name</p>
            <input type="text" className="name-box" name="" id="" input/>
            <p className="name">Your Home Town</p>
            <select name="" id="" className="home-drop-down" value="choose">
                <option value="" style={{color: 'green'}}>choose</option>
                <option value="">chennai</option>
                <option value="">mumbai</option>
                <option value="">delhi</option>
            </select>
            <p className="name">Where would you like to go?</p>
            <select name="" id="" className="home-drop-down" value="choose">
                <option value="" style={{color: "green"}}>choose</option>
                <option value="">chennai</option>
                <option value="">mumbai</option>
                <option value="">delhi</option>
            </select>
            <p className="name">Contact Number</p>
            <input type="text" className="name-box" input/>
            <button className="submit">SUBMIT INTEREST</button>
        </div>
    </div>
    </>
  )
}

export default App
