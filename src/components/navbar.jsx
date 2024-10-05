import logo from '../assets/logo.svg';
import logoText from '../assets/logo-text.svg';
const Navbar = () => {
    return (
        <nav className="navbar" style={{ position:'fixed' ,display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width:"100%"  }}>

            <div style={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center',marginLeft:"4rem",width:"15%"}} >
                <img src={logo} alt="" height={50} width={50} />

                <img src={logoText} alt="" height={30} />
            </div>
            <div style={{marginRight:"4rem"}}>
                <span style={{color:'white'}}>Assessment</span>
            </div>

        </nav>
    );
};
export default Navbar;