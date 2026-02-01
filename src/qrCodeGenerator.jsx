import { useState } from "react"
import "./qrCodeGenerator.css"

export const QrCodeGenerator = () => {
  const [img,setImg]=useState("");
  const [loading,setLoading]=useState(false);
  const [qr_data,set_Qr_data]=useState();
  const [qr_size,set_Qr_size]=useState()

  async function generate_Qr(){
    setLoading(true)

    try{
    const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qr_size}x${qr_size}&data=${ encodeURIComponent(qr_data)}`
    setImg(url)
    

    }catch(error){
      console.error("error while getting Qr : "+error)

    }finally{
      setLoading(false)

    }
  }


  function download_qr(){
    fetch(img).then((response)=>response.blob()) 


    .then((blob)=>{
      const link=document.createElement("a");

      link.href=URL.createObjectURL(blob); 

      link.download="qr.png" 

      document.body.appendChild(link)

      link.click() 

      document.body.removeChild(link)

    }).catch((error)=>{
      console.log("error while downloading qr_code : "+error);
      
    })

    
  }

  return (
    <div className="container">
        <h1>Qr code generator</h1>
        { loading && <p>please wait...</p>}
       {img && <img src={img} alt="" />}
        <div>
            <label htmlFor="qr_data">Enter url for Qr-code : </label>
            <input type="text" id="qr_data" value={qr_data} onChange={(e)=>set_Qr_data(e.target.value)} placeholder="Enter Qr data"/>
            <label htmlFor="qr_size">Enter Qr code size :</label>
            <input type="number" id="qr_size" value={qr_size} onChange={(e)=>set_Qr_size(e.target.value)} placeholder="Enter Qr size"/>
            <button className="generate_btn" disabled={loading} onClick={generate_Qr}>Generate Qr Code</button>
            <button className="download_qr" onClick={download_qr}>Download Qr Code</button>

        </div>
        <p style={{textAlign:"center",color:"#666",marginTop:"20px",fontSize:"12px"}}>Designed by Ajith Kumar</p>

    </div>
  )
}