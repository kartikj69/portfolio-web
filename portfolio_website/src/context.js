import React, {Component} from "react";
import axios from "axios"
const Context = React.createContext();

export class Provider extends Component{
    handler = (action,newObject) =>{
        switch (action){
            case "ADD_PROJECT":
                this.setState({
                    projects:[newObject, ...this.state.projects],
                });
                break;
            case "ADD_BLOG":
                this.setState({
                    blogs:[newObject, ...this.state.blogs],
                });
                break;
            case "ADD_RECOMM":
                this.setState({
                    recomms:[newObject, ...this.state.recomms],
                });
                break;   
            default:
                break;
        }
        
    };

    state= {
        handler: this.handler,
        blogs  :[
            {
              id: 1,
              title: "Blog 1",
              imageURL:
                "https://i.postimg.cc/PxmZqM6N/free-stock-image-3.jpg",
              excerpt: "This is my blog about...",
              body: "set",
            },
            {
              id: 2,
              title: "Blog 2",
              imageURL:
                "https://i.postimg.cc/j2tfnJ9c/free-stock-image-2.jpg",
              excerpt: "This is my blog about...",
              body: "wet",
            },
            {
              id: 3,
              title: "Blog 3",
              imageURL:
                "https://i.postimg.cc/520wmLtk/free-stock-image-1.jpg",
              excerpt: "This is my blog about...",
              body: "gel",
            },
          ],
        recomms:[
            {
                recom:"He is a good engineer",
                name:"Rand guy 1",
                desig:"CEO at ABC company"
            },
            {
                recom:"He is an excellent developerr",
                name:"Rand guy 2",
                desig:"Director at ABC company"
            },
            {
                recom:"He is a lazy person",
                name:"Rand guy 3",
                desig:"Manager at ABC company"
            },
            {
                recom:"He get's things done so quickly",
                name:"Rand guy 4",
                desig:"SDE at ABC company"
            },
        ],
        projects : [
            {
                id:1,
                title:"Project 1",
                exert:"This is my project about...",
                imageURL:"https://i.postimg.cc/520wmLtk/free-stock-image-1.jpg",
                body: "set",
            },
            {
                id:2,
                title:"Project 2",
                exert:"This is my project about...",
                imageURL:"https://i.postimg.cc/j2tfnJ9c/free-stock-image-2.jpg",
                body: "wet",
            },
            {
                id:3,
                title:"Project 3",
                exert:"This is my project about...",
                imageURL:"https://i.postimg.cc/PxmZqM6N/free-stock-image-3.jpg",
                body: "gel",
            },
            {
                id:4,
                title:"Project 4",
                exert:"This is my project about...",
                imageURL:"https://i.postimg.cc/PxmZqM6N/free-stock-image-2.jpg",
                body: "set",
            },
        ],
        skills : [
            {
              id: 1,
              name: "HTML5",
              imageUrl:
                "https://i.postimg.cc/Wd0Dh2wx/html5.png",
              starsTotal: 3,
              starsActive: 3,
              color:"text-warning"
            },
            {
              id: 2,
              name: "CSS3",
              imageUrl:
                "https://i.postimg.cc/Cd6n2rKr/css3.png",
              starsTotal: 3,
              starsActive: 3,
              color:"text-warning"
            },
            {
              id: 3,
              name: "Javascript",
              imageUrl:
                "https://i.postimg.cc/SXrJfD5r/javascript.png",
              starsTotal: 3,
              starsActive: 2,
              color:"text-warning"
            },
            {
              id: 4,
              name: "Bootstrap 4",
              imageUrl:
                "https://i.postimg.cc/xNk8YYdx/bootstrap4.pnghttps://i.postimg.cc/xNk8YYdx/bootstrap4.png",
              starsTotal: 3,
              starsActive: 1,
              color:"text-warning"
            },
            {
              id: 5,
              name: "React",
              imageUrl:
                "https://i.postimg.cc/F7LzB981/react.png",
              starsTotal: 3,
              starsActive: 3,
              color:"text-warning"
            },
            {
              id: 6,
              name: "MySQL",
              imageUrl:
                "https://i.postimg.cc/s11v5PJY/mysql.png",
              starsTotal: 3,
              starsActive: 2,
              color:"text-warning"
            },
            {
              id: 7,
              name: "Python",
              imageUrl:
                "https://i.postimg.cc/WtKt8D9Q/python.png",
              starsTotal: 3,
              starsActive: 2,
              color:"text-warning"
            },
            {
              id: 8,
              name: "Flask",
              imageUrl:
                "https://i.postimg.cc/t1ys6LrJ/flask.png",
              starsTotal: 3,
              starsActive: 1,
              color:"text-warning"
            },
          ],

    };

    async componentDidMount(){

      const[
        responceRecomm,responceSkills,responceProjects,responceBlogs
       ] = await Promise.all([
        axios.get("http://127.0.0.1:5000/api/recomms"),
        axios.get("http://127.0.0.1:5000/api/skills"),
        axios.get("http://127.0.0.1:5000/api/projects"),
        axios.get("http://127.0.0.1:5000/api/blogs")
      ]);   

      const newState={};
      if (responceRecomm.data.isSucessfull && responceRecomm.data.results.length!==0)
      {
        newState.recomms = responceRecomm.data.results;
      }
      if (responceSkills.data.isSucessfull && responceSkills.data.results.length!==0)
      {
        newState.skills = responceSkills.data.results;
      }
      if (responceProjects.data.isSucessfull && responceProjects.data.results.length!==0)
      {
        newState.projects = responceProjects.data.results;
      }
      if (responceBlogs.data.isSucessfull && responceBlogs.data.results.length!==0)
      {
        newState.blogs =responceBlogs.data.results;
      }
      console.log(newState);
      this.setState(newState);  
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;