Graduate of BSc Information Technology (IT) from Universiti Teknologi PETRONAS (UTP). Deeply passionate about web application development. Always be an active, dependable and open minded in continuing learning and experiencing challenges. I thrive in dynamic environments, pride myself on adaptability, and see challenges as opportunities for growth and innovation.

With industrial experience in technical support and customer relationship management, I have a good foundation in communication. Worked on several accomplished projects, including the development of a construction company's website, a retail website for clocks and watches, a billing system, and automation solutions for finance-related processes. My skills include Python, HTML, CSS, JavaScript, VBA, Java, and MySQL.

Currently, I'm expanding my skill set by exploring modern web development frameworks like Angular and React, which are in high demand in the industry.I am eager to utilize my skills and knowledge to contribute positively to any institution I'm a part of. Whether it's creating user-friendly web applications, optimizing existing systems, or collaborating with a team to find innovative solutions, I'm committed to making a meaningful impact and helping organizations achieve their goals.

#F8F7F1

const preControls = useAnimation()
const aftControls = useAnimation()

useEffect(() => {
preControls.start("hidden")
aftControls.start("hidden")
}, [preControls, aftControls])

const sequence = async () => {
await preControls.start("show")
return aftControls.start("show")
}

<motion.img src="./about-2.svg" alt="" variants={floatIng(1, 1.6)} className={css.about_img_2} />

.about_img_1{
@media (max-width: $sm), (max-width: $md) {
width:11rem;
margin-left:3rem;
margin-top: -2rem;
}

                width: 15rem;
                margin-left: -3rem;
                margin-top: 5rem;
                filter: drop-shadow(6px 8px 2px rgb(0 0 0 / 0.5));

            }

            .about_img_2{
                @media (max-width: $sm), (max-width: $md) {
                    width: 9rem;
                    margin-left: -1rem;
                    margin-top: 8rem;
                }

                width: 12rem;
                margin-left: 7rem;
                margin-top: -3rem;
                filter: drop-shadow(6px 8px 2px rgb(0 0 0 / 0.5));
            }
