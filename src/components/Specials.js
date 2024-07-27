import React from 'react'
import Special from './Special'
import specials from '../data/specials.json'
const Specials = () => {
  return (
    <section className="special-items">
        <div className="online-menu">
          <span>Specials</span>
          <a href="#online_menu">Online Menu</a>
        </div>

        <div className="menu-items">
            {
                specials.map(special=><Special  key={special.name}
                                                imageUrl={special.imageUrl}
                                                name={special.name} 
                                                price={special.price} 
                                                description={special.description} 
                                                isDelevred={special.isDelevred}/>
                            )}

        </div>
      </section>
  )
}

export default Specials