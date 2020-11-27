import React,{Component} from 'react'
import axios from 'axios'
import CandidateDetails from './CandidateDetails';
import {Link} from 'react-router-dom'

class CandidateVerify extends Component{
    constructor(props){
        super(props)

        this.state={
            code: "",
            candidates: [],
            candidate: "",
            bro: "ji"
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:5000/admin/')
            .then(response=>{
                this.setState({
                    candidates: response.data
                })
            })
            .catch(err=> console.log(err))
    }

    onChange(e){
        const {name,value} = e.target;
        this.setState({
            [name] : value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const code = this.state.code;
        console.log(code);

        // axios.post('http://localhost:5000/',code)
        //     .then(res=> console.log(res.data));

        // axios.post('http://localhost:5000/',code)
        //     .then(response=>{
        //         this.setState({
        //             candidate: response.data
        //         })
        //     })
        //     .catch(err=> console.log(err))

        // axios.post('http://localhost:5000/',code)
        //     .then(res=> {console.log(res.data)});

         var currcandidates = this.state.candidates.filter(el => el.code == code);


        // console.log(this.state.candidate);

        // window.location = '/candidate';

        // var currcandidate = this.state.candidates.map((candidate)=>{
        //     return(candidate.code === code ? candidate : "hey")
        // })

        console.log(currcandidates[0]);

        this.setState({
            candidate : currcandidates,
            bro: "ji bhai"
        })

        console.log(this.state.candidate + this.state.bro)
    }

    render(){
        const styled={
            background: "lightBlue",
            textAlign : "center",
            // color : "white",
            border: "4px solid black",
            fontWeight: 200
        }
        const imgstyle={
            textAlign: "left"
        }
        const wrapper={
            textAlign : "center",
            // fontSize : 0
        }
        const imgform = {
            display: "inline-block",
            verticalAlign: "top",
            // fontSize: 100
            padding: 50,
            margin : 10
        }
        const back={
            background: "#FFFAFA"
        }
        const detail={
            boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            maxWidth: 400,
            margin: "auto",
            textAlign: "center",
            fontFamily: "arial"
        }
        const icon={

        }
        return(
            <div style={back}>
                <div class="container inner text-center" style={styled}>
                    <div class="space90"></div>
                     <div style={{textAlign: "left"}}><Link to="/">
                    <img src="https://cdn0.iconfinder.com/data/icons/miscellaneous-5-bold/64/backarrow_arrow_undo_back_fill_small-512.png" width="100px" height="80px" />
                    </Link></div>
                    <h1 class="page-title" style={{color: "white"}}><u>Verify Your Certificate</u></h1>
                    <p class="lead">We are 100% trustable and have blazing fast verification for certificates.</p>
                </div>
                <div style={wrapper}>
                <div style={imgform}>
                <div style={imgstyle}>
                <img style={imgstyle} src="https://givemycertificate.com/style/images/concept/concept1.png" width="400px" alt="" />
                </div>
                </div>
                <div style={imgform}>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <b style={{fontWeight: "bold"}}>
                        <label style={{padding: "12 12 12 0",
  display: "inline-block"}}>Unique Code :</label></b>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.code}
                            name="code"
                            onChange={this.onChange}
                            placeholder="Enter Certificate Id"
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Verify" className="btn btn-primary" 
                        style={styled}
                        />
                    </div>
                </form>
                </div>
                </div>
                {/* <h1>{this.state.code}</h1> */}
                {/* <CandidateDetails code={this.state.code} candidates={this.state.candidates}  /> */}
                {/* <h1>{this.state.candidate[0].event}</h1> */}
                <div style={detail} >
                {this.state.candidate.length>0 ? <CandidateDetails candidates={this.state.candidate[0]} /> : ""}
                </div>
            </div>
        )
    }
}

export default CandidateVerify