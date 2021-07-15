import MenuItems from '../MenuItems/MenuItems';
import Button from '../../../components/UI/button/Button';
import Backdrop from '../../../components/UI/backdrop/Backdrop';
import Logo from './../logo/Logo'
import './SideDrawer.css';

const SideDrawer = (props)=>{
    let classes = ['SideDrawer','Close'];
    if(props.show){
        classes=['SideDrawer','Open']
    }

    return(
        <>
            <Backdrop show={props.show}  modalClosed={props.closeDrawer}/>
            <div className={classes.join(' ')}>
                <Logo height="10%" />
                <nav>
                    <MenuItems />
                </nav>
                <div className="boxButton">
                    <Button btnType="danger" clicked={()=>alert('sign in page opened')}>
                        ورود و ثبت نام
                    </Button>
                </div>
            </div>
        </>
        
    )
}
export default SideDrawer;