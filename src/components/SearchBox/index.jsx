import React, { useState } from "react";
import { ClearButton, Container, SearchButton, SearchInput } from './styledComponents';

function SearchBox({onSearch}){

    const [searchTerm, setSearchTerm] = useState("");

    const onClear=()=>{
        setSearchTerm("");
        onSearch("");
    }

    return(<Container>
        <div><SearchButton onClick={()=>onSearch(searchTerm)}>Search</SearchButton></div>
        <div><SearchInput type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} /></div>
        <div><ClearButton onClick={onClear}>Clear search</ClearButton></div>
    </Container>)
}
export default SearchBox;