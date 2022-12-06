import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons';

const links = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jairotoronovellis',
    icon: <IconBrandLinkedin />,
  },
  {
    label: 'GitHub',
    link: 'https://github.com/jtnovellis',
    icon: <IconBrandGithub />,
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/JairojairtoroN',
    icon: <IconBrandTwitter />,
  },
];

export default function Footer() {
  return (
    <footer className='fixed bottom-0 bg-white w-full'>
      <ul className='flex justify-center items-center px-1'>
        {links.map((item) => (
          <li key={item.label} className='flex p-6'>
            {item.icon}
            <a
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2'
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
