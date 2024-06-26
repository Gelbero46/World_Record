import React from 'react'
var data = require('../LocationRecent.js')

const TableData = ({ searchedText }) => {
    const coloum_names = ['Member association', 
                'Male/ Female/ Amateur', 
                'Season', 
                'Season start date', 
                'Season end date', 
                'Registration period 1 - Start', 
                'Registration period 1 - End', 
                'Registration period 2 - Start', 
                'Registration period 2 - End', 
                'Third registration period'
    ]

    return(
        <>
            {searchedText ?
                <table className="table" id="search_result">
                <thead>
                    <tr>
                        <th>S.N</th>
                        {coloum_names.map((coloum_name, index) => {
                            return(
                             <th key={index}>{coloum_name}</th>
                            )
                        })}
                        {/* <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Salary</th> */}
                    </tr>
                </thead>
                <tbody>
                {
                    data.filter((item) => {
                        return searchedText && item.name === searchedText 
                    })
                    .map((data, index)=>{
                        // console.log("HHHHHHHHH", searchedText)
                        return(
                                    ['M', 'F', 'A'].map( (itm) => {
                                        return (
                                            
                                            data.info.filter( (it) => {
                                                return it[0] === itm && it
                                            })
                                            .map((item, index) => {
                                                // console.log(index, item)
                                                return(
                                                    <tr key={index}>
                                                            <td>{index+1}</td>
                                                            <td>{data.name}</td>
                                                       
                                                        {

                                                        }
                                                        {item.map((item_, index_) => {
                                                            // console.log("indexxxx", index_)
                                                            return (
                                                                <td key={index + index_}>{item_}</td>

                                                                    // <td key={index + index_}
                                                                    //     className={`${index_ >5 ? 'bold' : ''}`}>{item_}</td>
                                                            ) 
                                                    }
                                                    )} 
                                                    </tr>
                                                    
            
                                                )
                                            })
                                        )
                                    })

                                    // data.info.map((item, index) => {
                                    //     // console.log(index, item)
                                    //     return(
                                    //         <tr key={index}>
                                    //                 <td>{index+1}</td>
                                    //                 <td>{data.name}</td>
                                               
                                    //             {

                                                 
                                                  
                                    //                 // ['M','F','A'].map( (itm) => {
                                    //                 //     return (
                                    //                 //         item.filter( (item_) => {
                                    //                 //             return item_[0] == itm && item_
                                    //                 //         })
                                    //                 //         .map( (_item_,) => {
                                    //                 //             return (
                                    //                 //                 <td>{_item_}</td>
                                    //                 //             )
                                    //                 //             // return (
                                    //                 //             //       <td key={1 + index_}
                                    //                 //             // className={`${index_ >5 ? 'bold' : ''}`}>{_item_}</td>
                                    //                 //             // )
                                    //                 //         })
                                    //                 //     )
                                    //                 // })
                                    //             }
                                    //             {item.map((item_, index_) => {
                                    //                 // console.log("indexxxx", index_)
                                    //                 return (

                                    //                         <td key={index + index_}
                                    //                             className={`${index_ >5 ? 'bold' : ''}`}>{item_}</td>
                                    //                 ) 
                                    //         }
                                    //         )} 
                                    //         </tr>
                                            
    
                                    //     )
                                    // })
                            
    
                        )
                    })
                }
                </tbody>
            </table>
            : <p className='no--item'>Search a Country</p>
            }
            
    </>
        
    )
}

export default TableData

