import React, { useState } from "react";
import "./Code.css";
import {useEffect} from 'react';

function Code() {




  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const handleChange = (event) => {
    const selectedDate = event.target.value;
    setDob(selectedDate);
    setAge(calculateAge(selectedDate));
  };

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      ageYears--;
    }

    const ageMonths = (12 + monthDifference) % 12;
    const ageDays = dayDifference < 0 ? 30 + dayDifference : dayDifference;

    return { years: ageYears, months: ageMonths, days: ageDays };
  };

  return (
    <>
      
        <div className="card-center">
          <div className="cardContainer">
            <div className="card">
              <p id="heading">Age Calculator</p>
              <div id="date-picker">
                <label
                  htmlFor="dob"
                  style={{ color: "white", fontFamily: "Poppins, sans-serif" }}
                >
                  Date of Birth &nbsp; &nbsp; {" "}
                </label>

                <input
                  style={{ color: "black" }}
                  type="date"
                  name="date"
                  id="date"
                  onChange={handleChange}
                />
              </div>

              {age && (
                <div className="user-data">
                  <div class="container">
                    <div class="box">
                      <span class="title">{age.years}</span>
                      <div>
                        <strong>Years</strong>
                      </div>
                    </div>
                  </div>

                  <div class="container">
                    <div class="box">
                      <span class="title">{age.months}</span>
                      <div>
                        <strong>Months</strong>
                      </div>
                    </div>
                  </div>

                  <div class="container">
                    <div class="box">
                      <span class="title">{age.days}</span>
                      <div>
                        <strong>Days</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
     
    </>
  );
}

export default Code;
