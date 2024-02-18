import { Displaycard } from "./Displaycard"

export const Datascience = ({data}) => {
 const datascience= data.filter((item)=> item.head === 'Data Science'
    )
  return (
    
    <div className="container">
        <div className="row">
            {datascience.map((item,index)=>(
                <div className="col" key={index}>
                    <Displaycard item={item} index={index}/>
                    </div>
            ))}

</div>
    </div>
  )
}
