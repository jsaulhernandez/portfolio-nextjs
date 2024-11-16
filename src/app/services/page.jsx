'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';

const services = [
  {
    num: '01',
    title: 'Web development',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia maxime, officiis asperiores quam tempore cum itaque vel consequatur quidem illo! Deserunt, perferendis itaque. Totam inventore architecto eos placeat neque possimus!',
    href: '',
  },
  {
    num: '02',
    title: 'UI/UX Development',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia maxime, officiis asperiores quam tempore cum itaque vel consequatur quidem illo! Deserunt, perferendis itaque. Totam inventore architecto eos placeat neque possimus!',
    href: '',
  },
  {
    num: '03',
    title: 'Logo Design',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia maxime, officiis asperiores quam tempore cum itaque vel consequatur quidem illo! Deserunt, perferendis itaque. Totam inventore architecto eos placeat neque possimus!',
    href: '',
  },
  {
    num: '04',
    title: 'SEO',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia maxime, officiis asperiores quam tempore cum itaque vel consequatur quidem illo! Deserunt, perferendis itaque. Totam inventore architecto eos placeat neque possimus!',
    href: '',
  },
];

const page = () => {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="max-auto container">
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
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="group flex flex-1 flex-col justify-center gap-6"
              >
                {/* top */}
                <div className="flex w-full items-center justify-between">
                  <div className="text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white transition-all duration-500 hover:-rotate-45 group-hover:bg-accent"
                  >
                    <BsArrowDownRight className="text-3xl text-primary" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 group-hover:text-accent">
                  {item.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{item.description}</p>
                {/* border */}
                <div className="w-full border-b border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default page;
