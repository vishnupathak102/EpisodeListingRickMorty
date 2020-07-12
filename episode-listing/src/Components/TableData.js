import React from 'react';

import { Table} from 'react-bootstrap';
import axios from 'axios'


const TableData=({data})=>{


//     useEffect(() => {
//         axios.get(`https://rickandmortyapi.com/api/episode/?page=${currentpage}`)
//   .then(function (response) {
//     // handle success
//      setData(response.data)
//     //  setLoad(false)
//     // alert("In the response")
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//       },[currentpage]);


const TableBody=()=>{
   return (data
    ?
    data.map((x)=>{
        return(
            <tr key={x.episode}>
            <td>{x.episode}</td>
            <td>{x.name}</td>
            <td>{x.air_date}</td>
            </tr>
        )
    })
    : <tr><td colSpan='3'>Loading</td></tr>)
}


    return(
        <div>
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        <TableBody />
        </tbody>
      </Table>
      </div>
  )
}

export default TableData