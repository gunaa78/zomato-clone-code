import { useState } from "react";
function Key(){
  const [input, setInput] = useState("");
  const [words, setWords] = useState([]);
const handleAdd = () => {
    if (input.trim()  !== "   ") {
      setWords([...words, input.trim()]); 
      setInput(""); 
    }

  };
  console.log(words,'jvv')
  console.log(input,'dasd')


    return(
      <div className="pt-4" >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something"
      />

      <button onClick={handleAdd}>Add</button>

      
      <div  className="pt-4" >
        {words.map((word, index) => (
          <p key={index}>{word}</p>
        ))}
      </div>
    </div>




    )

}

export default Key;