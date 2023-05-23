import React from 'react'
import Carousel from "react-bootstrap/Carousel";


function BlogSlider() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.choa.org/-/media/Images/Childrens/global/heros/about-us/about-us-main/nurse-and-pediatric-patient-smile-with-funny-glasses-1440x748.jpg?h=748&la=en&w=1440&hash=A97FB48116ACB25A6F6AB270313FD9A76FD8BE98"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/*01*/}
                        <h3>Love and Protect your child</h3>
                        <p>Childers are future of our world </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.choa.org/-/media/Images/Childrens/global/heros/visitors/visiting-our-hospitals/pediatric-patient-hugging-mom-in-hospital-1440x748.jpg?h=748&la=en&w=1440&hash=3798776CD1C058D0DE71D46B8E23D8FA5CA17AF7"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/*02*/}
                        <h3>When Your Child Gets a Concussion</h3>
                        <p>Our site is dedicated to diagnosing and treating concussions.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.choa.org/-/media/Images/Childrens/global/heros/medical-services/child-protection-advocacy-center/child-protection-center-resources/child-protection-advocacy-girl-looking-out-mom-holding-hand-1440x748.jpg?h=748&la=en&w=1440&hash=35459865F02D4869A0C98C5075EA60CB987F7730aviteq.com/blog/wp-content/uploads/2020/07/SmartAgri.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/*03*/}
                        <h3>Safe & Helthy Children</h3>
                        <p>Center promotes safety, protection, and prevention of child abuse.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.choa.org/-/media/Images/Childrens/global/heros/about-us/community-and-government/community-and-government-affairs/boy-looking-out-pediatric-hospital-window-1440x748.jpg?h=748&la=en&w=1440&hash=167A3C197BD396D47E9D82746C6FF8C004F77C9D"
                        alt="Forth slide"
                    />
                    <Carousel.Caption>
                        {" "}
                        {/*04*/}
                        <h3>Nothing Matters More Than Kids</h3>
                        <p>We provide nationally-ranked pediatric care to Georgia's kids and teens.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default BlogSlider