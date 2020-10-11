import React from "react";
import { motion, useCycle } from "framer-motion";
import { pathVariants1, pathVariants2 } from "../paths/pathVariants";

export const Hamburger = () => {
  const [animation, cycleAnimation] = useCycle("visible", "visible2");
  return (
    <div onClick={() => cycleAnimation()}>
      <motion.svg viewBox="0 0 513 513" xmlns="http://www.w3.org/2000/svg">
        <g>
          <motion.path
            variants={pathVariants1}
            initial="hidden"
            animate="visible"
            d="m478.883 400.694h-444.212c-19.148 0-34.671-15.522-34.671-34.671v-6.826c0-19.148 15.523-34.671 34.671-34.671h444.213c19.148 0 34.671 15.523 34.671 34.671v6.826c-.001 19.149-15.523 34.671-34.672 34.671z"
          />
          <motion.path
            variants={pathVariants1}
            initial="hidden"
            animate="visible"
            d="m513.552 359.193v6.828c0 19.152-15.516 34.678-34.668 34.678h-20.288c19.152 0 34.668-15.526 34.668-34.678v-6.828c0-19.142-15.516-34.668-34.668-34.668h20.288c19.152 0 34.668 15.527 34.668 34.668z"
            fill="#d83131"
          />
          <motion.path
            variants={pathVariants1}
            initial="hidden"
            animate="visible"
            d="m478.883 400.694h-222.106-222.106s-15.319 73.971 71.855 103.071c14.933 4.985 30.523 7.306 46.157 7.306h104.095 104.095c15.634 0 31.224-2.321 46.157-7.306 87.172-29.1 71.853-103.071 71.853-103.071z"
            fill="#fe9738"
          />
          <motion.path
            variants={pathVariants1}
            initial="hidden"
            animate="visible"
            d="m407.028 503.763c-14.937 4.99-30.525 7.314-46.155 7.314h-23.532c15.64 0 31.228-2.324 46.165-7.314 87.165-29.1 71.846-103.063 71.846-103.063h23.532c0-.001 15.32 73.963-71.856 103.063z"
            fill="#fe860a"
          />
          <motion.path
            variants={pathVariants1}
            initial="hidden"
            animate="visible"
            d="m479.696 338.336c0 17.31-20.114 26.694-33.487 15.703-5.497-4.518-11.989-8.098-22.278-8.098-27.878 0-27.878 22.083-55.757 22.083s-27.879-22.083-55.758-22.083c-27.878 0-27.878 22.083-55.756 22.083-27.877 0-27.877-22.083-55.755-22.083-27.879 0-27.879 22.083-55.758 22.083-27.878 0-27.878-22.083-55.756-22.083-10.284 0-16.774 3.578-22.27 8.094-13.374 10.991-33.488 1.609-33.488-15.702v-40.967h446.061v40.97z"
            fill="#bbec6c"
          />
          <motion.path
            variants={pathVariants1}
            initial="hidden"
            animate="visible"
            d="m479.7 297.368v40.969c0 16.198-17.613 25.453-30.825 17.571 5.836-3.409 10.03-9.659 10.03-17.571v-40.969z"
            fill="#a2e62e"
          />
          <motion.path
            variants={pathVariants1}
            initial="hidden"
            animate="visible"
            d="m33.858 264.541v33.13h47.82c9.948 0 18.013 8.065 18.013 18.013v95.416c0 12.719 10.311 23.03 23.03 23.03 12.719 0 23.029-10.311 23.029-23.03v-95.416c0-9.948 8.065-18.013 18.013-18.013h315.934v-33.13z"
            fill="#fee45a"
          />
          <motion.path
            variants={pathVariants1}
            initial="hidden"
            animate="visible"
            d="m458.906 264.539h20.795v33.129h-20.795z"
            fill="#fedf30"
          />
          <motion.path
            variants={pathVariants1}
            initial="hidden"
            animate="visible"
            d="m478.883 266.809h-444.212c-19.148 0-34.671-15.522-34.671-34.671v-6.826c0-19.148 15.523-34.671 34.671-34.671h444.213c19.148 0 34.671 15.523 34.671 34.671v6.826c-.001 19.149-15.523 34.671-34.672 34.671z"
            fill="#9e5528"
          />
          <motion.path
            variants={pathVariants1}
            initial="hidden"
            animate="visible"
            d="m513.552 225.31v6.828c0 19.152-15.516 34.668-34.668 34.668h-20.288c19.152 0 34.668-15.516 34.668-34.668v-6.828c0-19.142-15.516-34.668-34.668-34.668h20.288c19.152.001 34.668 15.527 34.668 34.668z"
            fill="#904d24"
          />
          <motion.path
            variants={pathVariants2}
            initial="hidden"
            animate={animation}
            d="m256.777 2.483c-173.165 2.506-231.346 96.439-250.553 151.018-6.582 18.702 7.451 38.274 27.277 38.274h223.276 223.274c19.973 0 33.825-19.769 27.164-38.599-19.323-54.626-77.616-148.192-250.438-150.693z"
            fill="#fe9738"
          />
          <motion.path
            variants={pathVariants2}
            initial="hidden"
            animate={animation}
            d="m480.052 191.777h-2.469c6.725-7.5 9.493-18.419 5.744-29.038-19.328-54.636-77.62-148.195-250.442-150.695-44.709.64-81.763 7.386-112.443 17.974 34.792-15.981 79.335-26.714 136.336-27.54 172.822 2.51 231.115 96.07 250.442 150.695 6.652 18.832-7.201 38.604-27.168 38.604z"
            fill="#fe860a"
          />
          <g>
            <g>
              <motion.path
                variants={pathVariants2}
                initial="hidden"
                animate={animation}
                d="m185.299 81.89c-1.204 0-2.425-.291-3.559-.903-3.644-1.969-5.001-6.52-3.032-10.164l6.721-12.436c1.969-3.644 6.52-5.001 10.164-3.032s5.001 6.52 3.032 10.164l-6.721 12.436c-1.356 2.51-3.938 3.935-6.605 3.935z"
                fill="#e57917"
              />
            </g>
            <g>
              <motion.path
                variants={pathVariants2}
                initial="hidden"
                animate={animation}
                d="m256.684 82.739c-4.142 0-7.5-3.358-7.5-7.5v-14.136c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v14.136c0 4.142-3.358 7.5-7.5 7.5z"
                fill="#e57917"
              />
            </g>
            <g>
              <motion.path
                variants={pathVariants2}
                initial="hidden"
                animate={animation}
                d="m328.255 81.786c-2.587 0-5.104-1.34-6.495-3.739l-7.092-12.229c-2.078-3.583-.858-8.172 2.725-10.25s8.172-.858 10.25 2.725l7.092 12.229c2.078 3.583.858 8.172-2.725 10.25-1.184.688-2.477 1.014-3.755 1.014z"
                fill="#e57917"
              />
            </g>
          </g>
        </g>
      </motion.svg>
    </div>
  );
};
