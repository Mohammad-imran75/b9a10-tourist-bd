import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListSingleSpot = ({ spot }) => {
//   console.log(spot);
  const [spots,setSpots] = useState(spot);
  const {_id,photo,location,touristSpot,coutryName}= spots;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/touristSpots/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
            });
              const remaining = spot.filter(spo => spo._id !== _id)
              setSpots(remaining)
            }
          });
      }
    });
  };
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="table">
         
          <tbody>
            {/* row */}
            <tr>
              <td className="align-middle">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{touristSpot}</div>
                    <div className="text-sm font-bold opacity-50">{coutryName}</div>
                  </div>
                </div>
              </td>
              <td>{location}</td>
              <th>
                <Link to={`/update/${_id}`}>
                  <button className="btn btn-secondary bg-stone-900">
                    Update
                  </button>
                </Link>
              </th>
              <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-secondary bg-purple-400">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListSingleSpot;
