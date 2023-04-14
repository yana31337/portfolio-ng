import React from 'react';
import './App.css';
import logo from './assets/png/ng-logo.png';
import search from './assets/svg/search.svg';
import doubleDown from './assets/png/double-down.png';
import national from './assets/png/national.jpg';
import block from './assets/png/block.jpg';
import movie1 from './assets/png/movie_1.jpg';
import movie2 from './assets/png/movie_2.jpg';
import chevronRight from './assets/png/chevronRight.png';
import rightChevron from './assets/png/rightChevron.png';
import leftChevron from './assets/png/leftChevron.png';
import cousteau from './assets/png/cousteau.jpg';
import freeSolo from './assets/png/freeSolo.jpg';
import selvagens from './assets/png/selvagens.jpg';
import forest from './assets/png/forest.jpg';
import facebook from './assets/svg/facebook.svg';
import instagram from './assets/svg/instagram.svg';
import twitter from './assets/svg/twitter.svg';
import SmallCard from './components/SmallCard';
import MediumCard from './components/MediumCard';
import LadgeCard from './components/LadgeCard';
import { sCards } from './data/sCards';
import { lCard } from './data/lCard';
import { mCard } from './data/mCard';




function App() {
  return (
    <div className="App ">

      {/* --------- NAV LINK ---------- */}

      <nav className='px-4 h-12 flex flex-row justify-between items-center'>
        <img src={logo} alt="" className='h-8 my-2' />
        <div className='nav-link flex flex-row items-center justify-end min-h-min'>
          <button className='bg-none mr-4 px-4 text-sm font-sans font-medium uppercase tracking-widest'>Login</button>
          <a href="#" className='mr-4'>
            <img src={search} alt="" className='h-6' />
          </a>
          <a href="#" className='mr-4  text-sm underline decoration-yellow-500 decoration-2 underline-offset-4 hover:no-underline hover:bg-yellow-400'>
            Newsletters
          </a>
          <a href="#" className='mr-4 text-white bg-black p-2 uppercase h-full  hover:bg-yellow-400 hover:text-black'>
            Subscribe
          </a>
          <button className='bg-none flex flex-row'>
            Menu
            <img src={doubleDown} alt="" className='ml-2 h-4 my-1' />
          </button>
        </div>
      </nav>

      {/* ----------- LATEST STORIES -------------- */}

      <div className='bg-black'>

        <div className='grid grid-cols-12 gap-x-10 col-start-auto max-w-5xl mx-auto my-0 text-white pb-14'>

          <div className='col-span-12 text-center pt-16 pb-9 '>
            <h2 className='text-5xl font-semibold uppercase tracking-wider'> Latest Stories</h2>
            <div className='text-lg font-normal leading-6 mt-3.5 mb-7 mx-0' >
              <span className='tracking-wider'>
                <a href="" className='decoration-yellow-500 underline decoration-2 underline-offset-4 hover:no-underline hover:bg-yellow-400 hover:text-black min-w-fit '> Subscribe </a>  for full access to read stories from National Geographic.
              </span>
              <div className='h-1 mt-5 mx-auto mb-0 w-14 bg-yellow-400 '>
              </div>
            </div>
          </div>

          <div className='col-span-4'>

            <div className='flex ml-2'>
              <div className='w-1 mr-4 mb-8 h-8 bg-yellow-400'> </div>
              <h2 className=' uppercase text-3xl mb-8 '>Today's Picks</h2>
            </div>

            <div >
              {sCards.map(card => <SmallCard card={card} />)}
            </div>

            <div>
              <a href="#" className='uppercase text-sm font-medium tracking-wide underline decoration-yellow-500 decoration-2 underline-offset-4 hover:no-underline hover:bg-yellow-400 hover:text-black'>See More</a>
            </div>

          </div>

          <div className='col-span-8'>

            <LadgeCard card={lCard[0]} />

            <div className='flex flex-row justify-between h-1/2 mt-10'>

              <MediumCard card={mCard[0]}/>
              <MediumCard card={mCard[1]}/>

            </div>

          </div>
        </div>
      </div>

      <div className='py-10 bg-gray-100 w-full'>

      </div>

      {/* -------------  Movie TV ----------- */}

      <div className=' bg-black'>
        <div className='h-auto  text-center text-white  max-w-3xl mx-auto pb-16 px-10'>
          <div className='text-9xl'>
            Movie
          </div>
          <div className='uppercase text-2xl mb-9 mt-24' >
            LIMITLESS WITH CHRIS HEMSWORTH
          </div>
          <div className='text-base mb-6'>
            What if you could combat aging and discover the full potential of the human body? With the help of world-class experts, family, and friends, Chris Hemsworth is embarking on a series of immense challenges to push himself to new limits and stop the diseases of old age before they take hold.
          </div>
          <div className='mx-auto uppercase text-lg decoration-yellow-500 underline decoration-2 underline-offset-4 hover:no-underline hover:bg-yellow-400 hover:text-black px-1 max-w-max'>
            STREAMING ON DISNEY+
          </div>
          <div>
            <div className='flex flex-row justify-between mt-8'>
              <div>
                <a href="#" className='text-lg font-bold'>Discover More on Disney+</a>
              </div>
              <div>
                <a href="#" className='uppercase text-sm font-medium tracking-wide underline decoration-yellow-500 decoration-2 underline-offset-4 hover:no-underline hover:bg-yellow-400 hover:text-black'>See More</a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-evenly mx-12 px-5 items-center mb-10'>
          <a href="#">
            <img src={movie1} alt="" className='h-64 w-44' />
          </a>
          <a href="#">
            <img src={movie2} alt="" className='h-64 w-44' />
          </a>
          <a href="#">
            <img src={movie1} alt="" className='h-64 w-44' />
          </a>
          <a href="#">
            <img src={movie2} alt="" className='h-64 w-44' />
          </a>
          <a href="#">
            <img src={movie1} alt="" className='h-64 w-44' />
          </a>
          <div>
            <button>
              <img src={chevronRight} alt="" className='h-6 w-3 text-white ' />
            </button>
          </div>
        </div>
        <div className='h-auto text-white pb-10'>

          <div className='mb-10'>
            <div className='uppercase text-5xl text-center '>
              Nat Geo TV
            </div>
            <div className='h-1 mt-5 mx-auto mb-0 w-14 bg-yellow-400 '>
            </div>
          </div>

          <div className='flex flex-row items-center max-w-5xl mx-auto' >
            <div>
              <button>
                <img src={leftChevron} alt="" className='h-6 w-5 text-white ' />
              </button>
            </div>
            <div className='relative flex flex-row items-center '>
              <a href="#">
                <img src={cousteau} alt="" className='h-[32.5rem] w-[24rem] z-0' />
              </a>
              <a href="#">
                <img src={freeSolo} alt="" className='h-[32.5rem] w-[24rem] z-10' />
              </a>
              <a href="#">
                <img src={cousteau} alt="" className='relative h-[32.5rem] w-[24rem] z-20' />
              </a>
              <a href="#">
                <img src={freeSolo} alt="" className='h-[32.5rem] w-[24rem] z-10' />
              </a>
              <a href="#">
                <img src={cousteau} alt="" className='h-[32.5rem] w-[24rem] z-0 ' />
              </a>
            </div>

            <div>
              <button>
                <img src={rightChevron} alt="" className='h-6 w-5 text-white ' />
              </button>
            </div>

          </div>
        </div>
        <div className='h-auto text-white text-center text-3xl pb-10'>
          Gallery
        </div>
      </div>

      {/* ------------ TRAVEL ------------- */}

      <div className='bg-black '>

        <div className=' text-white pb-10 relative  '>
          {/* <img src={national} alt="" className='absolute  w-full ' /> */}

          <div className='absolute grid grid-cols-12 gap-x-10 col-start-auto max-w-5xl text-white pb-14  ml-52'>

            <div className='col-span-12 text-center py-16 min-h-min'>
              <h2 className='text-5xl font-semibold uppercase tracking-wider'> Travel</h2>
              <div className='h-1 mt-5 mx-auto mb-0 w-14 bg-yellow-400 '>
              </div>
            </div>

            <div className='col-span-8'>

              <LadgeCard card={lCard[1]} />

              <div className='flex flex-row  justify-between h-auto  mt-10'>
                <MediumCard card={mCard[2]}/>
                <MediumCard card={mCard[3]}/>
              </div>

            </div>

            <div className='col-span-4'>

              <div className='flex ml-2 '>
                <div className='w-1 mr-4 mb-4 h-8 bg-yellow-400'> </div>
                <h2 className=' uppercase text-3xl mb-4 '>Today's Picks</h2>
              </div>

              <div >
                {sCards.map(card => <SmallCard card={card} />)}
              </div>

              <div className=''>
                <a href="#" className='uppercase text-sm font-medium tracking-wide underline decoration-yellow-500 decoration-2 underline-offset-4 hover:no-underline hover:bg-yellow-400 hover:text-black'>See More</a>
              </div>
            </div>

          </div>
          <img src={national} alt="" className='  w-full ' />
          <div className='bg-black h-64'></div>

        </div>

      </div>

      {/* ---------- PICTURES OF THE YEAR --------- */}

      <div>
        <div className='relative text-center  text-yellow-500 mx-auto  '>
          <div className='absolute py-16  my-10 w-fit px-16'>
            <h2 className='uppercase font-normal text-5xl mb-5'>The real-life MacGyver in Nat Geo’s basement</h2>
            <div className='mt-32 text-lg '>
              How do you photograph beavers under ice—something no one’s ever done before? You enlist the help of Nat Geo’s gadget guru, aka Tom O’Brien,
              whose job is to figure out how to capture images and sounds that have never been seen or heard.
            </div>
            <div className='mt-16'>
              <button className='bg-yellow-400 p-3 text-black text-lg font-medium hover:bg-white'>Listen on Apple Podcasts</button>
            </div>
          </div>
          <img src={block} alt="" className='  ' />
        </div>
      </div>

      {/* ------------ MISSION ------------ */}

      <div className='bg-gray-200'>

        <div className=' grid grid-cols-10 gap-x-10 col-start-auto max-w-4xl mx-auto text-black pb-14'>

          <div className='col-span-10 text-center py-16 min-h-min'>
            <h2 className='text-5xl font-semibold uppercase tracking-wider'> The National Geographic Society Mission</h2>
            <div className='h-1 mt-5 mx-auto mb-0 w-14 bg-yellow-400 '>
            </div>
          </div>

          <div className='col-span-6'>
            <img src={selvagens} alt="" />
          </div>

          <div className='col-span-4 flex flex-col justify-between'>
            <h3 className='text-4xl font-medium leading-tight mb-6 mt-3'>National Geographic’s nonprofit work</h3>
            <p className=' text-lg'>The National Geographic Society invests in innovative leaders in science, exploration, education and storytelling to illuminate and protect the wonder of our world.</p>
          </div>
        </div>
      </div>

      {/* ------------ Sign up ------------ */}

      <div>
        <div className='relative text-center  text-white mx-auto  '>
          <div className='absolute py-10   px-16 text-gray-100'>
            <h2 className='uppercase font-normal text-5xl mb-1'>The best of National Geographic delivered to your inbox</h2>
            <div className='mt-5 text-lg '>
              Sign up for more inspiring photos, stories, and special offers from National Geographic.
            </div>
            <div className='mt-16'>
              <button className='bg-yellow-300 p-3 text-black text-lg font-medium hover:bg-white uppercase'>Sing Up</button>
            </div>
          </div>
          <img src={forest} alt="" className=' max-h-96 w-full ' />
        </div>
      </div>

      {/* ------------ FOOTER ------------ */}

      <div className='bg-black text-white '>

        <div className='grid grid-cols-4 gap-4 py-5 px-5'>

          <div className='uppercase font-medium '>
            Legal
          </div>
          <div className='uppercase font-medium'>
            Our Sites
          </div>
          <div className='uppercase font-medium'>
            Join Us
          </div>
          <div className='uppercase font-medium'>
            Follow us
          </div>

          <div className='flex flex-col  text-sm'>
            <a href="#" className='hover:underline pb-1'> Terms of Use</a>
            <a href="#" className='hover:underline pb-1'> Privacy Policy</a>
            <a href="#" className='hover:underline pb-1'> Your California Privacy Rights</a>
            <a href="#" className='hover:underline pb-1'> Children's Online Privacy Policy</a>
            <a href="#" className='hover:underline pb-1'> Interest-Based Ads</a>
            <a href="#" className='hover:underline pb-1'> About Nielsen Measurement</a>
            <a href="#" className='hover:underline pb-1'> Do Not Sell My Info</a>
          </div>

          <div className='flex flex-col text-sm'>
            <a href="#" className='hover:underline pb-1'>  Nat Geo Home</a>
            <a href="#" className='hover:underline pb-1'> Attend a Live Event</a>
            <a href="#" className='hover:underline pb-1'> Book a Trip</a>
            <a href="#" className='hover:underline pb-1'> Buy Maps</a>
            <a href="#" className='hover:underline pb-1'> IInspire Your Kids</a>
            <a href="#" className='hover:underline pb-1'> Shop Nat Geo</a>
            <a href="#" className='hover:underline pb-1'> Visit the D.C. Museum</a>
            <a href="#" className='hover:underline pb-1'> Watch TV</a>
            <a href="#" className='hover:underline pb-1'> Learn About Our Impact</a>
            <a href="#" className='hover:underline pb-1'> Support our Mission</a>
            <a href="#" className='hover:underline pb-1'> Nat Geo Partners</a>
            <a href="#" className='hover:underline pb-1'> Masthead</a>
            <a href="#" className='hover:underline pb-1'> Press Room</a>
            <a href="#" className='hover:underline pb-1'> Advertise With Us</a>
          </div>

          <div className='flex flex-col text-sm'>
            <a href="#" className='hover:underline pb-1'> Subscribe</a>
            <a href="#" className='hover:underline pb-1'> Customer Service</a>
            <a href="#" className='hover:underline pb-1'> Renew Subscription</a>
            <a href="#" className='hover:underline pb-1'> Manage Your Subscription</a>
            <a href="#" className='hover:underline pb-1'> Work at Nat Geo</a>
            <a href="#" className='hover:underline pb-1'> Sign up for Our Newsletters</a>
            <a href="#" className='hover:underline pb-1'> Contribute to Protect the Planet</a>
            <a href="#" className='hover:underline pb-1'> Pitch a Story</a>
          </div>

          <div>
            <div className='flex flex-row w-2/6 justify-between '>
              <a href="#"><img src={facebook} alt="" className='w-6 h-6' /></a>
              <a href="#"><img src={twitter} alt="" className='w-6 h-6' /></a>
              <a href="#"><img src={instagram} alt="" className='w-6 h-6' /></a>
            </div>
            <div>

            </div>
          </div>



        </div>
        <hr className='border-gray-500' />
        <div className='bg-black h-10'>

        </div>
      </div>

    </div>
  );
}

export default App;
