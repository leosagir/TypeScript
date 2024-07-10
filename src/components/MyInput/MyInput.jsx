import './MyInput.css'

export default function MyInput({id, name, label, type, placeholder}){
    return (
        <div className="inputWrapper">
           <label htmlFor={name}>{label}</label> 
           <input 
           id={id}
           name={name}
           type={type}
           placeholder={placeholder}
           className="myInput"
           />
        </div>
    )
}