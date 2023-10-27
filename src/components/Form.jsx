
import { useState } from "react";
function Form({ addProduct }) {
  const [newProduct, setNewProduct] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProduct.trim() !== '') {
      addProduct(newProduct);
      setNewProduct('');
      setShowInput(false); 
    }
  }

  const handleButtonClick = () => {
    setShowInput(true); 
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {showInput && (
          <>
            <input
              type="text"
              name=""
              id=""
              value={newProduct}
              onChange={(e) => setNewProduct(e.target.value)}
            />
            <button type="submit"><i className="fa fa-plus"></i></button>
            
          </>
        )}
        {!showInput && (
         <div className="add-btn"><button type="button" onClick={handleButtonClick}>
         <i className="fa fa-plus"></i>
       </button></div> 
        )}
      </form>
    </div>
  );
}

export default Form;