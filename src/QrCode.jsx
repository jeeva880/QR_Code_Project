import { createElement, useState } from "react"

export const QrCode = () => {
    const [img,setImg] =useState("");
    const [loading,setLoading] =useState(false);
    const [qrdata,setQrdata]=useState("jeevanantham");
    const [qrsize,setQrSize]=useState("150");

    async function generateQR(){
        setLoading(true)
        try {
           const url= `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
           setImg(url);
        } catch (error) {
            console.error("Error generating QR code",error)
        }finally{
            setLoading(false)
        }
    }

    function dowloadQR() {
        fetch(img).then((response)=>response.blob())
        .then((blob)=>{
            const link=document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="QrCode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error)=>{console.error("Dowload Error QR Code",error);
        });
    }
    return (
    <div className="app-container">
        <h2>QR Code Generator</h2>
        {loading &&<p>please wait..</p>}
       {img && <img src={img} className="image" />}
        <div>

            <label htmlFor="datainput" className="input-label">
            Data for QR Code
            </label>
            <input type="text" value={qrdata} className="input" id="datainput" placeholder="Enter the Qr code"
            onChange={(e)=>setQrdata(e.target.value)} />

            <label htmlFor="sizeinput" className="input-label">
            Image size (eg..150)
            </label>
            <input type="text" value={qrsize} className="input"  id="sizeinput" placeholder="Enter the Image Size"
            onChange={(e)=>setQrSize(e.target.value)}  />
        
        <button className="generator-btn" onClick={generateQR} disabled={loading}>Generator QR Code</button>
        <button className="dowloade-btn" onClick={dowloadQR}>Dowloade QR Code </button>
        </div>
        </div>
  )
}
