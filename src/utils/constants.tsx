import { FiMail, FiPhone, FiMapPin, FiLayers, FiGrid, FiMonitor, FiBox, FiCpu } from 'react-icons/fi';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import type { NavigationItem, Stat } from '../types';
import {
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaLightbulb,
  FaAward,
  FaGlobe,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaCloud,
  FaHeadset,
  FaLaptopCode,
  FaMobileAlt
} from 'react-icons/fa';
import reactlogo from "../assets/React.png"
import nodejslogo from "../assets/Node.js.png"
import jslogo from "../assets/JavaScript.png"
import tslogo from "../assets/TypeScript.png"
import htmllogo from "../assets/HTML5.png"
import csslogo from "../assets/CSS3.png"
import tailwindlogo from "../assets/Tailwind CSS.png"
import reduxlogo from "../assets/Redux.png"
import expresslogo from "../assets/Express.png"
import awslogo from "../assets/AWS.png"
import figmalogo from "../assets/Figma.png"
import xdlogo from "../assets/Adobe XD.png"

// Navigation constants
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact Us', path: '/contact-us' },
  { label: 'Blog', path: '/blogs' }
];


export const CONTACT_INFO = [
  {
    icon: FiMail,
    title: 'contact@comcares.com',
    subtitle: 'Email',
    href: 'mailto:contact@comcares.com'
  },
  {
    icon: FiPhone,
    title: '+91 9754457120',
    subtitle: 'Phone',
    href: 'tel:+919754457120'
  },
  {
    icon: FiMapPin,
    title: '418, Onam Palaza, AB Road, Indore, 452001, MP, India',
    subtitle: 'Location',
    href: 'https://maps.google.com/?q=418+Onam+Palaza+AB+Road+Indore'
  }
];

export const SERVICE_CATEGORIES = ['UI/UX Design', 'App Development', 'Web Development', 'Other'];

export const productDescriptions = [
  'Create interactive data visualizations',
  'Monitor team performance metrics',
  'Advanced customer segmentation',
  'Deep insights and analytics'
];

export const serviceDescriptions = [
  'Custom web applications & solutions',
  'iOS & Android app development',
  'User experience & interface design',
  'SEO, social media & digital strategy',
  'Customer support & business solutions'
];

export const ABOUT_VALUES = [
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Integrity",
    description: "We maintain the highest standards of honesty and transparency in every interaction, building trust through consistent ethical practices and open communication."
  },
  {
    icon: <FaStar className="w-8 h-8" />,
    title: "Excellence",
    description: "We pursue perfection in every project, continuously improving our skills and processes to deliver exceptional results that exceed expectations."
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Collaboration",
    description: "We believe in the power of teamwork, fostering strong partnerships with clients and colleagues to achieve shared success and innovation."
  },
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions, constantly pushing boundaries to deliver forward-thinking digital experiences."
  },
  {
    icon: <FaAward className="w-8 h-8" />,
    title: "Quality",
    description: "We are committed to delivering superior quality in every aspect of our work, from code architecture to user experience design."
  },
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: "Global Impact",
    description: "We strive to make a positive difference worldwide, helping businesses across the globe achieve their digital transformation goals."
  }
];

export const ABOUT_STATS: Stat[] = [
  { number: "50+", label: "Projects Completed" },
  { number: "20+", label: "Happy Clients" },
  { number: "3+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" }
];

export const SERVICE_ITEMS = [
  { label: 'Web Development', icon: <FiBox />, to: '/services/web-dev' },
  { label: 'Mobile Apps', icon: <FiGrid />, to: '/services/mobile-apps' },
  { label: 'UI/UX Design', icon: <FiMonitor />, to: '/services/ui-ux' },
  { label: 'Digital Marketing', icon: <FiLayers />, to: '/services/marketing' },
  { label: 'Business Process Outsourcing (BPO)', icon: <TfiHeadphoneAlt />, to: '/services/bpo' }
];

export const PRODUCT_ITEMS = [
  { label: 'Interactive Reports', icon: <FiMonitor />, to: '/products/reports' },
  { label: 'Team Dashboard', icon: <FiGrid />, to: '/products/dashboard' },
  { label: 'Segmentation', icon: <FiLayers />, to: '/products/segmentation' },
  { label: 'Group Analytics', icon: <FiCpu />, to: '/products/analytics' }
];

export const SOCIAL_LINKS = [
  { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
  { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaGithub />, href: '#', label: 'GitHub' }
];

export const HOME_SERVICES = [
  {
    icon: <FaLaptopCode size={32} />,
    title: 'Web Development',
    description: 'Responsive, scalable, and secure web solutions tailored to your business.',
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: 'Mobile Applications',
    description: 'Intuitive and high-performing mobile apps for iOS and Android.',
  },
  {
    icon: <FaHeadset size={32} />,
    title: 'BPO Services',
    description: 'Comprehensive back-office support to streamline your operations.',
  },
  {
    icon: <FaCloud size={32} />,
    title: 'Cloud Solutions',
    description: 'Cloud strategy, migration, and management for seamless scalability.',
  },
];

export const TECH_STACKS = [
  { name: "React", logo: reactlogo, bg: "white", hoverBg: "#0369a1" },
  { name: "Node.js", logo: nodejslogo, bg: "white", hoverBg: "#3f6212" },
  { name: "JavaScript", logo: jslogo, bg: "#facc15", hoverBg: "#ca8a04" },
  { name: "TypeScript", logo: tslogo, bg: "#2563eb", hoverBg: "#1e40af" },
  { name: "HTML5", logo: htmllogo, bg: "#e34c26", hoverBg: "#b91c1c" },
  { name: "CSS3", logo: csslogo, bg: "#2563eb", hoverBg: "#1e40af" },
  { name: "Tailwind CSS", logo: tailwindlogo, bg: "#06b6d4", hoverBg: "#0e7490" },
  { name: "Redux", logo: reduxlogo, bg: "#a78bfa", hoverBg: "#7c3aed" },
  { name: "Express", logo: expresslogo, bg: "#f3f4f6", hoverBg: "#d1d5db" }, // light bg for dark logo
  { name: "AWS", logo: awslogo, bg: "#f59e42", hoverBg: "#b45309" },
  { name: "Figma", logo: figmalogo, bg: "#f24e1e", hoverBg: "#be185d" },
  { name: "Adobe XD", logo: xdlogo, bg: "#ff61a6", hoverBg: "#be185d" }
];
