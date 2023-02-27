import classes from "./Header.module.css";

export default function Header() {
    return (
        <header className={classes.container}>
            <nav>
                <div>
                    <h2 style={{fontWeight:"bold"}}>LOGO</h2>
                </div>


                <div>
                    <ul>
                        <li>
                            <a href="" style={{color: "white"}} > Home </a>
                        </li>
                        <li>
                            <a href="" style={{color: "white"}} >About us</a>
                        </li>
                        <li>
                            <a href="" style={{color: "white"}}>Service</a>
                        </li>
                        <li>
                            <a href="" style={{color: "white"}}>News</a>
                        </li>
                        <li>
                            <div>
                                <a href="" className="btn-primary">
                                    Contact us
                                </a>
                            </div>
                        </li>
                    </ul>


                </div>

            </nav>
        </header>
    );
}