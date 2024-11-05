"use client";
import React,{useRef} from 'react'
import ProjectCard from '../sub/ProjectCard'
import './project.css'
import Link from 'next/link'
const Projects = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
    };
    return (
        <div className=' flex flex-col items-center justify-center py-20  ' id='projects'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>
            <div className={`relative h-full w-full flex overflow-x-auto pb-5 md:flex-row gap-10 px-10 scrollbar`} >   
            <button
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#a05af5] to-[#4c8ce3] text-white rounded-full p-2 shadow-md z-10"
    onClick={scrollLeft}
>
    &lt;
</button>
<button
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#a05af5] to-[#4c8ce3] text-white rounded-full p-2 shadow-md z-10"
    onClick={scrollRight}
>
    &gt;
</button>

                  <div className='relative h-full w-full flex overflow-x-auto pb-5 md:flex-row gap-10 px-10 scrollbar' ref={scrollRef}>
                  <ProjectCard
                    src='/ipd.jpg'
                    title='IPDGROUP'
                    description='PD Group is a leader in delivering innovative solutions across various sectors. Their portfolio features key projects that emphasize sustainability and collaboration, showcasing their expertise in [specific industries]. Committed to excellence, IPD Group consistently achieves outstanding results, positioning itself as a trusted partner for clients seeking transformative solutions.'
                    tech={["Nodejs",
                        "Reactjs",
                        "Nextjs",
                        "JavaScript",
                        "Bootstrap",
                        "SASS",
                        "LESS",
                        "Flex",
                        "MongoDB",
                        "React.Js", // Note: This is a duplicate; consider using "Reactjs"
                        "HTML5",
                        "CSS3",
                        "Kubernetes"]}
                    link='HTTPS://IPDGROUP.COM.AU/'

                />
                <ProjectCard
                    src='/runr.jpg'
                    title='runr.co.uk'
                    description='Runr is a dynamic company focused on delivering cutting-edge solutions for runners. They offer innovative products and services that enhance the running experience and promote a healthy lifestyle.'
                    tech={["Reactjs",
                        "Redux",
                        "Nodejs",
                        "MongoDB",
                        "HTML",
                        "JavaScript",
                        "JSON",
                        "jQuery",
                        "Linux",
                        "Restful",
                        "AWS"]}
                    link='https://runr.co.uk/ '

                /> 
                <ProjectCard
                    src='/Adjoaa.jpg'
                    title='ADJOAA'
                    description='ADJOAA is a curated, multi-brand, one-stop-shop destination online marketplace, specialising in vetted premium, high-fashion and sustainable brands by African designers and Black-owned businesses.'
                    tech={["Spotify","Shopify API","Shopify Liquid","GraphQL","HTML/CSS","JavaScript","Node.js","Shopify CLI"]}
                    link='https://www.adjoaa.com/'

                />
                <ProjectCard
                    src='/african_cloth.jpg'
                    title='GAPEARL'
                    description='GAPEARL is a black-owned, ready-to-wear bold print clothing line offering quality, trendy African inspired fashion at affordable prices.'
                    tech={["HTML/CSS","JavaScript","Shopify","Liquid"]}
                    link='https://grapearl.com/'

                />
                <ProjectCard
                    src='/canad_ghoose.jpg'
                    title='Canada Goose'
                    description="he Canada Goose website is an e-commerce platform offering premium outerwear and apparel, known for high-quality winter coats and accessories. The site highlights collections designed for extreme weather, urban styles, and sustainable materials. It features a sleek and interactive user experience, showcasing product details, visuals, and customer service options like store locators and size guides. It also emphasizes Canada Goose's commitment to craftsmanship, warmth, and environmental responsibility, creating an immersive shopping experience for luxury outerwear."
                    tech={["Spotify","Shopify API","Shopify Liquid","GraphQL","HTML/CSS","JavaScript","Node.js","Shopify CLI"]}
                    link='https://www.canadagoose.com/ca/en/home-page'

                />
                <ProjectCard
                    src='/gwp.jpg'
                    title='GREATWORKPERKS'
                    description='Great Work Perks offers unique employee benefits and discounts, helping companies enhance workplace culture and employee satisfaction through customizable perks tailored to individual needs.'
                    tech={[
                        "HTML/HTML5", "XML", "CSS/CSS3", "SASS", "Material UI",
                        "JavaScript", "Node.JS", "jQuery", "JSON", "React.js",
                        "Ajax", "Bootstrap", "Javaspringboot"
                    ]
                    }
                    link='HTTPS://WWW.GREATWORKPERKS.COM/'

                />

                <ProjectCard
                    src='/pone.jpg'
                    title='Prime Global'
                    description='PrimeGlobal is a global network of independent accounting and consulting firms offering audit, tax, advisory, and consulting services.'
                    tech={['Node.js', 'html', 'Next.js', 'css', 'Express','MongoDB',
  'Mongoose','JavaScript (ES6+)','Testing (Jest, Mocha)',]}
                    link='https://www.primeglobal.net/'

                />
                <ProjectCard
                    src='/Block_post.jpg'
                    title='Block Post'
                    description='Blok Sports is a peer-to-peer sports betting platform using blockchain technology to offer secure, direct betting with better odds and no middleman​(
GamblingNews
).'
                    tech={['Node.js', 'html', 'Next.js', 'css', 'Javascript','TypeScript',
  'GraphQL','Testing (Jest, Mocha)',]}
                    link='https://bloksports.bet/'
                />
                <ProjectCard
                    src='/pop.jpg'
                    title='W label'
                    description='WLabel provides branding and design services, specializing in creating unique visual identities, including logos, websites, and marketing materials.'
                    tech={['Node.js', 'html', 'Next.js', 'css', 'Javascript']}
                    link="https://wlabel.co/"
                />
                <ProjectCard
                    src='/unifideboxingclub.jpg'
                    title='Unified Boxing Club'
                    description='Unified Boxing Club offers boxing training and fitness programs, focusing on skill development, physical conditioning, and personal growth in a supportive environment.'
                    tech={['Node.js', 'html', 'Next.js', 'css', 'Javascript']}
                    link="https://unifiedboxingclub.com/"
                />
                <ProjectCard
                    src='/Luxgo.jpg'
                    title='LuxGo'
                    description='
LuxGo is a UK-based company specializing in luxury transportation services, offering premium chauffeur-driven car rentals for a high-end travel experience.'
                    tech={['Node.js', 'html', 'Next.js', 'css']}
                    link="https://www.luxgo.uk/"
                />
                  </div>
            </div>
        </div>
    )
}

export default Projects