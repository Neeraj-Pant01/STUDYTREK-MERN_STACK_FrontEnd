import { useEffect, useState } from "react"
import "./buy.css"
import { makeApiRequest } from "../../utils/apiRequest"
import { useParams } from "react-router-dom"

const Buy = () => {
    const [loading, setLoading] = useState(false)
    const [course, setCourse] = useState()

    const {id} = useParams();

    useEffect(()=>{
        const getTheCourse = async () =>{
            const api = makeApiRequest()
            setLoading(true)
            try{
                const response = await api.get(`${process.env.REACT_APP_URI}api/v1/courses/${id}`)
                console.log(response.data)
                setCourse(response.data)
                setLoading(false)
            }catch(err){
                console.log(err)
                setLoading(false)
            }
        }
        getTheCourse()
    },[id])

    return (
        <>
        {
            loading ?
            <div>Loading..</div>
            :
            <div className='buy'>
            <h1>{course?.name}</h1>
            <div className="buy-wrapper">
                <div className="left">
                    <img src={course?.picture || "https://png.pngtree.com/png-clipart/20221020/original/pngtree-online-course-banner-sticker-png-image_8708415.png"} alt="" />
                </div>
                <div className="right">
                    <div className="right-wrapper">
                        <div className="buy-desc">
                            <div className="title">
                                {
                                    course?.desc
                                }
                            </div>
                            <div className="BOTTOM-DESC">
                                {
                                    course?.features.length >0 ?
                                    course?.features.map((f,i)=><b key={i}>{f}</b>)
                                    :
                                    <>
                                    <b> 📚 Comprehensive Learning Material</b><br></br>

                                    <b> 📆 Weekly Test Series</b><br></br>
     
                                   <b>  👨‍🏫Live Recorded Lectures</b><br></br>
     
                                    <b> 🚀 Guidance from Experts</b><br></br>
     
                                    <b> 🧐 Interview-Ready</b>
                                    </>
                                }
                            </div>
                            <p>
                                Join us today and unlock the world of endless learning.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="pay">pay ₹{course?.price}.00/</button>
        </div>
        }
        </>
    )
}

export default Buy
