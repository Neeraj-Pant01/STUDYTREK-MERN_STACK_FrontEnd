import "./buy.css"

const Buy = () => {
    return (
        <div className='buy'>
            <h1>JAVA PROGRAMMING</h1>
            <div className="buy-wrapper">
                <div className="left">
                    <img src="/assets/edu1.jpg" alt="" />
                </div>
                <div className="right">
                    <div className="right-wrapper">
                        <div className="buy-desc">
                            <div className="title">                        Are you ready to embark on a transformative journey into the world of Java programming? Look no further! Our Java course is not just another online class; it's an immersive learning experience designed to propel you to mastery. Here's what sets us apart:</div>
                            <div className="BOTTOM-DESC">

                               <b> 📚 Comprehensive Learning Material</b><br></br>

                               <b> 📆 Weekly Test Series</b><br></br>

                              <b>  👨‍🏫Live Recorded Lectures</b><br></br>

                               <b> 🚀 Guidance from Experts</b><br></br>

                               <b> 🧐 Interview-Ready</b>
                            </div>
                            <p>
                                Join us today and unlock the world of Java like never before. <span className="DESC-LAST">Together, we'll write the code to your success!
                                    </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="pay">pay ₹499.00/</button>
        </div>
    )
}

export default Buy
