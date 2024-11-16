'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaJava,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore perspiciatis nam consectetur repudiandae quam minus repellendus! Dolorum?',
  item: [
    {
      company: 'i-Strategies S.A de C.V',
      position: 'Full Stack Developer',
      duration: 'DEC 2021 - AUG 2022',
    },
    {
      company: 'Almacenes SIMAN S.A de C.V',
      position: 'Full Stack Developer',
      duration: 'SEP 2022 - JUN 2023',
    },
    {
      company: 'Banco CUSCATLAN S.A de C.V',
      position: 'Front-End Developer',
      duration: 'JUL 2023 - OCT 2024',
    },
  ],
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore perspiciatis nam consectetur repudiandae quam minus repellendus! Dolorum?',
  items: [
    {
      institution: 'Universidad de El Salvador',
      degree: 'Software Engineer',
      duration: '2017 - 2021',
    },
  ],
};

// skills
const skills = {
  title: 'My Skills',
  description:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum rerum, provident obcaecati nulla tempore fuga dolor vero.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css3',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <FaAngular />,
      name: 'angular.js',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <FaJava />,
      name: 'java',
    },
  ],
};

// about data
const about = {
  title: 'About me',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum praesentium officia molestiae deleniti dolorum cupiditate recusandae quo?',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Saúl Hernández',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+503) 7465 8596',
    },
    {
      fieldName: 'Experience',
      fieldValue: '3+ Years',
    },
    {
      fieldName: 'GitHub',
      fieldValue: '@jsaulhernandez',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'American',
    },
    {
      fieldName: 'Email',
      fieldValue: 'jsaulhernandez98@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Spanish',
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col gap-[60px] xl:flex-row">
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {experience.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="h-full w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                              <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {about.description}
                </p>
                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
                      >
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
