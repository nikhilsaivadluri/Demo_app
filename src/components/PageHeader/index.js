import React from "react";
import logo from '../../logo.svg';
import SearchBox from '../SearchBox';
import {Container} from './styledComponents';

function PageHeader({onSearch}){
  
    return(<Container>
        <div>
        <img src={logo} alt="logo" height={"100px"} width={"100px"} />
        </div>
        <div>
        <h1> Demo Page</h1>
        </div>
        <div>
        <SearchBox onSearch={onSearch}/>
        </div>
    </Container>)
}
export default PageHeader;