import { Result } from "postcss";
import { useRef } from "react";
import Swal from "sweetalert2";

const AddTouristSpot = () => {
    const formRef = useRef(null);
    const handleAddedSpot=e=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const photo = form.get('photo')
        const coutryName = form.get('coutryName')
        const location = form.get('location')
        const description = form.get('description')
        const cost = form.get('cost')
        const seasonality = form.get('seasonality')
        const traveltime = form.get('traveltime')
        const totalVisitor = form.get('totalVisitor')
        const email = form.get('email')
        const name = form.get('name')
        const touristSpot = form.get('touristSpot')
        const visitor = {touristSpot,name,email,totalVisitor,traveltime,seasonality,cost,description,location,coutryName,photo};
        fetch("http://localhost:5000/touristSpots",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(visitor)
        }).then(res=>res.json())
        .then(data => {
            if(data.insertedId){
                formRef.current.reset()
                Swal.fire({
                    icon: "success",
                    title: "Yeah....",
                    text: "Added in Successfull!",
                  });
            }
        })
    }
  return (
    <div className="bg-stone-200 font-montserrat font-bold">
      <form ref={formRef} onSubmit={handleAddedSpot}>
        <div className="grid md:grid-cols-2 gap-6 lg:max-w-5xl p-10 mx-auto mt-10 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Image URL"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tourist Spot Name</span>
            </label>
            <input
              type="text"
              name="touristSpot"
              placeholder="Tourist spot name"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">CoutryName</span>
            </label>
            <input
              type="text"
              name="coutryName"
              placeholder="Country Name"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="location"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="short Description"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Average Cost</span>
            </label>
            <input
              type="text"
              name="cost"
              placeholder="Average Cost"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seasonality</span>
            </label>
            <input
              type="text"
              name="seasonality"
              placeholder="Seasonality"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Travel Time</span>
            </label>
            <input
              type="text"
              placeholder="Travel time"
              name="traveltime"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Total visitor per year</span>
            </label>
            <input
              type="text"
              placeholder="Total visitors per yer"
              name="totalVisitor"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">You Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="User Name"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
        </div>
        <div className="form-control p-10 lg:max-w-5xl mx-auto">
          <button className="btn btn-primary w-full bg-purple-500">
            Add Tourist Spot
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTouristSpot;
