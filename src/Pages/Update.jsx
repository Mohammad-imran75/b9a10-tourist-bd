import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const spotsData = useLoaderData();
  console.log(spotsData);
  useEffect(() => {
    if (spotsData) {
      setLoading(false);
    }
  }, [spotsData]);
  const {
    touristSpot,
    totalVisitor,
    traveltime,
    seasonality,
    cost,
    description,
    location,
    coutryName,
    photo,
  } = spotsData;
  const handleTouristSpotUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const photo = form.get("photo");
    const coutryName = form.get("coutryName");
    const location = form.get("location");
    const description = form.get("description");
    const cost = form.get("cost");
    const seasonality = form.get("seasonality");
    const traveltime = form.get("traveltime");
    const totalVisitor = form.get("totalVisitor");
    const touristSpot = form.get("touristSpot");
    const _id = spotsData._id;
    console.log(touristSpot,
        totalVisitor,
        traveltime,
        seasonality,
        cost,
        description,
        location,
        coutryName,
        photo,)
    const Updatevisitor = {
      touristSpot,
      totalVisitor,
      traveltime,
      seasonality,
      cost,
      description,
      location,
      coutryName,
      photo,
    };
    fetch(`http://localhost:5000/touristSpots/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Updatevisitor),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          formRef.current.reset();
          Swal.fire({
            icon: "success",
            title: "Yeah....",
            text: "Added in Successfull!",
          });
        }
      });
  };
  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="bg-stone-200 font-montserrat font-bold">
      <form ref={formRef} onSubmit={handleTouristSpotUpdate}>
        <div className="grid md:grid-cols-2 gap-6 lg:max-w-5xl p-10 mx-auto mt-10 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
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
              defaultValue={touristSpot}
              placeholder="Tourist spot name"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">CountryName</span>
            </label>
            <input
              type="text"
              name="coutryName"
              defaultValue={coutryName}
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
              defaultValue={location}
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
              defaultValue={description}
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
              defaultValue={cost}
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
              defaultValue={seasonality}
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
              defaultValue={traveltime}
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
              defaultValue={totalVisitor}
              name="totalVisitor"
              className="input input-bordered input-secondary w-full "
              required
            />
          </div>
        </div>
        <div className="form-control p-10 lg:max-w-5xl mx-auto">
          <button className="btn btn-primary w-full bg-purple-500">
            Update Tourist Spot
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
