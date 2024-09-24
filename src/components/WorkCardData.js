import card1 from '../assets/Card1Img.jpg';
import card2 from '../assets/Q4-Assembled.png';
import card3 from '../assets/Card3Img.png';
const ProjectCardData = [
    {
        imgsrc: card2,
        title: "Quadruped Arduino Bot",
        text: "Created from scratch using 3D printed parts and ordered components, uses a mini Arduino V3 to control the servos. ",
        view: "https://jovani-reyes-arduino.vercel.app/"
    },
    {
        imgsrc: card3,
        title: "Raspberry Pi Ultrasound Object Detection",
        text: "A simple implementation of object detection using a Raspberry Pi and an ultrasound sensor.",
        view: "../../../RPiWebsite/Home.html"
    },
    {
        imgsrc: card1,
        title: "Conway's Game of Life",
        text: "An implementation of Conway's Game of Life using C++ ",
        view: "blank"
    }
]
export default ProjectCardData;