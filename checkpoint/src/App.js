import  BasicExample from './Component/Cards/card1'
import  BodyOnlyExample from './Component/Cards/cards2'
import BodyShorthandExample from './Component/Cards/cards3'
import FormDisabledExample from './Component/Form/form'
import  ColorSchemesExample from './Component/Navbar/Navbar'
import './App.css'



        function App ()  {
        return(
            <>
                <div className='app'>
                < ColorSchemesExample/>
                <h2>Damilola Adio POrtfolio</h2>
                < BasicExample/>
                < BodyOnlyExample/> 
                < BodyShorthandExample/>
                < FormDisabledExample/>
                </div> 
            </>
            
        
        )
    }







export default App