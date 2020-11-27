// import React,{Component} from 'react'
// import {Link} from 'react-router-dom'
// import axios from 'axios'

// class CandidateDetails extends Component{
//     constructor(props){
//         super(props)

//         this.state={
//             candidate:{}
//         }
//     }

//     componentDidMount(){
//         axios.get('http://localhost:5000/verify/')
//             .then(response=>{
//                 this.setState({
//                     candidate: response.data
//                 })
//             })
//             .catch(err=> console.log(err))
//     }

//     render(){
//         return(
//             <div>
//                 <h3>Candidate Details</h3>
//                     <table className="table">
//                         <thead className="thead-light">
//                             <tr>
//                                 <th>Code</th>
//                                 <th>Name</th>
//                                 <th>Event</th>
//                                 <th>Date</th>
//                                 <th>Month</th>
//                                 <th>Year</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                                 <tr>
//                                     <td>{this.state.candidate.code}</td>
//                                     <td>{this.state.candidate.name}</td>
//                                     <td>{this.state.candidate.event}</td>
//                                     <td>{this.state.candidate.date}</td>
//                                     <td>{this.state.candidate.month}</td>
//                                     <td>{this.state.candidate.year}</td>
//                                 </tr>
//                         </tbody>
//                     </table>
//             </div>
//         )
//     }
// }

// export default CandidateDetails


// function Product(props){
//     // const candidateComponents = props.candidates.map((prod) =>{
//     //     if(prod.code === props.code){
//     //     return{
//     //         ...prod
//     //     }
//     // }
//     // return prod
//     // })
//     // console.log(candidateComponents);
//     // // return(
//     // //     <div>
//     // //         {candidateComponents.event}
//     // //     </div>
//     // //)
//     return(
//         // <h1>{candidateComponents.event}</h1>
//         <h1>Hello</h1>
//     )
// }

// export default Product



    function CandidateDetails(props){
        const styled={
            textAlign : "left",
            alignItems : "left"
        }
        const imgform = {
            display: "inline-block",
            verticalAlign: "left",
            paddingRight : "0 50 0 0",
            // fontSize: 100
            // padding: 50,
            // margin : 10
        }
        return(
            <div>
            <img src="https://www.givemycertificate.com/assets/img/logo.png" alt="Provider logo" />
            <div style={styled , imgform}>
            <img src="https://i.ya-webdesign.com/images/transparent-check-animated.gif" alt="Verified" width="430" />
            </div>
                <h1>{props.candidates.name}</h1>
            <h3>Has participated in <b>{props.candidates.event}</b> Organized On {props.candidates.month}, {props.candidates.date} {props.candidates.year}</h3>
            </div>
        )
    }

export default CandidateDetails


