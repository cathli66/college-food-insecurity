import { ChangeEvent, Component } from "react";
import { Navigate } from "react-router-dom";
import PostDataService from "../services/food-post.service";
import FoodPostData from '../types/post.type';

type Props = {};

type State = FoodPostData & {
  submitted: boolean
};

export default class AddPost extends Component<Props, State> {

  checkedStateRestrict: any;
  restrictions: string[] = ["soy", "dairy", "veg", "nut", "gluten", "vegan"];
  categories: string[] = ["meal", "prod", "dessert", "drink", "snack"];

  constructor(props: Props) {
    super(props);
    this.savePost = this.savePost.bind(this);
    this.newPost = this.newPost.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);

    this.state = {
      name: "",
      description: "",
      location: "",
      date: "",
      time: "",
      restrict: [],
      person: "",
      contact: "",
      category: "",

      submitted: false
    };
  }

  onChangeCategory(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      category: e.target.value,
    });
  }

  savePost() {
    let data = {
      name: this.state.name,
      description: this.state.description,
      location: this.state.location,
      date: this.state.date,
      time: this.state.time,
      restrict: this.state.restrict,
      person: this.state.person,
      contact: this.state.contact,
      category: this.state.category
    };

    PostDataService.create(data)
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
      description: "",
      location: "",
      date: "",
      time: "",
      restrict: [],
      person: "",
      contact: "",
      category: "",


      submitted: false,
    });
  }






  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newPost}>
              Add
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
                description: target.description.value,
                location: target.location.value,
                date: target.date.value,
                time: target.time.value,
                restrict: restrictselected,
                person: target.person.value,
                contact: target.contact.value,
                category: this.state.category,

                submitted: true
              }, () => this.savePost());
            }
            }
          >
            <div>
              <label>
                Event Name:
                <input type="text" name="name" required />
              </label>
            </div>
            <div>
              <label>
                Description:
                <input type="text" name="description" required />
              </label>
            </div>
            <div>
              <label>
                Location:
                <input type="text" name="location" required />
              </label>
            </div>
            <div>
              <label>
                Date:
                <input type="date" name="date" required />
              </label>
            </div>
            <div>
              <label>
                End Time:
                <input type="time" name="time" required />
              </label>
            </div>
            <div>
              <label>
                Food Category:
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
            <div>
              <label>
                Dietary Restrictions:
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
            <div>
              <label>
                Your Name:
                <input type="text" name="person" required />
              </label>
            </div>
            <div>
              <label>
                Your Contact Info:
                <input type="text" name="contact" required />
              </label>
            </div>
            <div>
              <input type="submit" value="Create" />
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

