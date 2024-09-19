import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import Link from 'next/link'
const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20' id='projects'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
               <ProjectCard
                    src='/pone.jpg'
                    title='Prime Global'
                    description='PrimeGlobal is a global network of independent accounting and consulting firms offering audit, tax, advisory, and consulting services.'
                    tech={['Node.js','html','Next.js','css','Express']}
                    link='https://www.primeglobal.net/'
                                  
                />
         
                <ProjectCard
                    src='/Block_post.jpg'
                    title='Block Post'
                    description='Blok Sports is a peer-to-peer sports betting platform using blockchain technology to offer secure, direct betting with better odds and no middleman​(
GamblingNews
).'
               tech={['Node.js','html','Next.js','css','Javascript']}
               link='https://bloksports.bet/'
                />
                <ProjectCard
                    src='/pop.jpg'
                    title='W label'
                    description='WLabel provides branding and design services, specializing in creating unique visual identities, including logos, websites, and marketing materials.'
                    tech={['Node.js','html','Next.js','css','Javascript']}
                    link="https://wlabel.co/"
                />
                 <ProjectCard
                    src='/unifideboxingclub.jpg'
                    title='Unified Boxing Club'
                    description='Unified Boxing Club offers boxing training and fitness programs, focusing on skill development, physical conditioning, and personal growth in a supportive environment.'
                    tech={['Node.js','html','Next.js','css','Javascript']}
                    link="https://unifiedboxingclub.com/"
               />
                 <ProjectCard
                    src='/Luxgo.jpg'
                    title='LuxGo'
                    description='
LuxGo is a UK-based company specializing in luxury transportation services, offering premium chauffeur-driven car rentals for a high-end travel experience.'
tech={['Node.js','html','Next.js','css']}
                    link="https://www.luxgo.uk/"
                />
            </div>
        </div>
    )
}

export default Projects