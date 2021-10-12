import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useHistory } from "react-router-dom";
import Dummy from "./../../DummyData/Dummy";
import LibraryCard from "./../../components/library/LibraryCard";
import SEO from "../../components/helmet/Helmet";

const Library = () => {
  const history = useHistory();
  const onClickView = (id) => {
    history.push(`/viewlibrary/${id}`);
  };
  const onClickDownload = (e, id) => {
    if (e && e.stopPropagation) e.stopPropagation();
    console.log("Download " + id);
  };
  return (
    <div className="library">
      <SEO title={`Library | NU Innovation Tech Hub`} />
      <div className="container">
        <h1 className="header">
          Lib<span>rary</span>
        </h1>
      </div>
      <form>
        <div className="container">
          <div className="search_container">
            <input
              type="text"
              className="library_search"
              placeholder="Search"
            />
            <button type="button" className="primary solid custom">
              <FaSearch />{" "}
            </button>
          </div>
          <div className="year_container">
            <select className="library_year">
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
            </select>
            <button className="primary solid custom">
              <IoIosArrowDropdownCircle />
            </button>
          </div>
        </div>
      </form>
      <div className="container">
        <div className="card_holder">
          {Dummy.library.map((data, index) => (
            <LibraryCard
              key={index}
              img={data.img}
              title={data.title}
              id={data.id}
              onClickView={onClickView}
              onClickDownload={onClickDownload}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
