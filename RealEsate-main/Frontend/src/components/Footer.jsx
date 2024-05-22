import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="full-row bg-secondary p-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="divider py-40">
                            <div className="row">
                                <div className="col-md-12 col-lg-4">
                                    <div className="footer-widget mb-4">
                                        <div className="footer-logo mb-4"> <a href="#"><img className="logo-bottom" src="assets/images/IMG_0926.PNG" alt="image" height={50} width={50} /></a> </div>
                                        <p className="pb-20 text-white">RealMetrix: Redefining real estate, turning dreams into reality. 
                                        Seamlessly navigate buying, selling, or investing with our expert team. 
                                        We prioritize relationships over transactions, making your dream home our priority.
                                         Your journey, our commitment, every step of the way.</p>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-8">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-4">
                                            <div className="footer-widget footer-nav mb-4">
                                                <h4 className="widget-title text-white double-down-line-left position-relative">Support</h4>
                                                <ul className="hover-text-primary">
                                                    
                                                    <li><a href="#" className="text-white">Terms and Condition</a></li>
                                                    
                                                    <li><a href="contact.php" className="text-white">Contact</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <div className="footer-widget footer-nav mb-4">
                                                <h4 className="widget-title text-white double-down-line-left position-relative">Quick Links</h4>
                                                <ul className="hover-text-primary">
                                                    <li><a href="#" className="text-white">Our Agents</a></li>
                                                    
                                                    <li><a href="#" className="text-white">Submit Property</a></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <div className="footer-widget">
                                                <h4 className="widget-title text-white double-down-line-left position-relative">Contact Us</h4>
                                                <ul className="text-white">
                                                    <li className="hover-text-primary"><i className="fas fa-map-marker-alt text-white mr-2 font-13 mt-1"></i>No.18, Passara Road, Badulla.</li>
                                                    <li className="hover-text-primary"> <i className="fas fa-phone-alt text-white mr-2 font-13 mt-1"></i>+94 054 6578</li>
                                                    
                                                    <li className="hover-text-primary"><i className="fas fa-envelope text-white mr-2 font-13 mt-1"></i>realmetrix@gmail.com</li>
                                                </ul>
                                            </div>
                                            <div className="footer-widget media-widget mt-4 text-white hover-text-primary"> <a href="#"><i className="fab fa-facebook-f"></i></a> <a href="#"><i className="fab fa-twitter"></i></a> <a href="#"><i className="fab fa-google-plus-g"></i></a> <a href="#"><i className="fab fa-linkedin-in"></i></a> <a href="#"><i className="fas fa-rss"></i></a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row copyright">
                    <div className="col-sm-6"> <span className="text-white">© {new Date().getFullYear()} Real Estate Website </span> </div>
                    <div className="col-sm-6">
                        <ul className="line-menu text-white hover-text-primary float-right">
                            <li><a href="#">Privacy & Policy</a></li>
                            <li>|</li>
                            <li><a href="#"> Site Map</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
