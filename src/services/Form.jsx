import { Form, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";



const SearchForm = () => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {

    setInputValue(event.target.value);
  };

  const handleClear = () => {
    setInputValue(""); // Clear the input field
  };

  return (

    <>
      
        <Form><br></br>
            <InputGroup size="sm">
                <Form.Control type="text" placeholder="Artisan" className="custom-input me-2" value={inputValue} onChange={handleInputChange}/>
                <Link to={`/artisans/nom/${inputValue}`}>
                <Button type="submit" className="custom-button" onClick={handleClear}><svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 
                1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg></Button>
                </Link>
            </InputGroup>
        </Form>
        

  </>
    
  
  )
}

export default SearchForm;
