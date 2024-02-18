import { BrowserRouter, Route, Routes } from "react-router-dom";
import { All } from "./components/All";
import { Fullstack } from "./components/Fullstack";
import { Datascience } from "./components/Datascience";
import { Navbar } from "./components/Navbar";
import { Cybersecurity } from "./components/Cybersecurity";
import { Career } from "./components/Career";
import { Blog } from "./components/Blog";
import { Header } from "./components/Header";

export const App = () => {
  let data=[{image:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Frontend-vs-Backend-Development-Top-Differences.webp',
             head:'Full Stack Development',
             content:'In today’s digital age, web development has become a crucial component of the IT industry. Aspiring developers often come across the terms “frontend” and “backend” while exploring the realm of web development.These two pillars play distinct roles in creating functional and visually appealing websites or applicationsIn this article, we will delve into the differences as we go about frontend vs backend development bout, understand their respective features, explore the technologies involved, and shed light on the fascinating world of full-stack web development.',
            },
             {image:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
              head:'Data Science',
              content:'Are you someone who’s not interested in coding, but wants to get placed in tech through data science, and earn a handsome salary? Worry Not! Tech companies have various opportunities open for you even if you’ve no experience in coding. Data science has evolved to become one of the most sought-after fields in the tech industry.While coding remains an integral part of data science, it’s not the only path to a successful career in this dynamic field. In 2024, tech companies and startups are expanding their teams to include professionals who excel in non-coding jobs in data science.In this blog, we’ll explore the top 10 non-coding jobs in data science that are in high demand this year. These no-code roles in data science offer huge salaries, remote working opportunities, and promising career growth.',
             
             },
             {image:'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp',
              head:'Cyber Security',
              content:'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, it depends on many facets. Because just starting off, many roles don’t really require you to code and based on how advanced you want to get, programming may or may not be all that important for you.In this blog, we cover the relationships between cyber security tooling and expertise, and some on-the-job scenarios where it’s beneficial knowing how to code. and ending with some advice for all the non-programmers out there who are just starting out. So without further ado, Let’s break it down!',
              
             },
             {image:'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp',
             head:'career',
             content:'If your New Year resolution consists of building a successful tech career in 2024, then you need a few more weapons in your arsenal to achieve your goal. The tech industry is rapidly evolving and as a representative of the techie world, we can feel how daunting it must feel to keep up!But hey, that’s the beauty of tech. There’s always something new and better to discover. The past decade has been synonymous with exponential growth in technical innovation with close to 2.4 million job openings in 2023 alone. Undoubtedly, data science, machine learning, artificial intelligence, cybersecurity, cloud, and blockchain are some of the top technologies that people learn to transition into a high-paying tech role',

             },
            

  ]
  return (
    <div>
     
      <Blog/>
      <Header/>
      <BrowserRouter>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<All data={data}/>}/>
        <Route path='/fullstack' element={<Fullstack data={data}/>}/>
        <Route path='/datascience' element={<Datascience data={data}/>}/>
        <Route path='/cybersecurity' element={<Cybersecurity data={data}/>}/>
        <Route path='/career' element={<Career data={data}/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;

