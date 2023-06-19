import React, { useState } from "react";
import {customersData} from "./Customers";
import "./SearchComponent.css"; 
const SearchComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);

    if (inputText.includes("@")) {  
      setShowPopup(true);

      // Filter the customers whose names match the input text



      const filtered = customersData.filter((customer) =>
        customer.name
          .toLowerCase()
          .includes(inputText.toLowerCase().substring(1))
      );
    //   setFilteredCustomers(filtered);

      if(filtered.length)
      {
        setFilteredCustomers(filtered);
      
      
      }else {
        const k=customersData.map((customer) =>
        customer.name
          .toLowerCase()
          
      );
      setFilteredCustomers(k)
      }



    } else {
      setShowPopup(false);
    }
  };

  const handlePopupSelection = (name) => {
    setSearchText(`@${name}`);
    setShowPopup(false);
  };

  return (
    <div class="mainContainer">
      <input type="text" placeholder="Search...." id="inputBox" value={searchText} onChange={handleInputChange} /><br/><br/>

      {showPopup && (
        <div className="popup">
          {filteredCustomers.map((customer) => (  
            <div class="namecont"
              key={customer.id}
              onClick={() => handlePopupSelection(customer.name)}
            
            >
              {customer.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;