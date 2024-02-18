import { Displaycard } from "./Displaycard"

export const Career = ({data}) => {
  const careerdata=data.filter((item)=> item.head === 'career')
  return (
    <div className="container">
        <div className="row">
            {careerdata.map((item,index)=>(
                <div className="col" key={index}>
                    <Displaycard item={item} index={index}/>
                    </div>
            ))}

</div>
    </div>
  )
}
