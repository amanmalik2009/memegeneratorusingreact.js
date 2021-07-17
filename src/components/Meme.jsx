import {useState} from "react";


function Meme ({meme,setMeme}){
    const[form,setForm]=useState({
        template_id: meme.id,
        username: "amanmalik30006",
        password: "Q5jA-?yMBfLCfCM",
        boxes: [],
    });
    const generateMeme= () =>{
        let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        // url+= `&boxes[${index}][text]=${box.text}`;
        console.log(url);
   
        
    
    };
      
   

    return(<div className="meme">
    <img src={meme.url} alt="" />
    <div>
    {[...Array(meme.box_count)].map((_,index) => (
        <input key ={index} type="text"
         placeholder={`meme caption ${index +1}`} 
         onChange={(e) =>{
             const newBoxes=form.boxes;
             newBoxes[index]={text:e.target.value};
             setForm({...form,boxes:newBoxes});
         }}/>
    ))}
    </div>
    <div>
        <button onClick={generateMeme}>generate meme </button>
        <button onClick={() =>{
            setMeme(null);
        }}>chosse templates</button>
    </div>
</div>) 
   

}
export default Meme;