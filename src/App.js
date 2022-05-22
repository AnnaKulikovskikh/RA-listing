import './main.css'
import data from './etsy.json'
import Listing from './components/Listing'
import {nanoid} from "nanoid"


function App() {
  console.log(data)
  const cards = data.map(item => {
    return(
      <Listing
        // key={item.data['listing_id']} 
        key={nanoid()}
        data={item}
      />
    )
  })
  return (
    <div className="App">
      {cards}
    </div>
  )
}

export default App;
