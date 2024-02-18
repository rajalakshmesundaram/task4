import { Displaycard } from "./Displaycard"

export const All = ({data}) => {
  return (
   
        <div className='container'>
            <div className="row mt-5">
        {data.map((item,index)=>(
            
            
                <div className="col-sm-6 col-lg-3 mb-3 mb-sm-0" key={index}>
                <Displaycard item={item}  index={index}/>
                </div>
           ))}

    </div>
        </div>
  )
}
