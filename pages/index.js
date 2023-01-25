import Head from "next/head";
import {
  ChevronDownIcon,
  RocketLaunchIcon,
  SquaresPlusIcon,
  CodeBracketIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const description = "Bassam Yousef - Portfolio";
  const title = "Bassam - Portfolio";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:title" content={title} />{" "}
      </Head>

      <div className="section">
        <h2 className="mb-1 text-4xl font-bold opacity-90">
          Hello, I&apos;m Bassam
        </h2>
        <h3 className="mb-3 ">Frontend developer</h3>
        <p className="mb-6 opacity-70 ">
          Expert in web development with HTML, CSS, JavaScript, Reactjs, Nextjs
        </p>
        <div className="flex mb-6">
          <a href="#about" className=" roundedButton">
            About Me <ChevronDownIcon className="w-5 h-5 ml-1" />
          </a>
        </div>
        <div className="flex items-center opacity-90">
          <a
            className="socialLink"
            href="https://github.com/basyoudev"
            aria-label="github"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="socialIcon"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </a>
          <a
            className="socialLink"
            href="https://www.linkedin.com/in/bassam-yousef-403b01256/"
            aria-label="linkedin"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="socialIcon"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              />
            </svg>
          </a>
          <a
            className="socialLink"
            href="https://web.telegram.org/k/#@bassamyousef990"
            aria-label="telegram"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="socialIcon"
            >
              <path
                fill="currentColor"
                d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div id="about" className="section">
        <h2 className="sectionHeading">About Me</h2>
        <p className="mb-6">
          I love turning beautiful designs into usable websites that respond to
          various devices and user contexts and are powered by code that’s just
          as beautiful, as well as scalable. I always seek perfection to make my
          projects unique and creative and I do so by keeping my eyes on the new
          tools, reading articles and follow the right people on social media.
        </p>
        <div className="flex justify-center ">
          <a href="#services" className="roundedButton">
            Services <ChevronDownIcon className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
      <div id="services" className="section">
        <h2 className="sectionHeading">Services</h2>
        <div className="px-6 py-12 border dark:border-gray-800 rounded-2xl">
          <div className="grid gap-6 sm:grid-cols-3 ">
            <div className=" card">
              <div className="flex justify-center mb-3">
                <CodeBracketIcon className="w-20 h-20 " />
              </div>
              <h2 className="mb-2 text-2xl text-purple-500">
                HTML5/CSS Development
              </h2>
              <p>
                Interactive elements using W3C standard & cross-browser
                compatibility coding standards to put wind in your digital
                sails.
              </p>
            </div>
            <div className="card ">
              <div className="flex justify-center mb-3">
                <RocketLaunchIcon className="w-20 h-20 " />
              </div>
              <h2 className="mb-2 text-2xl text-purple-500">
                Custom Web App Development
              </h2>
              <p>
                Clean codes and a customized approach to infuse creativity and
                interactivity into your web portals.
              </p>
            </div>
            <div className="card ">
              <div className="flex justify-center mb-3">
                <SquaresPlusIcon className="w-20 h-20 " />
              </div>
              <h2 className="mb-2 text-2xl text-purple-500">
                CMS Design and Development
              </h2>
              <p>
                Set up best-in-class, responsive and robust content management
                systems for your business.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 ">
          <a href="#projects" className="roundedButton">
            Projects <ChevronDownIcon className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
      <div id="projects" className=" section">
        <h2 className="sectionHeading">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 ">
          <div>
            <p className="mb-6">Mini web app with test api</p>
            <p className="mb-1 text-sm opacity-80">This project built with</p>
            <p className="mb-6">
              Node, Next.js, Tailwind CSS, Axios, SWR, Heroicons
            </p>

            <p className="mb-1 text-sm opacity-80">Check github repo</p>
            <p className="mb-6">
              <a
                href="https://github.com/basyoudev/miniapp-nexjs"
                aria-label="Github repo"
                target={"_blank"}
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                https://github.com/basyoudev/miniapp-nexjs
              </a>
            </p>
            <p className="mb-1 text-sm opacity-80">Live demo</p>
            <p>
              <a
                href="https://miniapp-nexjs.vercel.app"
                aria-label="Live demo"
                target={"_blank"}
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                https://miniapp-nexjs.vercel.app
              </a>
            </p>
          </div>
          <div className="card ">
            <a
              href="https://miniapp-nexjs.vercel.app"
              aria-label="Live demo"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img
                className="w-full m-auto border border-purple-500 rounded-xl"
                src="/Screenshot_1.png"
                alt="/Screenshot_1.png"
              />
            </a>
          </div>
        </div>
      </div>
      <div id="contact" className=" section">
        <h2 className="sectionHeading">Contact</h2>
        <div className="text-center">
          <p className="mb-3 opacity-50">Bassam, Frontend developer</p>
          <a
            className="navLink"
            href="https://www.linkedin.com/in/bassamyousef990/"
            aria-label="Linkedin"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            className="navLink"
            href="https://github.com/basyoudev"
            aria-label="Github"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="navLink"
            href="https://web.telegram.org/k/#@bassamyousef990"
            aria-label="Telegram"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </div>
        <div className="flex justify-center mt-6 ">
          <a
            href="#"
            aria-label="Go top page"
            className="hover:text-purple-600"
          >
            <ChevronUpIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </>
  );
}
