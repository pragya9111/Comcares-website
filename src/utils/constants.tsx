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
  FaTwitter
} from 'react-icons/fa';

// Navigation constants
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact Us', path: '/contact-us' }
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