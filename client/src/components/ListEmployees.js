import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./ListEmployees.css";

// export default class ListEmployees extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employees: [],
//     };
//   }
//   // addEmployee=()=>{
//   //     this.props.history.push("add");
//   // }
//   componentDidMount() {
//     axios.get("/api/bootcamp").then((response) => {
//       console.log(response.data);
//       this.setState((employees = response.data[0]));
//     });
//     // EmployeeService.getEmployees().then((res) => {
//     //   this.setState({ employees: res.data });
//     //   console.log(this.state.employees);
//     // });

//     // axios({
//     //   method: "post",
//     //   url: "http://localhost:8080/api/v1/employees",
//     //   data: {
//     //     id: 2,
//     //     firstName: "Omar123",
//     //     pic: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png",
//     //   },
//     // });
//   }

//   render() {
//     console.log(this.state.employees);
//     return (
//       <div>
//         <h2 className="text-center">Employees List</h2>
//         <div className="row" padding="">
//           <Link to="/add" className="">
//             <Button variant="primary">Add a new Employee</Button>{" "}
//           </Link>
//           {""}
//         </div>
//         <div className="row">
//           <table className="table table-striped table-bordered">
//             <thead>
//               <tr>
//                 <th>Employee First Name</th>
//                 <th>Employee Last Name</th>
//                 <th>Employee Department</th>
//                 <th>Actions</th>
//                 <th>Pic</th>
//                 <th>pic2</th>
//                 <th></th>
//               </tr>
//               {/* <tbody>
//                 {this.state.employees.map((karem) => (
//                   <tr key={karem.id}>
//                     <td>{karem.id}</td>
//                     <td>{karem.location}</td>
//                   </tr>
//                 ))}
//               </tbody> */}
//             </thead>
//           </table>
//         </div>
//         {/* <h2>my Bootcamp details are: {JSON.stringify(this.state.)}</h2> */}
//       </div>
//     );
//   }
// }

export default function ListEmployees() {
  const [myStudent, setMyStudent] = useState({ id: "", name: "", email: "" });
  useEffect(() => {
    axios.get("/api/bootcamp").then((response) => {
      console.log(response.data);
      setMyStudent(response.data[0]);
    });
    return () => {};
  }, []);

  return (
    <div>
      <h2>my Student details are: {JSON.stringify(myStudent)}</h2>
    </div>
  );
}
