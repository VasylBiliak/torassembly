import sofa_assembly from '../images/sofa_assembly.png';
import lighting_installation from '../images/lighting_installation.jpg';
import lightbulb_replacement from '../images/lightbulb_replacement.jpg';
import halloween_preparation from '../images/halloween_preparation.jpg';
import furniture_design from '../images/furniture_design.jpg';
import chair_assembly from '../images/chair_assembly.png';
import bed_assembly from '../images/bed_assembly.jpg';
import furniture_repair from '../images/furniture_repair.webp';

export const services = [
    {
        id: 1,
        title: 'Assembly of furniture',
        imgSrc: sofa_assembly,
        price: 100,
        lowPrice: 20,
        highPrice: 200,
        units: 1,
        description: 'High-quality assembly of all types of furniture, including office chairs and computer furniture, at your convenience.'
    },
    {
        id: 2,
        title: 'Assembly of beds of various complexities',
        imgSrc: bed_assembly,
        price: 200,
        lowPrice: 180,
        highPrice: 250,
        units: 1,
        description: 'Professional assembly of beds of various complexities, ensuring stability, comfort, and functionality for every type of bed.'
    },
    {
        id: 3,
        title: 'Office chair and bar stool assembly',
        imgSrc: chair_assembly,
        price: 90,
        lowPrice: 15,
        highPrice: 120,
        units: 1,
        description: 'Professional assembly services for office chairs, computer chairs, and bar stools, ensuring comfort and stability.'
    },
    {
        id: 4,
        title: 'Changing lamps',
        imgSrc: lightbulb_replacement,
        price: 50,
        lowPrice: 20,
        highPrice: 60,
        units: 1,
        description: 'Quick and safe lamp replacement for both residential and commercial properties, providing optimal lighting with minimal hassle.'
    },
    {
        id: 5,
        title: 'Installing lighting and Christmas lights',
        imgSrc: lighting_installation,
        price: 80,
        lowPrice: 30,
        highPrice: 170,
        units: 1,
        description: 'Installation of lighting for homes, offices, or yards, including Christmas garlands that create a warm and festive atmosphere.'
    },
    {
        id: 6,
        title: 'Preparation for Halloween',
        imgSrc: halloween_preparation,
        price: 120,
        lowPrice: 80,
        highPrice: 200,
        units: 1,
        description: 'Get your space ready for Halloween with unique decoration services, adding a festive touch to your holiday setup.'
    },
    {
        id: 7,
        title: 'Furniture design',
        imgSrc: furniture_design,
        price: 250,
        lowPrice: 200,
        highPrice: 2000,
        units: 1,
        description: 'Professional furniture design services using SolidWorks, specializing in 3D modeling to ensure precise and functional furniture design.'
    },
    {
        id: 8,
        title: 'Furniture repair and restoration',
        imgSrc: furniture_repair,
        price: 150,
        lowPrice: 50,
        highPrice: 500,
        units: 1,
        description: 'Comprehensive furniture repair and restoration services, including fixing damaged tables, chairs, broken hinges, and other types of wear and tear. Restore your furniture to its original condition with precision and care.'
    }
];
