import './style/Displaycard.css'
export const Displaycard = ({item , index}) => {
  return (
    
        
        <div className="card" >
  <img src= {item.image}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.head}</h5>
    <p className="card-text">{item.content}</p>
    
  </div>
</div>

   
  )
}
