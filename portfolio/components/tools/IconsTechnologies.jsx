"use client"
import Image from 'next/image'
import React from 'react'
import "../../public/assets/css/IconsTech.css"

export function IconsTechnologies() {

    const frameworks = [
        {
            name: 'React',
            imageSrc: '/assets/img/technologies/react.svg',
            imageAlt: 'React',
            hoverClass: 'text-orange-700',

        },
        {
            name: 'angular',
            imageSrc: '/assets/img/technologies/angular.svg',
            imageAlt: 'Angular',
            hoverClass: 'text-orange-700',

        },
        {
            name: 'typescript',
            imageSrc: '/assets/img/technologies/typescript.svg',
            imageAlt: 'TypeScript',
            hoverClass: 'text-orange-700',

        },
    ]

    const basicWeb = [
        {
            name: 'html',
            imageSrc: '/assets/img/technologies/html.svg',
            imageAlt: 'HTML',
            hoverClass: 'text-orange-700',
        },
        {
            name: 'css',
            imageSrc: '/assets/img/technologies/css.svg',
            imageAlt: 'CSS',
            hoverClass: 'text-orange-700',

        },
        {
            name: 'Javascript',
            imageSrc: '/assets/img/technologies/js.svg',
            imageAlt: 'JavaScript',
            hoverClass: 'text-orange-700',

        }
    ]

    const staticSiteGenerators = [
        {
            name: 'nextJs',
            imageSrc: '/assets/img/technologies/next.svg',
            imageAlt: 'NextJs',
            hoverClass: 'text-orange-700',

        },
        {
            name: 'hugo',
            imageSrc: '/assets/img/technologies/hugo.svg',
            imageAlt: 'Hugo',
            hoverClass: 'text-orange-700',

        },
        {
            name: 'astro',
            imageSrc: '/assets/img/technologies/astro.svg',
            imageAlt: 'Astro',
            hoverClass: 'text-orange-700',

        },
        {
            name: 'vite',
            imageSrc: '/assets/img/technologies/Vitejs.svg',
            imageAlt: 'Vite',
            hoverClass: 'text-orange-700',

        }
    ]

    const cssFrameworks = [
        {
            name: 'tailwind',
            imageSrc: '/assets/img/technologies/tailwind.svg',
            imageAlt: 'Tailwind',
            hoverClass: 'text-orange-700',

        },
        {
            name: 'bootstrap',
            imageSrc: '/assets/img/technologies/bootstrap.svg',
            imageAlt: 'Bootstrap',
            hoverClass: 'text-orange-700',

        },
        {
            name: 'sass',
            imageSrc: '/assets/img/technologies/sass.svg',
            imageAlt: 'Sass',
            hoverClass: 'text-orange-700',

        }
    ]

    const backendTechnologies = [

        {
            name: 'Node',
            imageSrc: '/assets/img/technologies/node.svg',
            imageAlt: 'Node',
            hoverClass: 'text-orange-700',

        },
        {
            name: 'mysql',
            imageSrc: '/assets/img/technologies/mysql.svg',
            imageAlt: 'MySQL',
            hoverClass: 'text-orange-700',

        },
        {
            name: 'mongodb',
            imageSrc: '/assets/img/technologies/mongodb.svg',
            imageAlt: 'MongoDB',
            hoverClass: 'text-orange-700',

        },
        {
            name: 'postgresql',
            imageSrc: '/assets/img/technologies/postgres.svg',
            imageAlt: 'PostgreSQL',
            hoverClass: 'postgresqlImg',

        },


    ]

    const otherTechnologies = [
        {
            name: 'git',
            imageSrc: '/assets/img/technologies/git.svg',
            imageAlt: 'Git',
            hoverClass: 'text-orange-700',
        },
        {
            name: 'docker',
            imageSrc: '/assets/img/technologies/docker.svg',
            imageAlt: 'Docker',
            hoverClass: 'text-orange-700',
        },
        {
            name: 'AWS',
            imageSrc: '/assets/img/technologies/aws.svg',
            imageAlt: 'AWS',
            hoverClass: 'text-orange-700',

        }
    ]

    const technologies = [
        {
            title: "Basic Web",
            array: basicWeb
        },
        {
            title: "Some Frameworks",
            array: frameworks
        },
        {
            title: "Site Generators",
            array: staticSiteGenerators
        },
        {
            title: "Styles",
            array: cssFrameworks
        },
        {
            title: "Backend",
            array: backendTechnologies
        },
        {
            title: "Other Technologies",
            array: otherTechnologies
        }
    ]

    return (
        <div className='flex flex-wrap mt-2 space-x-6 items-center justify-center group-hover:opacity-75'>
            {technologies.map((element, index) => (
                <div key={index} className='space-y-1 h-auto mb-2 pb-2 border-b-2 border-transparent hover:border-b-2 hover:border-slate-400 group rounded-lg'>
                    <div className='flex justify-center items-start w-full h-auto'>
                        <p className='text-slate-600 mb-1 group-hover:text-slate-300'>{element.title}</p>
                    </div>
                    <div className='flex space-x-4 items-center h-[35px] px-3'>
                        <div className='flex space-x-4 items-center h-[35px] px-3'>
                            {element.array.map((technology, i) => (
                                <div
                                    key={i}
                                    className={`col-6 col-md-4 col-lg-2 flex justify-center items-center transform transition-transform duration-200 hover:scale-11   `}
                                >
                                    <Image
                                        src={technology.imageSrc}
                                        width={35}
                                        height={(35) / (16 / 9)}
                                        alt={technology.imageAlt}
                                        className={`h-[30px]`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>



    )
}
