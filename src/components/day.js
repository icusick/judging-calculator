import React, { Component } from 'react';
import ToggleBox from './toggle.js'

class Day extends Component {
  render() {
    return (
      <div>
      <div className="day">
        <div class="card">
        <div class="card-header">Day 1</div>
          <div class="card-body">

              <ul class="list-group list-group-flush">

                  <li class="list-group-item">
                  <ToggleBox title="Number of Sessions">

                    <div class="row sessions-open">
                      <div class="col">
                        <div class="form-group">
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
                            <label class="form-check-label" for="inlineRadio1">1</label>
                          </div>

                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" />
                            <label class="form-check-label" for="inlineRadio2">2</label>
                          </div>

                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" />
                            <label class="form-check-label" for="inlineRadio3">3</label>
                          </div>

                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="4" />
                            <label class="form-check-label" for="inlineRadio3">4</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    </ToggleBox>
                  </li>

                <li class="list-group-item">
                  <ToggleBox title="Mileage">
                    <div class="row mileage-open">
                      <div class="col extra-padding">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Change mileage" />
                        </div>
                      </div>
                    </div>
                  </ToggleBox>
                </li>

                <li class="list-group-item">
                  <ToggleBox title="Diem">

                  <div class="row diem-open">
                  <div class="col">
                    <div class="form-group">
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="1" />
                        <label class="form-check-label" for="inlineRadio1">Breakfast</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="2" />
                        <label class="form-check-label" for="inlineRadio2">Lunch</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="3" />
                        <label class="form-check-label" for="inlineRadio3">Dinner</label>
                      </div>
                    </div>
                  </div>
                  </div>
                  </ToggleBox>
                </li>

                <li class="list-group-item">
                  <ToggleBox title="Other">
                    <div class="row other-open">
                      <div class="col extra-padding">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Other expenses" />
                        </div>
                      </div>
                    </div>
                  </ToggleBox>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="add-day"><span><i class="fas fa-plus-circle"></i></span> Add Day</div>
      </div>
    );
  }
}

export default Day;
