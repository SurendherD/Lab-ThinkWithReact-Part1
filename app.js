const container = document.getElementById('react-container');
ReactDOM.render("Hello! Welcome to React",container);

const Container=()=>{
    return React.createElement("div",null,"Hey Kalvians! Welcome to React Learning",React.createElement("div",null,"Let's rock and roll"));
}
ReactDOM.render(Container(),container);

class reactContainer extends React.Component{
    element(){
        return React.createElement("div",null,"Hey, Kalvians",React.createElement("div",null,"Let's rock and roll "))
    }
}
const obj= new reactContainer();
ReactDOM.render(obj.element(),container);