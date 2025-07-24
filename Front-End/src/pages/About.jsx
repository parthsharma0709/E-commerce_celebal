import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1={"ABOUT"} text2={"US"} />
            </div>
            <div className="my-10 flex flex-col md:flex-row gap-16" >
               <img className="w-full max-w-md" src={assets.about_img} alt="" />
               <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600" >
                    <p> At Forever, we believe shopping should be effortless, enjoyable, and inspiring. Our mission is to bring you a carefully curated collection of products that blend quality, value, and style — all in one seamless online experience. From the moment you land on our site to the time your order arrives at your doorstep, we’re committed to making every part of your journey smooth and satisfying. </p>
                    <p> We partner with trusted brands and suppliers to ensure that every item meets our standards of excellence. Whether you're browsing the latest fashion, essentials for your home, or unique finds, ForeverYou is here to offer a handpicked selection tailored to your lifestyle. Customer satisfaction is at the heart of what we do — because at ForeverYou, it’s not just about products, it’s about people. </p>
                    <b className="text-gray-800">Our Mission</b>
                    <p>At Forever, our mission is to create a seamless and inspiring shopping experience that empowers individuals to express their unique style and personality. We are committed to offering high-quality, thoughtfully curated products that blend functionality with design. By prioritizing customer satisfaction, sustainability, and innovation, we aim to become a trusted part of our customers' everyday lives — not just a store, but a brand they can believe in.</p>
               </div>
            </div>
            <div className="text-xl py-4">
                 <Title text1={"WHY"} text2={"CHOOSE US?"} />
            </div>
            <div className="flex flex-col md:flex-row text-sm mb-20">
              <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                       <b>Quality Assurance</b>
                       <p  className="text-gray-600">Meticulously select and test each product to ensure it meets our stringent quality standards.</p>
              </div>
              <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                       <b>Convenience</b>
                       <p className="text-gray-600">With our user-friendly interface and hassle-free ordering process, shopping doesn't seem like climbing on a mountain.</p>
              </div>
              <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                       <b>Exceptional Customer Service</b>
                       <p className="text-gray-600">Our team of experienced professionals is here to assist you the way you like, ensuring your comfort and ease.</p>
              </div>
            </div>
            <NewsletterBox />
        </div>
    )
}

export default About;