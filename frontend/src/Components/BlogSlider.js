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
                        <h3>A Greener Future</h3>
                        <p>Sustainable Farming Practices That Work</p>
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
                        <h3>Precision Farming</h3>
                        <p>Growing More with Less</p>
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
                        <h3>The Future of Farming</h3>
                        <p>The Future of Farming is Here: Embrace Smart Agriculture</p>
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
                        <h3>Growing Smarter</h3>
                        <p>How Our Technology is Changing the Game</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default BlogSlider