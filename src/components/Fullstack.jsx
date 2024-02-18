import { Displaycard } from "./Displaycard"

export const Fullstack = ({data}) => {
    const fullstackdata= data.filter((item)=> item.head === 'Full Stack Development'
    )
  return (
    
    <div className="container">
        <div className="row">
            {fullstackdata.map((item,index)=>(
                <div className="col" key={index}>
                    <Displaycard item={item} index={index}/>
                    </div>
            ))}

</div>
    </div>
    
  )
}
