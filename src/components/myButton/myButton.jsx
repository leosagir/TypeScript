import './myButton.css';

export default function MyButton({type, onClick, name='undefinded'}) {
  
  return (
    <button onClick={onClick} className="myButton" type={type}>
      {name}
    </button>
  );
}