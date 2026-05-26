import { useState} from "react";
import { Theme } from "./ThemeContent"; 
export  const  Mode = ({children} ) =>{
    const[ theme, settheme] = useState("light")
    console.log('dnk',theme)



return(
    <Theme.Provider value={{theme,settheme}}>
 {children}
    </Theme.Provider>
)
}