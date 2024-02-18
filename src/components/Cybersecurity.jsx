import { Displaycard } from "./Displaycard"

export const Cybersecurity = ({data}) => {
const cybersecurity= data.filter((item)=>item.head === 'Cyber Security')
  return (
    <div>
      <div className="container">
        <div className="row">
            {cybersecurity.map((item,index)=>(
                <div className="col" key={index}>
                    <Displaycard item={item} index={index}/>
                    </div>
            ))}

</div>
    </div>
    </div>
  )
}
