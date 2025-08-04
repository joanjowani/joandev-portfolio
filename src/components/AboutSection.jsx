import {Brain, Briefcase, Code, Smartphone, User} from 'lucide-react';

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-24 relative">
            <div className="contain mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/*Left Column: Personal Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            A Fresh Computer Science Graduate
                        </h3>
                        <p className="text-muted-foreground text-justify">
                            Who finds coding both challenging yet deeply rewarding. 
                            My passion lies in UI design and full-stack development,
                            with a particular enthusiasm for creating AI applications 
                            that make a meaningful difference in people's lives.
                        </p>

                        <p className="text-muted-foreground text-justify">
                            Drawing from my expertise in Python, Flutter, Java, and C, 
                            I specialize in AI and mobile development while exploring diverse 
                            areas from computer vision and OCR to comprehensive web development 
                            projects. This technical foundation allows me to craft seamless 
                            user interfaces and tackle complex backend systems with equal 
                            confidence, bringing patience, adaptability, and an eagerness to 
                            continuously learn and grow.
                        </p>

                        <p className="text-muted-foreground text-justify">
                            Beyond technical skills, I thrive in collaborative environments 
                            where I can contribute to team success. I approach every challenge 
                            as an exciting opportunity to expand my abilities and make a positive 
                            impact through technology.
                        </p>      

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            {/* <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>                         */}

<a
  href="/projects/Joan-CV.pdf"
  download
  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
>
  Download CV
</a>


                        </div>                 
                    </div>
                    {/* Right Column: Skills */}
                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                    <Smartphone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Mobile Development</h4>
                                        <p className="text-muted-foreground">
                                            Creating cross-platform mobile applications using Flutter and Dart 
                                            with modern UI components and real-time data processing capabilities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Full-Stack Development </h4>
                                        <p className="text-muted-foreground">
                                            Building scalable web applications using Spring Boot, React, and MySQL 
                                            with experience in large-scale ERP systems and API development.
                                        </p>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                    <Brain className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> AI & Computer Vision</h4>
                                        <p className="text-muted-foreground">
                                            Specializing in artificial intelligence and computer vision solutions,
                                            including OCR systems, object detection, and NLP for assistive technologies.
                                        </p>
                                    </div>                                    
                                </div>
                            </div>                          
                        </div>                  
                </div>
            </div>
        </section>
    );
};

