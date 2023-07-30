import React from 'react'
import BlocSoc from "../../resources/Bloc.png";
import './blogs.css'

import Card1 from '../../components/Cards/Card1';
const Blogs = () => {
  
//   const dummyData=[
//     {image:{Dummy},
//      heading:'Lorem Ipsum',
//     content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy',
//     writtenBy:"Ashitosh Sable",
//     key:1

//     },
//     {image:{Dummy},
//     heading:'Lorem Ipsum',
//    content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy',
//    writtenBy:"Ashitosh Sable",
//    key:2
//    },
//    {image:{Dummy},
//    heading:'Lorem Ipsum',
//   content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy',
//   writtenBy:"Ashitosh Sable",
//   key:3
//   },
//   {image:{Dummy},
//   heading:'Lorem Ipsum',
//  content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy',
//  writtenBy:"Ashitosh Sable",
//  key:4
//  },
//   ]


  return (
    <div>
        <div className='blog_header'>
            <h1 className='header1 color_blue'><img className='blog_logo' src={BlocSoc} alt='logo' /> Blogs</h1>
        </div>
        <div className='blogs_container'>
        <Card1 className='blogs'/>
        <Card1 className='blogs'/>
        <Card1 className='blogs'/>
        <Card1 className='blogs'/>
        <Card1 className='blogs'/>
        <Card1 className='blogs'/>
        </div>
    </div>
  )
}

export default Blogs;