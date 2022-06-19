import { timeStamp } from "console";
import { ChangeEvent, Component } from "react";
import { Navigate } from "react-router-dom";
import PostDataService from "../services/food-post.service";
import FoodPostData from '../types/post.type';
import { Link } from "react-router-dom";
import Logout from '../components/Logout';
import '../styles/AddPost.scss'
import plant2 from '../media/plant.png'
import rollcake from "../media/roll-cake.png"


type Props = {};

type State = FoodPostData & {
  type: string,
  submitted: boolean
};

export default class AddPost extends Component<Props, State> {

  checkedStateRestrict: any;
  restrictions: string[] = ["soy", "dairy", "veg", "nut", "gluten", "vegan"];
  categories: string[] = ["meal", "prod", "dessert", "drink", "snack"];
  types: string[] = ["student", "dining hall", "restaurant"];

  constructor(props: Props) {
    super(props);
    this.savePost = this.savePost.bind(this);
    this.newPost = this.newPost.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeType = this.onChangeType.bind(this);

    this.state = {
      name: "",
      location: "",
      date: "",
      time: "",
      restrict: [],
      person: "",
      contact: "",
      category: "",

      type: "",
      submitted: false
    };
  }

  onChangeCategory(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      category: e.target.value,
    });
  }

  onChangeType(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      type: e.target.value,
    });
  }

  savePost() {
    let data = {
      name: this.state.name,
      location: this.state.location,
      date: this.state.date,
      time: this.state.time,
      restrict: this.state.restrict,
      person: this.state.person,
      contact: this.state.contact,
      category: this.state.category
    };

    PostDataService.create(data, this.state.type)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newPost() {
    this.setState({
      name: "",
      location: "",
      date: "",
      time: "",
      restrict: [],
      person: "",
      contact: "",
      category: "",

      type: "student",
      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        <nav className="navbar navbar-expand">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <p className='navlogo'>let's roll</p>
              <img src={rollcake} className='rollcake' />
            </li>
            <li className="nav-item">
              <div className='logoutbtn'>
                <div className="helper2">
                  <Logout></Logout>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="helper2">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="helper2">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </div>
            </li>
          </div>
        </nav>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newPost}>
              Add Another
            </button>
          </div>
        ) : (
          <form
            // ref={formRef}
            onSubmit={(e: React.SyntheticEvent) => {
              e.preventDefault();
              const target = e.target as typeof e.target & {
                name: { value: string };
                description: { value: string };
                location: { value: string };
                date: { value: string };
                time: { value: string };
                // restrict: { value: string[] };
                person: { value: string };
                contact: { value: string };
                category: { value: string };
              };

              const restrictselected = this.restrictions.filter(
                (r: string, index: number) => {
                  var elem = document.getElementById(r) as HTMLInputElement | null;
                  if (elem != null) {
                    return elem.checked;
                  }
                  else return false;
                });

              const categorySelected = (changeEvent: { target: { value: any; }; }) => {
                this.setState({
                  category: changeEvent.target.value
                });

              }

              this.setState({
                name: target.name.value,
                location: target.location.value,
                date: target.date.value,
                time: target.time.value,
                restrict: restrictselected,
                person: target.person.value,
                contact: target.contact.value,
                category: this.state.category,

                type: this.state.type,
                submitted: true
              }, () => this.savePost());
            }
            }
          >
            
            <div className="formatting">
              <div>
            <img className='plant2' src={plant2} alt='plant2' />
            </div>
              <div className="formcard">
                <p className="head">create new event</p>
                <div className="cols">
                  <div className="firstcol">
                    <p className="colhead">event details</p>
                    <div>
                      <label className="fieldlabel">
                        event name + description:&nbsp;&nbsp;
                        <input type="text" name="name" required />
                      </label>
                    </div>
                    <div>
                      <label className="fieldlabel">
                        location:&nbsp;&nbsp;
                        <input type="text" name="location" required />
                      </label>
                    </div>
                    <div>
                      <label className="fieldlabel">
                        date:&nbsp;&nbsp;
                        <input type="date" name="date" required />
                      </label>
                    </div>
                    <div>
                      <label className="fieldlabel">
                        end time:&nbsp;&nbsp;
                        <input type="time" name="time" required />
                      </label>
                    </div>
                    <div>
                      <label className="fieldlabel">
                        food category:&nbsp;
                        <ul className="category-list">
                          {this.categories.map((name, index) => {
                            return (
                              <li key={index}>
                                <div className="category-list-item">
                                  <input
                                    type="radio"
                                    id={name}
                                    name={name}
                                    value={name}
                                    checked={this.state.category === name}
                                    onChange={this.onChangeCategory}
                                  />
                                  <label htmlFor={name}>{name}</label>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </label>
                    </div>
                    <div className='dietres'>
                      <label className="fieldlabel">
                        dietary restrictions:
                        <ul className="dietary-list">
                          {this.restrictions.map((name, index) => {
                            return (
                              <li key={index}>
                                <div className="dietary-list-item">
                                  <input
                                    type="checkbox"
                                    id={name}
                                    name={name}
                                    value={name}
                                  // checked={this.checkedStateRestrict[index]}
                                  // checked={true}
                                  // onChange={() => this.onChangeRestrict(index)}
                                  />
                                  <label htmlFor={name}>{name}</label>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </label>
                    </div>
                  </div>
                  <div className="secondcol">
                    <p className="colhead">your information</p>
                    <div>
                      <label>
                        your name:&nbsp;&nbsp;
                        <input type="text" name="person" required />
                      </label>
                    </div>
                    <div>
                      <label>
                        who are you posting as?
                        <ul className="type-list">
                          {this.types.map((name, index) => {
                            return (
                              <li key={index}>
                                <div className="type-list-item">
                                  <input
                                    type="radio"
                                    id={name}
                                    name={name}
                                    value={name}
                                    checked={this.state.type === name}
                                    onChange={this.onChangeType}
                                  />
                                  <label htmlFor={name}>{name}</label>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </label>
                    </div>
                    <div>
                      <label>
                        your contact info:&nbsp;&nbsp;
                        <input type="text" name="contact" required />
                      </label>
                    </div>
                    <div>
                      <input className='subbtn' type="submit" value="Create" />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </form>

        )
        }
      </div>

    );
  }
}
function categorySelected(): import("react").ChangeEventHandler<HTMLInputElement> | undefined {
  throw new Error("Function not implemented.");
}

