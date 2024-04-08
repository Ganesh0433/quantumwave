import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './front.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
	return (
		<>
    
    <div class=" max-w-full container-fluid py-5 my-5">
    <div class="container pt-5">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="col-lg-5 col-md-6 sm:col-span-1 wow fadeIn" data-wow-delay=".3s">
                <div class="h-full relative">
                    <img src="about 1.jpg" class="w-3/3 md:w-75 rounded mb-5 sm:mb-0" alt=""></img>
                    <div class="absolute top-1/4 left-1/4 w-3/3">
                        <img src="about 2.jpg" class="w-full rounded" alt=""></img>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 col-md-6 sm:col-span-1 wow fadeIn" data-wow-delay=".5s">
                <h5 class="text-primary">About Us</h5>
                <h1 class="mb-4">About QuantumWave Agency And Its Innovative IT Solutions</h1>
                <p>Welcome to QuantumWave Agency, the nexus of innovation and boundary-pushing IT solutions. Our dedication to excellence propels us to deliver state-of-the-art services, surpassing your technological needs. With a team of seasoned professionals, we specialize in crafting bespoke systems that seamlessly blend creativity with technology, propelling your business into the future. Embark on a journey of innovation and excellence with QuantumWave Agency, where cutting-edge meets client success.</p>
                <a href="about.html" class="btn-secondary rounded-pill px-5 py-3 text-white">More Details</a>
            </div>
        </div>
    </div>
</div>
    





<div class="max-w-full bg-gray-900 w-full mx-0">
    <div class="container py-10 mx-0 w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div class="px-4">
                <a href="index.html" class="text-white font-bold text-xl mb-4 block">Quantum<span class="text-secondary">Wave</span></a>
                <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.</p>
                <div class="flex mt-4">
                    <a href="#" class="btn-light bg-gray-300 hover:bg-gray-400 text-primary rounded-full w-10 h-10 flex items-center justify-center mr-2"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="btn-light bg-gray-300 hover:bg-gray-400 text-primary rounded-full w-10 h-10 flex items-center justify-center mr-2"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="btn-light bg-gray-300 hover:bg-gray-400 text-primary rounded-full w-10 h-10 flex items-center justify-center mr-2"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="btn-light bg-gray-300 hover:bg-gray-400 text-primary rounded-full w-10 h-10 flex items-center justify-center"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="px-4">
                <a href="#" class="text-green  text-xl">Short Link</a>
                <div class="mt-4 space-y-2">
                    <a href="#" class="block text-gray-300"><i class="fas fa-angle-right text-secondary mr-2"></i>About us</a>
                    <a href="#" class="block text-gray-300"><i class="fas fa-angle-right text-secondary mr-2"></i>Contact us</a>
                    <a href="#" class="block text-gray-300"><i class="fas fa-angle-right text-secondary mr-2"></i>Our Services</a>
                    <a href="#" class="block text-gray-300"><i class="fas fa-angle-right text-secondary mr-2"></i>Our Projects</a>
                    <a href="#" class="block text-gray-300"><i class="fas fa-angle-right text-secondary mr-2"></i>Latest Blog</a>
                </div>
            </div>
            <div class="px-4">
                <a href="#" class="text-secondary text-xl">Help Link</a>
                <div class="mt-4 space-y-2">
                    <a href="#" class="block text-gray-300"><i class="fas fa-angle-right text-secondary mr-2"></i>Terms Of Use</a>
                    <a href="#" class="block text-gray-300"><i class="fas fa-angle-right text-secondary mr-2"></i>Privacy Policy</a>
                    <a href="#" class="block text-gray-300"><i class="fas fa-angle-right text-secondary mr-2"></i>Helps</a>
                    <a href="#" class="block text-gray-300"><i class="fas fa-angle-right text-secondary mr-2"></i>FAQs</a>
                    <a href="#" class="block text-gray-300"><i class="fas fa-angle-right text-secondary mr-2"></i>Contact</a>
                </div>
            </div>
            <div class="px-4">
                <a href="#" class="text-secondary text-xl">Contact Us</a>
                <div class="mt-4 space-y-2">
                    <a href="#" class="block text-gray-300 pb-3 border-b border-primary"><i class="fas fa-map-marker-alt text-secondary mr-2"></i> 123 Street, New York, USA</a>
                    <a href="#" class="block text-gray-300 py-3 border-b border-primary"><i class="fas fa-phone-alt text-secondary mr-2"></i> +123 456 7890</a>
                    <a href="#" class="block text-gray-300 py-3 border-b border-primary"><i class="fas fa-envelope text-secondary mr-2"></i> info@example.com</a>
                </div>
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between mt-5">
            <span class="text-gray-300">Quantum Waveit, All rights reserved.</span>
            <span class="text-gray-300 md:ml-auto">IN ASSOCIATION WITH: <a href="https://digifrills.in" class="text-secondary">DIGIFRILLS</a></span>
        </div>
    </div>
</div>

		</>
	);
}
