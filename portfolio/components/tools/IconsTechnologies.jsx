import Image from 'next/image'
import React from 'react'

export function IconsTechnologies() {

    const frameworks = [
        {
            name: 'React',
            imageSrc: '/assets/img/technologies/react.svg',
            imageAlt: 'React',
        },
        {
            name: 'angular',
            imageSrc: '/assets/img/technologies/angular.svg',
            imageAlt: 'Angular',
        },
        {
            name: 'typescript',
            imageSrc: '/assets/img/technologies/typescript.svg',
            imageAlt: 'TypeScript',
        },
    ]

    const basicWeb = [
        {
            name: 'html',
            imageSrc: '/assets/img/technologies/html.svg',
            imageAlt: 'HTML',
            hoverImageSrc: '/assets/img/technologies/css.svg',
        },
        {
            name: 'css',
            imageSrc: '/assets/img/technologies/css.svg',
            imageAlt: 'CSS',
            hoverImageSrc: '/assets/img/technologies/css.svg',

        },
        {
            name: 'Javascript',
            imageSrc: '/assets/img/technologies/js.svg',
            imageAlt: 'JavaScript',
            hoverImageSrc: '/assets/img/technologies/css.svg',

        }
    ]

    const staticSiteGenerators = [
        {
            name: 'nextJs',
            imageSrc: '/assets/img/technologies/next.svg',
            imageAlt: 'NextJs',
        },
        {
            name: 'hugo',
            imageSrc: '/assets/img/technologies/hugo.svg',
            imageAlt: 'Hugo',
        },
        {
            name: 'astro',
            imageSrc: '/assets/img/technologies/astro.svg',
            imageAlt: 'Astro',
        },
        {
            name: 'vite',
            imageSrc: '/assets/img/technologies/Vitejs.svg',
            imageAlt: 'Vite',
        }
    ]

    const cssFrameworks = [
        {
            name: 'tailwind',
            imageSrc: '/assets/img/technologies/tailwind.svg',
            imageAlt: 'Tailwind',
        },
        {
            name: 'bootstrap',
            imageSrc: '/assets/img/technologies/bootstrap.svg',
            imageAlt: 'Bootstrap',
        },
        {
            name: 'sass',
            imageSrc: '/assets/img/technologies/sass.svg',
            imageAlt: 'Sass',
        }
    ]

    const backendTechnologies = [

        {
            name: 'Node',
            imageSrc: '/assets/img/technologies/node.svg',
            imageAlt: 'Node',
        },
        {
            name: 'mysql',
            imageSrc: '/assets/img/technologies/mysql.svg',
            imageAlt: 'MySQL',
        },
        {
            name: 'mongodb',
            imageSrc: '/assets/img/technologies/mongodb.svg',
            imageAlt: 'MongoDB',
        },
        {
            name: 'postgresql',
            imageSrc: '/assets/img/technologies/postgres.svg',
            imageAlt: 'PostgreSQL',
        },


    ]

    const otherTechnologies = [
        {
            name: 'git',
            imageSrc: '/assets/img/technologies/git.svg',
            imageAlt: 'Git',
        },
        {
            name: 'docker',
            imageSrc: '/assets/img/technologies/docker.svg',
            imageAlt: 'Docker',
        },
        {
            name: 'AWS',
            imageSrc: '/assets/img/technologies/aws.svg',
            imageAlt: 'AWS',
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
        <div className='flex flex-wrap mt-2 space-x-6 items-center justify-center'>
            {
                technologies.map((element, index) => {
                    return (
                        <div key={index} className='space-y-1 h-[60px] border-x-2 border-transparent hover:border-x-2 hover:border-slate-400 group hover:text-slate-400 rounded-lg' >
                            <div className='flex justify-center items-start w-full h-[25px]'>
                                <p className='text-slate-600 mb-1 group-hover:text-slate-300'>{element.title}</p>
                            </div>


                            <div className='flex space-x-4 items-center h-[35px] px-3 '>
                                <div className='flex space-x-4 items-center h-[35px] px-3 '>
                                    {
                                        element.array.map((technology, i) => {
                                            return (
                                                <div className={`col-6 col-md-4 col-lg-2 flex justify-center items-center transform transition-transform duration-200 hover:scale-11 `}>
                                                    <Image src={technology.imageSrc} width={35} height={(35) / (16 / 9)} alt={technology.imageAlt} className='h-[30px]' />
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
