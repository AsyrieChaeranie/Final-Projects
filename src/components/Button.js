const Button = ({handleSelect, Selected, uri}) => {
    return (
       <button className=
        { Selected? 'selected' : 'unselected' }
        onClick = {() => handleSelect(uri)} >
        { Selected ? 'Delete' : 'Select'}
    </button>
    );
  };

  export default Button;