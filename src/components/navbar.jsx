import '../style/navbar.css'

export default function NavBar(){

    return <>
    <nav className="navbar">
  <div className="containerr">
    
    <ul>
      
      <li className="search">
        
        <div className="box">
          <div className="container-1">
              <span className="icon"><i className="fa fa-search"></i></span>
              <input type="search"  id="search" placeholder="Search..." />
          </div>
        </div>
      </li>
      <li><a href="#">categoria</a></li>
      <li><a href="#">categoria</a></li>
      <li><a href="#">categoria</a></li>
      <li><a href="#">categoria</a></li>
      <li><a href="#">categoria</a></li>
    </ul>
  </div>
</nav>
    </>
}