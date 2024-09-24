import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import '../main/project.css'
interface Props {
    src: string;
    title: string;
    description: string;
    tech:string[];
    link:string
}

const ProjectCard = ({ src, title, description,tech,link }: Props) => {
    return (
        <a href={link} target='_blank' className='text-white cursor-pointer'>
             <div className='relative overflow-y-auto scrollbar rounded-lg shadow-lg border border-[#2A0E61] w-[250px] h-[450px]'>
          
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className='w-full object-contain'
            />
            <div className='relative p-4'>
                 <h1 className='text-2xl font-semibold text-white'>{title}</h1>
                <p className='mt-2 text-gray-300 text-left'>{description}</p>
                <div className='w-full flex flex-wrap'>
                {tech.map((item, index) => (
                       <div key={index} className='Welcome-box ml-[4px] px-[8px] py-[3px] z-[80] border my-[10px] border-[#7042f88b] opacity-[0.9]'>
                       <h1 className='Welcome-text text-[12px]'>{item}</h1>
                   </div>
                    ))}
</div>
               
               
            </div>
        </div>
        </a>

    )
}

export default ProjectCard